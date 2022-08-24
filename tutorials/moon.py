#Programa generado mediante openAI
"""
Python program computing the following moon phases for a given day
"""
import sys
import math
from datetime import datetime
from datetime import timedelta
import calendar
#from astral import Astral
#import pytz

# Define constants
# Note that the moon phase names are defined as integer values for
# moon phases for the given phases (in degrees):
#
# New Moon = 0
# First Quarter = 90
# Full Moon = 180
# Last Quarter = 270

NEW_MOON = 0
FIRST_QUARTER = 90
FULL_MOON = 180
LAST_QUARTER = 270

# Define days for each phase
# Defined as absolute value of days since Jan. 1st, 1970, 00:00:00 UTC)

NEW_MOON_DAY = 1721139
FIRST_QUARTER_DAY = 1721169
FULL_MOON_DAY = 1721199
LAST_QUARTER_DAY = 1721229

# Function definition
def get_moon_phase(date_time, timezone):
    """Returns the moon phase (an int) for the given date_time and timezone"""

    # Get the absolute value of the days since Jan. 1st, 1970, 00:00:00 UTC)
    absolute_day = int(calendar.timegm(date_time.timetuple()))

    # Calculate the phase of the moon for the given absolute day
    # See http://www.stargazing.net/kepler/moonphase.html for more information
    # Lunar phase is the angle between (the moon and the (earth+sun))
    # and is therefore 0 at new moon and 180 degrees at full moon

    # Get the absolute value of the days since Jan. 1st, 2000, 12:00:00 UTC)
    absolute_day_2000 = absolute_day - 915148800

    # Calculate the phase of the moon in degrees
    moon_phase = (
        180.0 -
        180.0 / math.pi *
        math.acos(
            (math.sin(2 * math.pi * absolute_day_2000 / NEW_MOON_DAY) +
             math.sin(2 * math.pi * absolute_day_2000 / FULL_MOON_DAY)) / 2))

    return moon_phase


def get_moon_phase_name(moon_phase):
    """Returns the phase name (a string) for the given moon phase"""

    if NEW_MOON <= moon_phase < FIRST_QUARTER:
        return "New Moon"
    elif FIRST_QUARTER <= moon_phase < FULL_MOON:
        return "First Quarter"
    elif FULL_MOON <= moon_phase < LAST_QUARTER:
        return "Full Moon"
    elif LAST_QUARTER <= moon_phase < 360:
        return "Last Quarter"
    else:
        return "Unknown"


def get_moon_phase_abbreviation(moon_phase):
    """Returns the phase abbreviation (a string) for the given moon phase"""

    if NEW_MOON <= moon_phase < FIRST_QUARTER:
        return "NM"
    elif FIRST_QUARTER <= moon_phase < FULL_MOON:
        return "FQ"
    elif FULL_MOON <= moon_phase < LAST_QUARTER:
        return "FM"
   
