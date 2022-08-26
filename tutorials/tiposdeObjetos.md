## Tutoriales Cyborg
### [Programación e inteligencia artificial](home.html) 

# Tipos de objetos
En python estamos todo el tiempo manipulando diferentes tipos de objetos, como números, cadenas de caracteres, funciones, etc. En este capítulo explicaremos algunas nociones básicas de estos objetos. Cada objeto tiene sus características y funciones particulares, así que es importante conocerlos para poder aprovechar todas sus funciones.


### Algunos tipos de objetos 
El siguiente programa define varios objetos diferentes. En la parte final, le decimos que para cada uno de los objetos que hemos definido nos imprima el objeto, junto con el tipo del objeto, que podemos investigar mediante la función `type`, que para cada objeto `obj` nos dice que clase de objeto es, escribiendo `type(obj)`.

Si ves cosas que no entiendes en este programa, no te preocupes, que lo estaremos explicando durante esta sección. 

{%highlight python%}# Principales tipos de objetos
a=1
b='hola'
c=3.45
d=True
e=[1,2,3]
f={'comida':'arepa', 'bebida':'chocolate'}
g=print
h=int
i=type
j=type('1')


for obj in [a, b, c, d, e, f, g, h, i, j]:
    print(obj, type(obj))
{%endhighlight%}

