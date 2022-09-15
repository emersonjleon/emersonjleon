## Tutoriales Cyborg
### [Programación e inteligencia artificial](home.html) 

# Corrigiendo errores

Lo mejor que podemos hacer para aprender algo es jugar. Y en ese juego, es normal cometer errores. Lo importante es aprender de ellos, para entenderlos y poco a poco corregirlos. Pero al comienzo es necesario hacer muchos experimentos y no tener miedo a cometer errores. Es mejor intentar diferentes ideas hasta que alguna funcione, que quedarnos sin hacer nada porque no sabemos que hacer. También la curiosidad puede mostrarnos cosas interesantes, todas las ideas son un camino hacia un nuevo descubrimiento.

### Palabras indefinidas, comentarios y cadenas de texto
Vamos a hacer algunos experimentos y modificaciones a nuestro programa de la sección anterior. Por ejemplo, podemos agregarle una línea inicial así: 

{%highlight python%}
Hola, bienvenidos
# Nuestro primer programa python en español

a = int(input('Ingrese el primer número: '))
b = int(input("Ingrese el segundo número: "))

print(f'La suma de {a} y {b}  es { a+b }')
{%endhighlight%}

Que pasa cuando corremos este programa?

En la pantalla leeremos el siguiente texto.


```
  File "main.py", line 1, in <module>
    Hola, bienvenidos
NameError: name 'Hola' is not defined
```
Lo que nos dice este mensaje es lo siguiente: En la línea 1 de nuestro archivo (que aquí se llama `main.py`, pero podemos cambiarle el nombre), donde dice `Hola, bienvenidos` se genera un error (llamado `NameError`) porque la palabra `'Hola'` no está definida.

