from checkio_referee import RefereeBase
from checkio_referee import representations, covercodes, ENV_NAME

import settings_env

from tests import TESTS


py_cover = """def cover(func, data):
    return func(tuple(set(el) for el in data))
"""


def tuple_sets_representation(test, function_name):
    arguments = tuple(str(set(d)) for d in test["input"])
    return "{}({})".format(function_name, arguments)


class Referee(RefereeBase):
    TESTS = TESTS
    ENVIRONMENTS = settings_env.ENVIRONMENTS

    DEFAULT_FUNCTION_NAME = "break_rings"
    FUNCTION_NAMES = {
        ENV_NAME.JS_NODE: "breakRings"
    }
    CALLED_REPRESENTATIONS = {
        ENV_NAME.PYTHON: py_cover,
    }
    ENV_COVERCODE = {
        ENV_NAME.PYTHON: tuple_sets_representation
    }
