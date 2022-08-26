# Tutoriales Cyborg 
## Programación e inteligencia artificial

### Introducción

Queremos hacer aquí una introducción al mundo de la programación usando la inteligencia artificial.  Para la inteligencia artificial usaremos el procesamiento de lenguaje de [openAI](https://openai.com/api){:target="_blank"}.

En la programación clásica es necesario conocer los diferentes comandos de un lenguaje de programación, en donde cada pequeño detalle, cada coma o paréntesis puede generar errores si no se colocaba en el lugar adecuado. Esto tiene la ventaja de ser muy preciso. Así el computador hace exactamente lo que nosotros le indicamos. La desventaja es que no es fácil explicarle al computador paso por paso lo que nosotros queremos.

Mediante la inteligencia artificial, ahora es posible decirle al computador: "necesito un programa en lenguaje python que realize la siguiente tarea..." Esto es toda una revolución en el mundo de la programación.

Por ejemplo, los siguientes programas fueron generados en [openAI](https://openai.com/api){:target="_blank"}. 
Para poder hacer esto, puedes ingresar a [openAI](https://openai.com/api){:target="_blank"} y registrarte usando tu e-mail o cuenta de google. Luego ingresa a la zona de _playground_ que es donde puedes hacer experimentos. Aquí tu ingresas un texto y al oprimir el boton **Submit**, la inteligencia artificial GPT-3 continuará el texto y hará lo que le pidas. Es posible pedirle todo tipo de cosas, como hacer el resumen de un texto, traducir, inventar historias, crear títulos para una historia, y mucho mas. Acá la usaremos para crear programas en python, colocando la primera frase como comentario, y pidiendo a partir de ahí que complete el texto del programa. Si hasta ahora estás comenzando a aprender a programar, los siguientes ejemplos pueden contener conceptos que aún no conoces. No te preocupes, esta es una oportunidad para investigar mas funciones de nuestro lenguaje. 


{%highlight python%}# Programa de python que pregunta un número y determina si es primo o no.

num = int(input("Introduce un número entero: "))

if num < 1:
	print("El número introducido no es válido.")
else:
	for i in range(2, num):
		if num % i == 0:
			print("El número introducido no es primo.")
			break
	else:
		print("El número introducido es primo.")
{%endhighlight%}

Este programa usa condicionales mediante la palabras `if` y `else`. También utiliza iteraciones mediante la palabra `for`. Estos conceptos son muy importantes en programación. (Aquí)[https://docs.python.org/es/3/tutorial/controlflow.html]{:target="_blank"} puedes aprender más sobre estos temas y otras cosas que puedes hacer en python.


{%highlight python%}# Programa de python que calcula todos los divisores de un número n.

numero = int(input("Introduce un número: "))

listaDeDivisores = []

for i in range(2, numero):
	if (numero % i == 0):
		listaDeDivisores.append(i)

print(listaDeDivisores)
{%endhighlight%}



{%highlight python%}# Programa de python que calcula la factorización prima de un número n.

n = int(input("Ingrese el número a factorizar: "))
i = 2

while i <= n:
    if n%i == 0:
        print(i)
        n = n/i
    else:
        i = i + 1
{%endhighlight%}

{%highlight python%} # Programa de python que pregunte una frase y la convierta en jeringonza con el lenguaje de la p. Por ejemplo, 'Hola, Vida, Salud' debe convertirse en  'Hopolapa, Vipidapa, Sapalupud'.

frase = input('Introduzca una frase: ')

nueva_frase = ''

for letra in frase:
	if letra == 'a' or letra == 'A':
		nueva_frase += 'apa'
	elif letra == 'e' or letra == 'E':
		nueva_frase += 'epa'
	elif letra == 'i' or letra == 'I':
		nueva_frase += 'ipi'
	elif letra == 'o' or letra == 'O':
		nueva_frase += 'opo'
	elif letra == 'u' or letra == 'U':
		nueva_frase += 'upu'
	else:
		nueva_frase += letra

print(nueva_frase)
{%endhighlight%}

El programa anterior nos muestra que también podemos jugar con expresiones de texto, palabras y frases. Hay un pequeño error de nuestra inteligencia artificial. ¿Podrías corregirlo?


{%highlight python%} 
# Programa en python que toma un número entero y lo transforma en binario.

def binary(x):
	if x>1:
		binary(x//2)
	print(x%2,end=" ")

x=int(input("Dame el número entero para convertirlo a binario: "))
binary(x)

print("\n")
{%endhighlight%}

Este último programa es interesante, pues define una función llamada `binary(x)`, pero en el interior de la función llama a `binary(x//2)`, es decir, es una función que se llama a sí misma. Esto se conoce como función _recursiva_.

¿Qué otros programas se te ocurre que la inteligencia artificial puede hacer por ti? Si le pides algo muy complicado, es posible que el resultado sea incorrecto, incompleto o no funcione, pero si le pides paso a paso lo que quieres, mediante funciones sencillas puedes lograr obtener al final programas más avanzados.

Para terminar, te dejo un par de videos que muestran como esta inteligencia artificial puede lograr programas sorprendentes, usando **codex**. 

- [Creating a Space Game with OpenAI Codex](https://www.youtube.com/watch?v=Zm9B-DvwOgw){:target="_blank"}
- [Uso una IA para PROGRAMAR el JUEGO del Wordle! (y funciona) | CODEX](https://www.youtube.com/watch?v=FQqwynsDs7A){:target="_blank"}