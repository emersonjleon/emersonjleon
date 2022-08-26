## [Tutoriales Cyborg](home.html) 
### Programación e inteligencia artificial

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

Lo que nos dice este código es que el número 1 es de _clase_ `int`, la cadena 'hola' de clase `str`, el número 3.45 de clase `float`, y así sucesivamente. Lo que hace este programa cuando le decimos {%highlight python%}for obj in [a, b, c, d, e, f, g, h, i, j]:{%endhighlight%}

    print(obj, type(obj))
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


### Números enteros `int` y decimales `float`






### Cadenas `str`


| se escribe     |  se obtiene      | ejemplo              | resultado     |
|:--------------:|:----------------:|----------------------|---------------|
|   `\'`         | `'`              | `'What\'s up?'`      | `What's up?`    |
|   `\"`         | `"`              | `"That's \"cool\""`  | `That's "cool"` |
|   `\\`         | `\`              | `'una montaña: /\\'` | `una montaña: /\` |
|   `\n`         | <br> (nueva linea)  | `"1\n2 3"`        | `1`  <br> `2 3`   |


### Valores de verdad `bool`


### Iterables `list` and `dict`

### Funciones

### Objetos tipo `type`