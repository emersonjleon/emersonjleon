## Tutoriales Cyborg 
### Programación e inteligencia artificial

# Corrigiendo errores:

Lo mejor que podemos hacer para aprender algo es jugar. Y en ese juego, es normal cometer errores. Lo importante es aprender de ellos, para entenderlos y poco a poco corregirlos. Pero al comienzo es necesario hacer muchos experimentos y no tener miedo a cometer errores. Es mejor intentar diferentes ideas hasta que alguna funcione, que quedarnos sin hacer nada porque no sabemos que hacer. También la curiosidad puede mostrarnos cosas interesantes, todas las ideas son un camino hacia un nuevo descubrimiento.

### Palabras indefinidas, comentarios y cadenas de texto
Vamos a hacer algunos experimentos y modificaciones a nuestro programa de la sección anterior. Por ejemplo, podemos agregarle una línea inicial así: 

{%highlight python%}
Hola, bienvenidos!
# Nuestro primer programa python en español

a = int(input('Ingrese el primer número: '))
b = int(input("Ingrese el segundo número: "))

print(f'La suma de {a} y {b}  es { a+b }')
{%endhighlight%}

Que pasa cuando corremos este programa?

En la pantalla leeremos el siguiente texto.
```
Traceback (most recent call last):
  File "main.py", line 1
    Hola, bienvenidos!
                     ^
SyntaxError: invalid syntax
```
Nos dice que hay un error de sintaxis (`SyntaxError`), pues en la línea 2 hay un símbolo `!` que no está utilizándose de la manera adecuada. El punto donde se encuentra el error  aparece sobre el símbolo `^`.  El error se puede evitar quitando este signo de exclamación. En [online-python.com](https://www.online-python.com/){:target="_blank"} las líneas de nuestro programa aparecen enumeradas para facilitar la busqueda. Esto es cierto también para la mayoría de editores de texto que nos pueden servir para escribir programas.

Si quitamos el signo de exclamación y corremos de nuevo el programa, encontrariamos ahora el siguiente mensaje:


```
  File "main.py", line 1, in <module>
    Hola, bienvenidos
NameError: name 'Hola' is not defined
```
Lo que nos dice este mensaje es lo siguiente: En la línea 1 de nuestro archivo (que aquí se llama `main.py`, pero podemos cambiarle el nombre), donde dice `Hola, bienvenidos` se genera un error (llamado `NameError`) porque la palabra `'Hola'` no está definida.

Podemos evitar este error de varias maneras:
- Mediante un comentario, usando el símbolo `#`. De esta manera, si escribimos `# Hola, bienvenidos!`, esta línea será ignorada.
- Generando una cadena entre comillas.  Si escribimos `'Hola, bienvenidos!'` o `"Hola, bienvenidos!"` estaremos formando un objeto válido en python. Una cadena (de tipo `str`). Si no la guardamos en ninguna parte, no pasará nada con esta cadena. (Aunque lo recomendable para comentarios es usar `#`.)
- También es posible generar cadenas de varias líneas usando comillas triples. Por ejemplo

{%highlight python%} """Hola, bienvenidos!

Este comentario es una cadena que ocupa varias líneas y se encuentra 
encerrado en comillas triples.

Este programa no hace nada al ejecutarse.
"""
{%endhighlight%}

- Si lo que queremos que nuestra cadena sea mostrada en pantalla y no sea ignorada, podemos usar el comando `print`. Así, si escribimos `print('Hola, bienvenidos!')`, el programa nos mostrará esto en pantalla durante la ejecución. También es posible imprimir las cadenas de varias líneas que usan comillas triples.

Muy bien, logramos resolver este primer problema, de tipo `NameError`.










###  Otros tipos de errores 
En el capítulo pasado vimos que la palabra `int` podía ser la fuente de errores al ejecutar nuestro programa. Por ejemplo, alguno de ustedes pudo haber obtenido el siguiente error

```
Ingrese el primer número: 
infinito
Traceback (most recent call last):
  File "main.py", line 3, in <module>
    a = int(input('Ingrese el primer número: '))
ValueError: invalid literal for int() with base 10: 'infinito'
```
Este mensaje nos dice que tenemos un error (`ValueError`) en la linea 3, donde dice
 `a = int(input('Ingrese el primer número: '))`, pues la función `int()` recibió un numeral invalido `'infinito'`. Esto ocurre porque python no sabe convertir la cadena `'infinito'` en un número entero en base 10.

Ahora, que pasaría si quitamos la palabra `int` de nuestra línea 3?
Que nuevos tipos de errores podemos encontrar?

Un primer intento de quitar `int`  podria generar este programa. Cortalo y pegalo en [online-python.com](https://www.online-python.com/){:target="_blank"} para que compruebes lo que ocurre.


{%highlight python%}
# Modificando nuestro primer programa python en español
print(Hola, bienvenidos!)

a = input('Ingrese el primer número: '))
b = int(input("Ingrese el segundo número: "))

print(f'La suma de {a} y {b}  es { a+b }')
{%endhighlight%}

- Si corremos el anterior programa obtenemos el siguiente error:
```
  File "main.py", line 2
    print(Hola, bienvenidos!)
                           ^
SyntaxError: invalid syntax
```


- Si corremos el ahora el programa después de:


```
File "main.py", line 4
    a = input('Ingrese el primer número: '))
                                           ^
SyntaxError: unmatched ')'
```
Nos dice que hay un error de sintaxis (`SyntaxError`), pues hay un paréntesis que no está debidamente emparejado. El error se corrige simplemente quitando el último paréntesis (que aparece sobre el símbolo `^`). No pasa nada si cometemos errores. Esto ocurre todo el tiempo.

- Luego de quitar este paréntesis, al correr el programa, es posible que obtengamos el siguiente error: 

```
File "main.py", line 7, in <module>
    print(f'La suma de {a} y {b}  es { a+b }')
TypeError: can only concatenate str (not "int") to str
```
Este error (`TypeError`) es causado porque en la línea 7, donde sumamos `a+b`, el tipo de las variables `a` y `b` no es compatible. En la siguiente sección aprenderemos un poco mas sobre los [tipos de objetos](tiposdeObjetos.html).
La función `input` genera siempre cadenas de tipo `str`, mientras que la función `int` transforma otros objetos en números enteros de tipo `int`.

Una manera de corregir esto es eliminando la palabra `int` en ambas líneas. Veamos lo que ocurre cuando corremos el siguiente programa:

{%highlight python%}
# Modificando nuestro primer programa python en español
print(Hola, bienvenidos!)

a = input('Ingrese el primer número: ')
b = input("Ingrese el segundo número: ")

print(f'La suma de {a} y {b}  es { a+b }')
{%endhighlight%}




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


