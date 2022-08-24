# Tutoriales Cyborg 
## Programación e inteligencia artificial

### Introducción

Queremos hacer aquí una introducción al mundo de la programación usando la inteligencia artificial.  Para la inteligencia artificial usaremos el procesamiento de lenguaje de [openAI](https://openai.com/api){:target="_blank"}.

Los lenguajes que usaremos principalmente son [python](https://www.online-python.com/){:target="_blank"} y [javascript](https://www.w3schools.com/js/default.asp){:target="_blank"}.

En la programación clásica es necesario conocer los diferentes comandos de un lenguaje de programación, en donde cada pequeño detalle, cada coma o paréntesis puede generar errores si no se colocaba en el lugar adecuado. Esto tiene la ventaja de ser muy preciso. Así el computador hace exactamente lo que nosotros le indicamos. La desventaja es que no es fácil explicarle al computador paso por paso lo que nosotros queremos.

Mediante la inteligencia artificial, ahora es posible decirle al computador: "necesito un programa en lenguaje python que realize la siguiente tarea..."


{%highlight python%} 
# Simple python program using the functions input, print, int#* and str

print('This is a python program')

input('Press Enter to continue')

x = int(input('Enter a number: '))

print('The number is: ' + str(x))

input('Press Enter to exit')
{%endhighlight%}



{%highlight python%} 
"""
Programa en python que utiliza las funciones input, print y cadenas formateadas
"""#*

# Declaración de variables
nombre = "Eugenio"
edad = 35
dni = "12345678X"

# Declaración de constantes
CADENA_SALIDA = "Hola {0}! Tienes {1} años y tu DNI es {2}"

# Entrada de datos
print("Introduce tu nombre:")
nombre = input()

print("Introduce tu edad:")
edad = int(input())

print("Introduce tu DNI:")
dni = input()

# Salida de datos
print(CADENA_SALIDA.format(nombre, edad, dni))
{%endhighlight%}

{%highlight python%} 
"""
Programa en python que utiliza las funciones input, print y cadenas formateadas#*
"""
print("Como te llamas? ", end="")
nombre=input()
print("\nHola {0}, bienvenido al curso de Python, espero que disfrutes del contenido.".format(nombre))
{%endhighlight%}



{%highlight python%} 
"""
Programa en python3 que utiliza las funciones input, print y cadenas formateadas f'...'
"""#*

print('Ingrese nombre y edad y le devolveré un saludo:')
nombre = input('Nombre: ')
edad = input('Edad: ')
print(f'Hola, {nombre}, con {edad} años.')
{%endhighlight%}













{%highlight python%} 
"""
Programa en python3 que utiliza las funciones input, print, if y cadenas formateadas
"""

nombre = input("¿Cuál es tu nombre? ")

print('Hola %s, encantado de conocerte!' %(nombre))

"""
El programa se va a ejecutar de la siguiente manera:

$ python3 saludo.py
¿Cuál es tu nombre? Iván
Hola Iván, encantado de conocerte!
"""
{%endhighlight%}








(Segunda ejecución con la misma entrada. Esta vez sí utiliza un condicional if)

{%highlight python%} 
"""
Programa en python3 que utiliza las funciones input, print, if y cadenas formateadas
"""#*

nombre = input("¿Cómo te llamas? ")
print(f"Hola {nombre}")

if nombre == "Joaquín":
    print(f"Hola, yo también me llamo {nombre}")
else:
    print(f"Me gusta tu nombre, {nombre}")
{%endhighlight%}



{%highlight python%} 
"""
Python program computing the following moon phases for a given day
"""
import sys
import math
from datetime import datetime
from datetime import timedelta
import calendar
from astral import Astral
import pytz

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
{%endhighlight%}





### Nuestro tutorial
- [Primeras palabras en python](capitulo1.html)
- [Usando la inteligencia artificial](usandoAI.html)
- [Condicionales y funciones lógicas](capitulo2.html)
### Otras Páginas 