En [online-python.com](https://www.online-python.com/){:target="_blank"} las líneas de nuestro programa aparecen enumeradas para facilitar la busqueda. Esto es cierto también para la mayoría de editores de texto que nos pueden servir para escribir programas.

Podemos evitar este error de varias maneras:
- Mediante un comentario, usando el símbolo `#`. De esta manera, si escribimos `# Hola, bienvenidos!`, esta línea será ignorada.
- Generando una cadena entre comillas.  Si escribimos `'Hola, bienvenidos!'` o `"Hola, bienvenidos!"` estaremos formando un objeto válido en python, una cadena (de tipo `str`). Si no la guardamos en ninguna parte, no pasará nada con esta cadena. (Aunque lo recomendable para crear comentarios es usar `#`.)
- También es posible generar cadenas de varias líneas usando comillas triples. Por ejemplo

{%highlight python%} """Hola, bienvenidos!

Este comentario es una cadena que ocupa varias líneas y se encuentra 
encerrado en comillas triples.

Este programa no hace nada al ejecutarse.
"""
{%endhighlight%}

- Si lo que queremos que nuestra cadena sea mostrada en pantalla y no sea ignorada, podemos usar el comando `print`. Así, si escribimos `print('Hola, bienvenidos!')`, el programa nos mostrará `Hola, bienvenidos!` en pantalla durante la ejecución. También es posible imprimir las cadenas de varias líneas que usan comillas triples.

Si por ejemplo escribimos `print(Hola, bienvenidos!)` obtendríamos el siguiente mensaje: 
```
Traceback (most recent call last):
  File "main.py", line 1
    print(Hola, bienvenidos!)
                           ^
SyntaxError: invalid syntax
```
Nos dice que hay un error de sintaxis (`SyntaxError`), pues en la línea 2 hay un símbolo `!` que no está utilizándose de la manera adecuada. El punto donde se encuentra el error  aparece sobre el símbolo `^`.  El error se puede evitar quitando este signo de exclamación `!` que en python tiene varios posibles usos, pero que no nos interesan en este momento. Simplemente queremos imprimir una cadena y para esto es necesario que coloquemos comillas `""` o `''` al rededor de nuestro mensaje. Por lo tanto, la manera correcta de imprimir nuestro mensaje es `print('Hola, bienvenidos!')`.


Muy bien, ya sabemos como resolver estos primeros problemas y escribir nuestro mensaje "Hola, bienvenidos!".










###  Otros tipos de errores y analizando `int`
En la [sección anterior](primerasPalabras.html)
 vimos que la función `int` podría ser la fuente de algunos errores al ejecutar nuestro programa. Por ejemplo, alguno de ustedes pudo haber obtenido algo como lo siguiente.

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

Incluso cadenas numéricas con decimales como `'3,1416'`, `'-287.463'` pueden generar problemas de `ValueError`. (Para trabajar con números decimales necesitaríamos usar la función `'float'` en lugar de `'int'` y recordar usar un punto decimal `.` en vez de la coma, pues en python la coma `,` tiene otros usos.)
Si la cadena que ingresamos muestra correctamente un numero entero, como `'17'`, `'287463'` o `'-8'`, no tendríamos ningún problema. En la sección [Tipos de objetos](tiposdeObjetos.html) hablaremos un poco más sobre objetos numéricos de tipo `int` y `float`.

- Ahora, ¿qué pasaría si para evitar este tipo de errores quitamos la palabra `int` de nuestra línea 3?
¿Qué nuevos tipos de errores podemos encontrar? ¿Qué podemos aprender de todo esto?

Un primer intento de quitar `int`  podría generar el siguiente programa. Podemos cortarlo y pegarlo en [online-python.com](https://www.online-python.com/){:target="_blank"} para ver lo que ocurre.


{%highlight python%}
# Modificando nuestro primer programa python en español
print('Hola, bienvenidos!')

a = input('Ingrese el primer número: '))
b = int(input("Ingrese el segundo número: "))

print(f'La suma de {a} y {b}  es { a+b }')
{%endhighlight%}


- Si corremos el anterior programa obtenemos el siguiente error.
```
File "main.py", line 4
    a = input('Ingrese el primer número: '))
                                           ^
SyntaxError: unmatched ')'
```
Nos dice que hay un error de sintaxis (`SyntaxError`), pues hay un paréntesis que no está debidamente emparejado. El error se corrige simplemente quitando el último paréntesis (que aparece sobre el símbolo `^`). No pasa nada si cometemos errores. Es normal, esto ocurre todo el tiempo cuando estamos programando.

- Luego de quitar este paréntesis, al correr el programa, es posible que obtengamos el siguiente error: 

```
File "main.py", line 7, in <module>
    print(f'La suma de {a} y {b}  es { a+b }')
TypeError: can only concatenate str (not "int") to str
```
Este error (`TypeError`) es causado porque en la línea 7, donde sumamos `a+b`, el tipo de las variables `a` y `b` no es compatible. En la siguiente sección aprenderemos un poco mas sobre los [tipos de objetos](tiposdeObjetos.html).
La función `input` genera siempre cadenas de tipo `str`, mientras que la función `int` transforma otros objetos en números enteros de tipo `int`.

Una manera de corregir esto es eliminando la palabra `int` en ambas líneas. Así obtenemos el siguiente programa:

{%highlight python%}
# Modificando nuestro primer programa python en español
print('Hola, bienvenidos!')

a = input('Ingrese el primer número: ')
b = input("Ingrese el segundo número: ")

print(f'La suma de {a} y {b}  es { a+b }')
{%endhighlight%}

Este programa nos puede dar resultados inesperados como el siguiente.

```
Hola, bienvenidos!
Ingrese el primer número: 
12
Ingrese el segundo número: 
34
La suma de 12 y 34  es 1234
```

Podemos ver que esta no es una suma normal... Algo diferente está ocurriendo. Lo bueno es que ya no obtenemos ningún error al ingresar todo tipo de texto. Por ejemplo, podríamos obtener lo siguiente. 

```
Hola, bienvenidos!
Ingrese el primer número: 
coco
Ingrese el segundo número: 
banano
La suma de coco y banano  es cocobanano
```

¿Qué está pasando aquí? Ahora las variables `a` y `b` están recibiendo el resultado de la función `input`, que es siempre una cadena. Y cuando le pedimos que realice la operación `a+b` python entiende que debe realizar una suma de cadenas, una _concatenación_. Es decir, el resultado de `a+b` es una cadena que se forma poniendo primero los caracteres de la cadena `a` y luego los de `b`.

Te invitamos a que realices mas experimentos con estos programas!

## Mas ejemplos
Con esto que has aprendido, ya estás listo para crear tus primeros programas. ¿Qué otros experimentos se te ocurren? Yo se que hasta ahora estamos comenzando, pero es bueno practicar lo que hemos aprendido, crear tus primeras frases y ser creativos. 

Acá hay ejemplos de dos programas sencillos que te podrían dar más ideas para practicar lo que aprendiste. Modifícalos a tu antojo y diviértete.

{%highlight python%}
# Programa que pregunta tu nombre y luego saluda

nombre = input('¿Cuál es tu nombre? ')
print(f'Es un gusto saludarte, { nombre }')
{%endhighlight%}





{%highlight python%} 
# Programa de python que calcula el precio de un pedido, preguntando cuantos panes y cuantas bebidas se consumieron.

#calcular precio de panes
precio_pan = float(input("Introduzca el precio de un pan: "))
numero_panes = int(input("Introduzca el número de panes: "))
total_panes = precio_pan*numero_panes

#calcular precio de bebidas
precio_bebida = float(input("Introduzca el precio de una bebida: "))
numero_bebidas = int(input("Introduzca el número de bebidas: "))
total_bebidas = precio_bebida*numero_bebidas

#calcular precio total del pedido
total = total_panes+total_bebidas

#mostrar resultado
print("El precio total del pedido es:", total)
{%endhighlight%}

Este último programa fue generado usando la inteligencia artificial de [openAI](https://openai.com/api){:target="_blank"}, para ver más ejemplos y crear tus propios programas usando la inteligencia artificial, mira nuestra sección [Usando la inteligencia artificial](usandoAI.html).






