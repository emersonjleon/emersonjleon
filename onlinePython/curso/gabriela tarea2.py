#encoding: utf-8


def triangulo1(n):
    for x in range(n+1):
        print x*"o"


def triangulo2(n):
    for x in range(n):
        print (n-1-x)*" "+(1+x)*"*"

def triangulo3(n):
    for x in range(n):
        print (n-x)*"o"+(1+x)*"" 

def triangulo4(n):
    for x in range(n):
        print (n-1-x)*" "+(1+2*x)*"*"


for n in xrange (11):
    print "\ntriangulo1(" + str(n) + ")"
    triangulo1(n)
    triangulo2(n)
    triangulo3(n)
    triangulo4(n)

#n=5          #x

print "    o" #0
print "   oo" #1
print "  ooo" #2
print " oooo" #3
print "ooooo" #4





# Tarea 2: Escribir definiciones de funciones que impriman triangulos de tamaño n
# como se muestra en el ejemplo.

"""
triangulo1(3)

o
oo
ooo

triangulo2(4)

   *
  **
 ***
****

triangulo3(4)
****
***
**
*

triangulo4(3)
  *   #0: 2 espacios y 1 estrella
 ***  #1: 1 
***** #2: 0

"""


