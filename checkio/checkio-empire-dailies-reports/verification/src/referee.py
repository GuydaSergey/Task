from checkio_referee import RefereeBase
from checkio_referee import covercodes, representations, ENV_NAME


import settings_env
from tests import TESTS


unwrap_str_cover = """def cover(func, data):
    return func(*[str(x) for x in data])
"""


class Referee(RefereeBase):
    TESTS = TESTS
    ENVIRONMENTS = settings_env.ENVIRONMENTS

    DEFAULT_FUNCTION_NAME = "count_reports"
    FUNCTION_NAMES = {
        ENV_NAME.JS_NODE: "countReports"
    }
    ENV_COVERCODE = {
        ENV_NAME.PYTHON: covercodes.py_unwrap_args,
        ENV_NAME.JS_NODE: covercodes.js_unwrap_args
    }
    CALLED_REPRESENTATIONS = {
        ENV_NAME.PYTHON: representations.unwrap_arg_representation,
        ENV_NAME.JS_NODE: representations.unwrap_arg_representation
    }
