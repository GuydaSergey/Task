from checkio_referee import RefereeCodeGolf
from checkio_referee import covercodes


import settings_env
from tests import TESTS


class Referee(RefereeCodeGolf):
    DEFAULT_MAX_CODE_LENGTH = 150
    BASE_POINTS = 10
    TESTS = TESTS
    ENVIRONMENTS = settings_env.ENVIRONMENTS

    DEFAULT_FUNCTION_NAME = "golf"
