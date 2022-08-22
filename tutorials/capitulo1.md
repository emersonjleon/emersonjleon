# Tutoriales Cyborg 
### Programación e inteligencia artificial

## Primeras palabras en python

Un lenguaje de programación nos permite hablar con el computador, decirle lo que queremos que haga. Cada línea de código es un comando, y uniendo varias lineas podemos crear un programa. Todos los programas y aplicaciones que usamos a diario han sido programadas línea por línea. Podemos pensar que estos son los ladrillos que al unirse construyen el mundo virtual.

Python es un lenguaje de programación. Existen muchos otros, pero hemos elegido python pues es uno de los más sencillos, con  y con mayor cantidad de usos

{%highlight python%} 
```
# Nuestro primer programa python en español

a = int(input('Ingrese el primer número: '))
b = int(input('Ingrese el segundo número: '))

print(f'la suma de {a} y {b}  es { a+b }')
```
{%endhighlight%}

Acá  hay un ejemplo en donde personalizamos la función suma y la llamamos 'miTotal'. Podríamos haberle puesto cualquier otro nombre


```
# Esta es una función que usaremos después. La llamaremos "miTotal". 
def miTotal(a, b):
    return (500*int(a) + 1000*int(b))

print("Cuántos panes y cuántas bebidas van a ordenar? panes a 500, bebidas a 1000")

a = input('panes: ')
b = input('bebida: ')

# las cadenas que empiezan por f'...' son formateadas, lo que está al interior de 
# corchetes {} se evalua y se imprime en ese lugar.
print(f'el precio total de {a} panes y {b} bebidas es { miTotal(a,b) }')
```