from checkio_referee import RefereeRank, representations, ENV_NAME


import settings_env
from tests import TESTS

py_cover = """def cover(f, d):
    if len(d) <= 2:
        return f(d[0], str(d[1]))
    else:
        return f(d[0], str(d[1]), d[2])
"""

js_cover = """var cover = function(f, d){
    if (d.length <= 2) {
        return f(d[0], d[1])
    }
    else {
        return f(d[0], d[1], d[2])
    }
}"""


class Referee(RefereeRank):
    TESTS = TESTS
    ENVIRONMENTS = settings_env.ENVIRONMENTS

    DEFAULT_FUNCTION_NAME = "check_structure"
    FUNCTION_NAMES = {
        ENV_NAME.JS_NODE: "checkStructure"
    }

    ENV_COVERCODE = {
        ENV_NAME.PYTHON: py_cover,
        ENV_NAME.JS_NODE: js_cover
    }
    CALLED_REPRESENTATIONS = {
        ENV_NAME.PYTHON: representations.unwrap_arg_representation,
        ENV_NAME.JS_NODE: representations.unwrap_arg_representation,
    }
