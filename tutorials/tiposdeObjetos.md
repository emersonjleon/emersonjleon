# Tutoriales Cyborg 
### Programación e inteligencia artificial

## Tipos de objetos
En python estamos todo el tiempo manipulando diferentes tipos de objetos, como números, cadenas de caracteres, funciones, etc. En este capítulo explicaremos algunas nociones básicas de estos objetos. 


### Algunos tipos de objetos 

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




### números enteros `int` y decimales `float`






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