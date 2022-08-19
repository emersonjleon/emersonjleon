#while, break, continue, sleep, random

#mientras (condicion==True):
#    repita
#    estos
#    pasos
import time

i = 1
while True:
    print i
    i = i+1
    time.sleep(1)
    if i==5:
        break

print "bye"

i = 1
while i <= 10:
    i = i+1
    if i==5:
        continue
    print i

print "bye"

#tarea: Crear un juego de adivinar un numero de 1 a 1000, donde el
#computador le dice en cada intento si el numero es mayor o  menor.


import random    

print random.random()


a= random.randint(1,1000)

while a<900:
    print "todavia no ", a
    a= random.randint(1,1000)
    

print "listo"
