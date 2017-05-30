from checkio.signals import ON_CONNECT
from checkio import api
from golf import CheckioRefereeGolf

from tests import TESTS

cover = """def cover(f, data):
    return f(str(data[0]))
"""


api.add_listener(
    ON_CONNECT,
    CheckioRefereeGolf(
        max_length=200,
        cover_code={
            'python-27': cover,
            'python-3': cover
        },
        tests=TESTS,
        DEFAULT_FUNCTION_NAME="golf"
    ).on_ready)
