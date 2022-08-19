#encoding: utf-8

# Vocabulario basico:
# for, range, len, def

print range(100)

for x in range(100):
    print x, x*x

print range(5)# lista con los numeros del 0 al 4 (5 numeros)
print range(5,10)
print range(1,10,2)

#funciones!!
def tabla(y):
    for x in xrange (11):
        print y, "x", x, "=",y*x

for x in xrange (11):
    print "\nTabla del", x
    tabla(x)

tabla("morronga")

# Tarea 2: Escribir definiciones de funciones que impriman triangulos de tamaño n
# como se muestra en el ejemplo.

"""
triangulo1(3)

*
**
***

triangulo2(4)
****
***
**
*

triangulo3(3)
***
 **
  *
"""




















