# Tutoriales Cyborg 
### Programación e inteligencia artificial

## Corrigiendo errores:

Lo mejor que podemos hacer para aprender algo es jugar. Y en ese juego, es normal cometer errores. Lo importante es aprender de ellos, para corregirlos y poco a poco evitarlos. Pero al comienzo es necesario hacer muchos experimentos y no tener miedo a cometer errores. Es mejor intentar diferentes ideas hasta que alguna funcione, que quedarnos sin hacer nada porque no sabemos que hacer. También la curiosidad puede mostrarnos cosas interesantes, todas las ideas son un camino hacia un nuevo descubrimiento.

Por ejemplo, podemos comenzar con nuestro programa de la sección anterior, y agregar una línea inicial:

{%highlight python%}
Hola, bienvenidos!
# Nuestro primer programa python en español

a = int(input('Ingrese el primer número: '))
b = int(input("Ingrese el segundo número: "))

print(f'La suma de {a} y {b}  es { a+b }')
{%endhighlight%}

Que pasa cuando corremos este programa?

En la pantalla leeremos el siguiente texto.
```Traceback (most recent call last):
  File "main.py", line 1, in <module>
    Hola, bienvenidos
NameError: name 'Hola' is not defined
```
Lo que nos dice este mensaje es lo siguiente: En la línea 1 de nuestro archivo (que aquí se llama `main.py`, pero podemos cambiarle el nombre), donde dice `Hola, bienvenidos` hay un error (llamado `NameError`) porque la palabra `'Hola'` no está definida.

Podemos evitar este error de varias maneras:
- Mediante un comentario, usando el símbolo `#`. De esta manera, si escribimos `# Hola, bienvenidos!`, esta línea será ignorada.
- Generando una cadena, encerrando entre comillas nuestro texto.  Si escribimos `'Hola, bienvenidos!'` o `"Hola, bienvenidos!"` estaremos formando un objeto válido en python. Una cadena (de tipo `str`). Si no la guardamos en ninguna parte, no pasará nada con esta cadena.
- También es posible generar cadenas de varias líneas usando comillas triples. Por ejemplo
```
""" 
Hola, bienvenidos!

Este es nuestro primer programa python en español.
Este comentario es una cadena que ocupa varias líneas, y se encuentra 
encerrado en comillas triples.
"""
```
- Si lo que queremos que nuestra cadena sea mostrada en pantalla y no sea ignorada, podemos usar el comando `print`. Así, si escribimos `print(Hola, bienvenidos!)` en nuestra primera línea, el programa nos mostrará esto en pantalla. También es posible imprimir cadenas de varias líneas.

Muy bien, ya sabemos como resolver este primer problema, de tipo `NameError`.

Ahora, nos preguntamos por la palabra `int`. Para entender su función, podemos ver que pasa si la quitamos de la primera línea.


{%highlight python%}
# Nuestro primer programa python en español
print(Hola, bienvenidos!)

a = input('Ingrese el primer número: ')
b = int(input("Ingrese el segundo número: "))

print(f'La suma de {a} y {b}  es { a+b }')
{%endhighlight%}

si corremos el anterior programa es posible que obtengamos el siguiente error


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


