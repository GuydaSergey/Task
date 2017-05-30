from checkio_referee import RefereeRank


import settings_env
from tests import TESTS


class Referee(RefereeRank):
    TESTS = TESTS
    ENVIRONMENTS = settings_env.ENVIRONMENTS

    DEFAULT_FUNCTION_NAME = "non_unique"
    FUNCTION_NAMES = {
        "python_3": "non_unique",
        "js_node": "nonUnique"
    }
