# Tutoriales Cyborg 
### Programación e inteligencia artificial

Un lenguaje de programación nos permite hablar con el computador, decirle lo que queremos que haga. Cada línea de código es un comando, y uniendo varias lineas podemos crear un programa. Todos los programas y aplicaciones que usamos a diario han sido programadas línea por línea. Podemos pensar que estos son los ladrillos que al unirse construyen el mundo virtual.

## Primeras palabras en python

Python es un lenguaje de programación. Entre otros lenguajes, hemos elegido comenzar por python pues es uno de los más sencillos, populares y con mayor cantidad de librerias disponibles, con todo tipo de aplicaciones.

En [online-python.com](https://www.online-python.com/){:target="_blank"} podemos correr programas de python directamente desde internet en el computador o teléfono móbil. Ahí tambien podemos guardar nuestros programas en archivos terminados en `.py`. Esto nos puede servir para  ejecutar los programas localmente, después de haber instalado `python3` en nuestro computador.

Al ingresar a [online-python.com](https://www.online-python.com/){:target="_blank"}, aparecerá un espacio de texto con un programa. Podemos correrlo oprimiendo **RUN**. También podemos modificarlo para hacer diferentes pruebas. En particular podemos cambiarlo por una versión simplificada en español:


{%highlight python%}
# Nuestro primer programa python en español

a = int(input('Ingrese el primer número: '))
b = int(input("Ingrese el segundo número: "))

print(f'la suma de {a} y {b}  es { a+b }')
{%endhighlight%}

Este texto puede ser copiado y pegado en [online-python.com](https://www.online-python.com/){:target="_blank"}. Al presionar **Run** veremos que el programa nos pide dos números y nos devuelve la suma. Veamos ahora algunas observaciónes de las palabras que aparecen en este programa. 

- Las líneas que comienzan con `#` no son evaluadas. Son llamadas _comentarios_. Ahí podemos escribir cualquier cosa que queramos, usualmente algo que nos ayude a entender nuestro programa. 
- `input('cadena de texto')` es una función que nos muestra en pantalla una 'cadena de texto' que nosotros queramos, y dan como resultado otra cadena de texto que nosotros ingresamos por el teclado. En python, las cadenas de texto se escriben entre comillas `'...'` o `""`.
- `int('texto numérico')` (abrev. de _integer_) toma una cadena de `'texto numérico'` e intenta convertirla en un número entero. Si la cadena no es numérica, se produce un error. Los errores son algo normal en el mundo de la programación, más sobre esto lo encontrarás en el [Capitulo 3](capitulo3.html).
- Si escribimos `a=5`, estamos colocando el número entero 5 en la _variable_ `a`. En lugar de escribir `a` podríamos haber elegido cualquier otro nombre para esta variable, como por ejemplo `valor1` o `primer_numero`. Se recomienda utilizar nombres expresivos y apropiados para facilitar la lectura del programa. Que cada persona que vea la variable sepa posiblemente de que estamos hablando. Se deben evitar los nombres de otras funciones y variables de python. Es posible guardar todo tipo de objetos en las variables.

Con esta informacion encontramos que la línea
`a = int(input('Ingrese el primer número: '))`
realiza las siguientes cosas:
- Escribe en pantalla `Ingrese el primer número: ` y espera que ingresemos un texto.
- Al ingresar por teclado una cadena (que es el resultado de la función `input`), transforma este valor en un número entero (mediante la función `int`). Si el texto ingresado no corresponde a un número entero, se genera un error `ValueError`

- Guarda en la variable `a` el valor entero que se obtenga de `input('Ingrese el primer número: '` (en caso que no se haya generado ningún error).

Con esto, hemos decifrado lo que realiza nuestra primera línea de código! De manera similar, la línea `b = int(input('Ingrese el segundo número: '))` nos preguntará un segundo número, que debe ser entero.










- Las cadenas formateadas `f'...'` no son tomados literalmente, sino que evaluan los elementos entre corchetes {} colocando ahí el resultado.







### Ejemplos:

{%highlight python%}
# Programa que pregunta tu nombre y luego saluda

nombre = input('Cuál es tu nombre? ')
print(f'Es un gusto saludarte, { nombre }')
{%endhighlight%}




Acá  hay un ejemplo en donde personalizamos la función suma y la llamamos 'miTotal'. Podríamos haberle puesto cualquier otro nombre




{%highlight python%}
# Definiendo una función personalizada "miTotal"

def miTotal(a, b):
    return (500*int(a) + 1000*int(b))

print("Cuántos panes y cuántas bebidas? panes a 500, bebidas a 1000")
a = input('panes: ')
b = input('bebida: ')

# 
print(f'el precio total de {a} panes y {b} bebidas es { miTotal(a,b) }')
{%endhighlight%}