Ve a [online-python.com](https://www.online-python.com/){:target="_blank"}, y ejecuta el código anterior. Si lo haces, obtendrás lo siguiente:

```
1 <class 'int'>
hola <class 'str'>
3.45 <class 'float'>
True <class 'bool'>
[1, 2, 3] <class 'list'>
{'comida': 'arepa', 'bebida': 'chocolate'} <class 'dict'>
<built-in function print> <class 'builtin_function_or_method'>
<class 'int'> <class 'type'>
<class 'type'> <class 'type'>
<class 'str'> <class 'type'>
```

Lo que nos dice este código es que el número 1 es de _clase_ `int`, la cadena 'hola' de clase `str`, el número 3.45 de clase `float`, y así sucesivamente. Algunas cosas parecen confusas por el momento, pero vamos a revisarlas con paciencia. Cuando mencionamos el _tipo_ de un objeto, nos referimos a la _clase_ del objeto, que obtenemos al usar la función `type`, estos dos conceptos son similares.

Lo que hace este programa cuando le decimos
{%highlight python%}for obj in [a, b, c, d, e, f, g, h, i, j]:
    print(obj, type(obj))
{%endhighlight%}

es equivalente a decirle
{%highlight python%}print(a, type(a))
print(b, type(b))
print(a, type(b))
print(c, type(c))
   .
   .
   .
print(j, type(j))
{%endhighlight%}

Al igual que `[1,2,3]`, el objeto `[a, b, c, d, e, f, g, h, i, j]` es un a lista. Un objeto tipo `list` (¿puedes comprobar esto usando python?)
[Aquí](https://docs.python.org/es/3/tutorial/controlflow.html){:target="_blank"} puedes aprender más sobre el uso del comando `for`.





### Números enteros `int` y decimales `float`

Ya hemos hablado un poco sobre los números enteros `int`. De manera similar, es posible trabajar con decimales con `float`. Por ejemplo, la división de dos enteros `int` nos da como resultado un número tipo `float`. (¿puedes comprobar esto usando python?)


En el siguiente link puedes aprender mucho más sobre [números](https://docs.python.org/es/3/tutorial/introduction.html#numbers)

### Cadenas `str`

En las secciones anteriores ya hemos hablado un poco de cadenas. Estas son de tipo 
`str`. Ellas guardan el texto que escribimos de forma bastante natural, aunque existen algunos caracteres que pueden generar sorpresas. Aquí una tabla de algunas particularidades que usualmente involucran el carácter `\`.

| se escribe     |  se obtiene      | ejemplo              | resultado     |
|:--------------:|:----------------:|----------------------|---------------|
|   `\'`         | `'`              | `'What\'s up?'`      | `What's up?`    |
|   `\"`         | `"`              | `"That's \"cool\""`  | `That's "cool"` |
|   `\\`         | `\`              | `'una montaña: /\\'` | `una montaña: /\` |
|   `\n`         | <br> (nueva línea)  | `"1\n2 3"`        | `1`  <br> `2 3`   |


En el siguiente link puedes aprender mucho más sobre [cadenas](https://docs.python.org/es/3/tutorial/introduction.html#strings){:target="_blank"}.


### Valores de verdad `bool`
Existen dos valores Booleanos: verdadero y falso. En python se escriben `True` y `False` (las mayúsculas son importantes). También podemos hacer test que nos dan como resultado verdadero o falso. `True` y `False` son objetos tipo `bool`

Por ejemplo, si escribimos `5==5` estamos preguntando si 5 es igual a 5 y nos da como resultado `True`, mientras que `1+1==3` nos da como resultado `False`. Esto quiere decir que `==` es una forma de comparar dos valores y decidir si son iguales. Esto no debe confundirse con las asignaciones de variables usando un solo `=`.

También podemos preguntar si `2<5`, lo que nos producirá como resultado `True`. ¿Cuál será el resultado de `3+3<5`? Puedes averiguarlo en python escribiendo `print(3+3<5)` y corriendo el programa.

Los valores _booleanos_ son muy importantes en python, pues nos permiten ejecutar código si cierta condición es verdadera, y ejecutar otros comandos en caso que la condición sea falsa. Para esto, utilizamos las palabras `if` y `else`. Un ejemplo es el siguiente. 

{%highlight python%} 
# Usando condicionales con las palabras if y else.
numero = int(input("Introduce un número: "))
if numero>10:
    print('tu numero es mayor que 10')
else:
    print('tu numero es menor o igual a 10')
{%endhighlight%}

[Aquí](https://docs.python.org/es/3/tutorial/controlflow.html){:target="_blank"} puedes aprender más sobre estos temas y más.



### Listas tipo `list` y diccionarios tipo `dict`
Hay muchos más objetos en python. Ya vimos algunas listas, como `[1,2,3]`. En nuestro ejemplo inicial vimos un objeto tipo `dict` que es llamado un diccionario. 

{%highlight python%} # Creando y usando un diccionario.
desayuno = {'comida':'arepa', 'bebida':'chocolate'}
print(desayuno['comida'])
print(f'La bebida de mi desayuno fue {desayuno['bebida']}.')
{%endhighlight%}


Acá puedes aprender más sobre [listas](https://docs.python.org/es/3/tutorial/introduction.html#lists){:target="_blank"} y [diccionarios](https://docs.python.org/es/3/tutorial/datastructures.html#dictionaries){:target="_blank"}.





### Funciones
En el programa inicial de esta función descubrimos que la función `print` es una función tipo `'builtin_function_or_method'`. ¿Qué ocurrió cuando intentamos mostrar print (mediante `print(print)`)?

Al cargar la página de [online-python.com](https://www.online-python.com/){:target="_blank"} posiblemente te encontraste con este programa:
```
# Online Python - IDE, Editor, Compiler, Interpreter

def sum(a, b):
    return (a + b)

a = int(input('Enter 1st number: '))
b = int(input('Enter 2nd number: '))

print(f'Sum of {a} and {b} is {sum(a, b)}')
```

Aquí ellos definen la función `sum`. Aunque `sum` también es una función tipo `'builtin_function_or_method'`, al redefinirla, obtendremos otro tipo de función.

Aunque es similar al programa con el que comenzamos, hay algo especial aquí, que es el uso de la palabra `def`. Esta palabra nos permite definir nuestras propias funciones. 


Acá  hay un ejemplo en donde personalizamos la función suma y la llamamos 'miTotal'. Le incluimos las funciones `int` ahí, y la usamos para calcular el precio de unos desayunos. En lugar de 'miTotal' podríamos haberle puesto cualquier otro nombre para nuestra función.


{%highlight python%}
# Definiendo una función personalizada "miTotal"

def miTotal(a, b):
    return (500*int(a) + 1000*int(b))

print("¿Cuántos panes y cuántas bebidas pidieron? Panes a 500, Bebidas a 1000")
a = input('Panes: ')
b = input('Bebida: ')

# 
print(f'El precio total de {a} panes y {b} bebidas es { miTotal(a,b) }')
print(type(miTotal))
{%endhighlight%}

Para aprender más sobre funciones puedes ir [aquí](https://docs.python.org/es/3/tutorial/controlflow.html#defining-functions).

Hay muchas cosas por aprender! Espero que con paciencia puedan continuar investigando y creando programas con otras funciones de python. También pueden descubrir cosas interesantes en nuestra sección [Usando la inteligencia artificial](usandoAI.html) y en google pueden encontrar ayuda sobre todos los temas que quieran. La tecnología se encuentra a nuestro alcance!
