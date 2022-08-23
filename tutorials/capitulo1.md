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
b = int(input('Ingrese el segundo número: '))

print(f'la suma de {a} y {b}  es { a+b }')
{%endhighlight%}

Este texto puede ser copiado y pegado en [online-python.com](https://www.online-python.com/){:target="_blank"}. Al presionar **Run** veremos que 






Acá  hay un ejemplo en donde personalizamos la función suma y la llamamos 'miTotal'. Podríamos haberle puesto cualquier otro nombre




{%highlight python%} 
```
# Esta es una función llamada "miTotal" que estamos definiendo 
def miTotal(a, b):
    return (500*int(a) + 1000*int(b))

print("Cuántos panes y cuántas bebidas? panes a 500, bebidas a 1000")

a = input('panes: ')
b = input('bebida: ')

# las cadenas formateadas (`f'...'`) evaluan los corchetes {} colocan ahí el resultado
print(f'el precio total de {a} panes y {b} bebidas es { miTotal(a,b) }')
```
{%endhighlight%}



<!--iframe src="https://www.kaggle.com/embed/colinmorris/strings-and-dictionaries?cellIds=11&kernelSessionId=79384572" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Strings and Dictionaries"></iframe-->




| se escribe   |  se obtiene  | ejemplo                | resultado     |
|:------------:|:------------:|------------------------|---------------|
|   `\'`       | `'`          | `'What\'s up?'`        | `What's up?`    |
|   `\"`       | `"`          | `"That's \"cool\""`    | `That's "cool"` |
|   `\\`       | `\`          | `'una montaña: /\\'` | `una montaña: /\` |
|   `\n`       | <br> (nueva linea)  | `"1\n2 3"`  | `1`  <br> `2 3`     |