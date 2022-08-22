# Tutoriales Cyborg 
### Programación e inteligencia artificial

Un lenguaje de programación nos permite hablar con el computador, decirle lo que queremos que haga. Cada línea de código es un comando, y uniendo varias lineas podemos crear un programa. Todos los programas y aplicaciones que usamos a diario han sido programadas línea por línea. Podemos pensar que estos son los ladrillos que al unirse construyen el mundo virtual.

## Primeras palabras en python

_Python_ es un lenguaje de programación. Existen muchos otros, pero hemos elegido python pues es uno de los más sencillos, populares y con mayor cantidad de librerias disponibles, con todo tipo de aplicaciones.

En [online-python.com](https://www.online-python.com/){:target="_blank"} podemos correr online programas de python directamente desde el computador o teléfono móbil. Ahí tambien podemos guardar nuestros programas en archivos terminados en `.py`, que tambien pueden ser ejecutados localmente, después de haber instalado `python` en nuestro computador. 


```
{%highlight python3%} 
# Nuestro primer programa python en español

a = int(input('Ingrese el primer número: '))
b = int(input('Ingrese el segundo número: '))

print(f'la suma de {a} y {b}  es { a+b }')
{%endhighlight%}
```




Acá  hay un ejemplo en donde personalizamos la función suma y la llamamos 'miTotal'. Podríamos haberle puesto cualquier otro nombre





```
{%highlight python3%} 
# Esta es una función llamada "miTotal" que estamos definiendo 
def miTotal(a, b):
    return (500*int(a) + 1000*int(b))

print("Cuántos panes y cuántas bebidas? panes a 500, bebidas a 1000")

a = input('panes: ')
b = input('bebida: ')

# las cadenas que empiezan por f (f'...') son formateadas, los corchetes {} indicanvalores a evaluar 
print(f'el precio total de {a} panes y {b} bebidas es { miTotal(a,b) }')
{%endhighlight%}
```





