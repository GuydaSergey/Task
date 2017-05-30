//Dont change it
requirejs(['ext_editor_1', 'jquery_190', 'raphael_210'],
    function (ext, $, TableComponent) {

        var cur_slide = {};

        ext.set_start_game(function (this_e) {
        });

        ext.set_process_in(function (this_e, data) {
            cur_slide["in"] = data[0];
        });

        ext.set_process_out(function (this_e, data) {
            cur_slide["out"] = data[0];
        });

        ext.set_process_ext(function (this_e, data) {
            cur_slide.ext = data;
            this_e.addAnimationSlide(cur_slide);
            cur_slide = {};
        });

        ext.set_process_err(function (this_e, data) {
            cur_slide['error'] = data[0];
            this_e.addAnimationSlide(cur_slide);
            cur_slide = {};
        });

        ext.set_animate_success_slide(function (this_e, options) {
            var $h = $(this_e.setHtmlSlide('<div class="animation-success"><div></div></div>'));
            this_e.setAnimationHeight(115);
        });

        ext.set_animate_slide(function (this_e, data, options) {
            var $content = $(this_e.setHtmlSlide(ext.get_template('animation'))).find('.animation-content');
            if (!data) {
                console.log("data is undefined");
                return false;
            }

            //YOUR FUNCTION NAME
            var fname = 'weak_point';

            var checkioInput = data.in;
            var checkioInputStr = fname + '(' + JSON.stringify(checkioInput) + ')';

            var failError = function (dError) {
                $content.find('.call').html('Fail: ' + checkioInputStr);
                $content.find('.output').html(dError.replace(/\n/g, ","));

                $content.find('.output').addClass('error');
                $content.find('.call').addClass('error');
                $content.find('.answer').remove();
                $content.find('.explanation').remove();
                this_e.setAnimationHeight($content.height() + 60);
            };

            if (data.error) {
                failError(data.error);
                return false;
            }

            if (data.ext && data.ext.inspector_fail) {
                failError(data.ext.inspector_result_addon);
                return false;
            }

            var rightResult = data.ext["answer"];
            var userResult = data.out;
            var result = data.ext["result"];
            var result_addon = data.ext["result_addon"];


            //if you need additional info from tests (if exists)
            var explanation = data.ext["explanation"];

            $content.find('.output').html('&nbsp;Your result:&nbsp;' + JSON.stringify(userResult));

            if (!result) {
                $content.find('.call').html('Fail: ' + checkioInputStr);
                $content.find('.answer').html('Right result:&nbsp;' + JSON.stringify(rightResult));
                $content.find('.answer').addClass('error');
                $content.find('.output').addClass('error');
                $content.find('.call').addClass('error');
            }
            else {
                $content.find('.call').html('Pass: ' + checkioInputStr);
                $content.find('.answer').remove();
            }

            if (explanation) {
                var canvas = new DurabilityMatrix();
                canvas.draw($content.find(".explanation")[0], checkioInput, explanation[0], explanation[1], rightResult);
            }



            this_e.setAnimationHeight($content.height() + 60);

        });

        //This is for Tryit (but not necessary)
//        var $tryit;
//        ext.set_console_process_ret(function (this_e, ret) {
//            $tryit.find(".checkio-result").html("Result<br>" + ret);
//        });
//
//        ext.set_generate_animation_panel(function (this_e) {
//            $tryit = $(this_e.setHtmlTryIt(ext.get_template('tryit'))).find('.tryit-content');
//            $tryit.find('.bn-check').click(function (e) {
//                e.preventDefault();
//                this_e.sendToConsoleCheckiO("something");
//            });
//        });
        function DurabilityMatrix(options) {
            options = options || {};

            var colorOrange4 = "#F0801A";
            var colorOrange3 = "#FA8F00";
            var colorOrange2 = "#FAA600";
            var colorOrange1 = "#FABA00";

            var colorBlue4 = "#294270";
            var colorBlue3 = "#006CA9";
            var colorBlue2 = "#65A1CF";
            var colorBlue1 = "#8FC7ED";

            var colorGrey4 = "#737370";
            var colorGrey3 = "#9D9E9E";
            var colorGrey2 = "#C5C6C6";
            var colorGrey1 = "#EBEDED";

            var colorWhite = "#FFFFFF";

            var padding = 10;
            var cell = 30;

            var size;
            var paper;

            var attrRect = {"stroke": colorBlue4, "stroke-width": 2, "fill": colorBlue1};
            var attrDur = {"font-family": "Roboto", "font-size": 20, "stroke": colorBlue4};
            var attrSum = {"font-family": "Roboto", "font-size": 16, "stroke": colorBlue4};

            this.draw = function(dom, matrix, rows, cols, weak) {
                size = padding * 2 + (matrix.length + 1) * cell;
                paper = Raphael(dom, size, size);
                var mRow = Math.min.apply(Math.min, rows);
                var mCol = Math.min.apply(Math.min, cols);
                for (var i = 0; i < rows.length; i++) {
                    var t = paper.text(padding + cell / 2, padding + cell * 1.5 + cell * i, rows[i]).attr(attrSum);
                    if (rows[i] === mRow) {
                        t.attr({"stroke": colorOrange4, "fill": colorOrange4});
                    }
                }
                for (i = 0; i < cols.length; i++) {
                    t = paper.text(padding + cell * 1.5 + cell * i, padding + cell / 2, cols[i]).attr(attrSum);
                    if (cols[i] === mCol) {
                        t.attr({"stroke": colorOrange4, "fill": colorOrange4});
                    }
                }

                for (var row = 0; row < matrix.length; row++) {
                    for (var col = 0; col < matrix[row].length; col++) {
                        var r = paper.rect(
                            padding + cell + cell * col,
                            padding + cell + cell * row,
                            cell, cell).attr(attrRect);
                        paper.text(
                            padding + cell * 1.5 + cell * col,
                            padding + cell * 1.5 + cell * row,
                            matrix[row][col]
                        ).attr(attrDur);
                        if (rows[row] === mRow || cols[col] === mCol) {
                            r.attr("fill", colorOrange1);
                        }
                        if (row === weak[0] && col === weak[1]) {
                            r.attr("fill", colorOrange4);
                        }
                    }
                }
//
//
//
//
//                    for (var j = -1; j < matrix.length; j++) {
//
//                    }
//                }


            }


        }

    }
);
