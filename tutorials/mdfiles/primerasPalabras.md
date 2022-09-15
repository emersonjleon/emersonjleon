## Tutoriales Cyborg
### [Programación e inteligencia artificial](home.html) 

# Primeras palabras en python
Un lenguaje de programación nos permite hablar con el computador, decirle lo que queremos que haga. Cada línea de código es un comando, y uniendo varias líneas podemos crear un programa. Todos los programas y aplicaciones que usamos a diario han sido programadas línea por línea. Podemos pensar que estos son los ladrillos que al unirse construyen el mundo virtual. Y para aprender un lenguaje debemos comenzar por aprender el significado de algunas palabras y construir nuestras primeras frases. 

Para empezar vamos a visitar la página  [online-python.com](https://www.online-python.com/){:target="_blank"}, donde podemos correr programas de python directamente desde internet en el computador o teléfono móbil sin necesidad de instalar nada. 
Al ingresar a [online-python.com](https://www.online-python.com/){:target="_blank"}, aparecerá un espacio de texto con un programa. Podemos correrlo oprimiendo **`RUN`**. También podemos modificarlo para hacer diferentes pruebas. En particular podemos cambiarlo por una versión simplificada en español:


{%highlight python%}
# Nuestro primer programa python en español

a = int(input('Ingrese el primer número: '))
b = int(input("Ingrese el segundo número: "))

print(f'La suma de {a} y {b}  es { a+b }')
{%endhighlight%}

Vamos a analizar un  que es lo que hace este programa, que es lo que significa cada palabra que se encuentra ahí. El texto del programa anterior puede ser copiado y pegado en [online-python.com](https://www.online-python.com/){:target="_blank"}. Si hacemos esto, al presionar **Run** veremos que el programa nos pide un número, luego otro y al final nos devuelve la suma de los dos. Veamos ahora algunas observaciones de la forma en que funciona este programa. 

- Las diferentes líneas de código son comandos que le dan órdenes al computador der realizar una tarea específica. Las palabras `int`, `input` y `print` son palabras especiales del lenguaje python. (Hay muchas más palabras especiales, nosotros podemos definir nuevas palabras y redefinir otras.)
- Las líneas que comienzan con `#` no son evaluadas. Son llamadas _comentarios_. Ahí podemos escribir cualquier cosa que queramos, usualmente algo que nos ayude a entender nuestro programa. 
- `input('cadena de texto')` es una función que nos muestra en pantalla una `'cadena de texto'` que nosotros queramos, y dan como resultado otra cadena de texto que nosotros ingresamos por el teclado. En python, las cadenas de texto se escriben entre comillas `'...'` o `""`.
- `int('texto numérico')` (abrev. de _integer_) toma una cadena de `'texto numérico'` e intenta convertirla en un número entero. Si la cadena no es numérica, se produce un error. 
- Si escribimos `a=5`, estamos colocando el número entero 5 en la _variable_ `a`. En lugar de escribir `a` podríamos haber elegido cualquier otro nombre para nuestra variable, como por ejemplo `valor1` o `primer_número`. Se recomienda utilizar nombres expresivos y apropiados para facilitar la lectura del programa. Que cada persona que vea la variable sepa posiblemente de que estamos hablando. Se deben evitar los nombres de otras funciones y variables de python. Es posible guardar todo tipo de objetos en las variables.

Con esta información encontramos que la línea
`a = int(input('Ingrese el primer número: '))`
realiza las siguientes cosas:
- Escribe en pantalla `Ingrese el primer número: ` y espera que ingresemos un texto.
- Al ingresar por teclado una cadena (que es el resultado de la función `input`), transforma este valor en un número entero (mediante la función `int`). Si el texto ingresado no corresponde a un número entero, se genera un error `ValueError`. (Más información sobre errores en la sección [Corrigiendo errores](corrigiendoErrores.html))

- Guarda en la variable `a` el valor entero que se obtenga de `input('Ingrese el primer número: '` (en caso que no se haya generado ningún error).

Con esto, hemos descifrado lo que realiza nuestra primera línea de código! De manera similar, la línea `b = int(input('Ingrese el segundo número: '))` nos preguntará un segundo número, que debe ser entero.

Para la última línea tenemos las siguientes palabras:
- `print('cadena de texto')` muestra en la pantalla nuestra `cadena de texto`. Es la forma básica para que el computador nos comparta información.
- Las 'cadenas de texto' son tomadas de forma literal para formar un objeto de tipo `str` (más sobre [tipos de objetos](capitulo2.html) en la siguiente sección). Es posible guardarlas en una variable. si escribimos  `mitexto='cadena de texto'`
- Las cadenas formateadas `f'...'` no son tomados literalmente, sino que evalúan los elementos entre corchetes {} colocando ahí el resultado.

De esta forma, la última línea `print(f'La suma de {a} y {b}  es { a+b }')` nos mostrará en la pantalla un texto que se obtiene al reemplazar `{a}` por el valor númerico guardado en `a` en la primera línea, `{b}` por el número guardado en `b` y { a+b } por el número que se obtiene al sumar `a` y `b`. Así, por ejemplo, si ingresamos en nuestro programa los números 23 y 34, el programa imprimirá

`La suma de 23 y 34  es 57`

- Es posible hacer todo tipo de operaciones matemáticas en python. La suma se forma con el símbolo `+`, la resta con `-`, la multiplicación con `*` y la división con `/`. En la sección [Tipos de objetos](tiposdeObjetos.html) veremos más detalles sobre números y sus operaciones.

Genial, con esto hemos repasado todas las palabras y expresiones de nuestro programa!



### Más ejemplos:
Aunque las explicaciones anteriores pueden ayudarnos, lo mejor que podemos hacer para aprender es jugar con lo que hemos aprendido, modificar diferentes partes del programa y luego ejecutarlas para ver que pasa, e intentar crear nuevas líneas de código con las palabras que hemos aprendido a manejar. Encontraremos algunas sorpresas que pueden generar preguntas, y algunos errores que nos pueden explicar como funciona python. En la siguiente sección [Corrigiendo errores](corrigiendoErrores.html) veremos algunas modificaciones a este primer programa, y algunos errores que pueden aparecer, junto con consejos para corregirlos.



