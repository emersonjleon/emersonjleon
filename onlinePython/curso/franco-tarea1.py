#encoding: utf-8 
import datetime

nombre= raw_input("Ingrese su nombre: ")
print "Hola,", nombre+"!"

now=datetime.datetime.now()

hoy_dia=now.day   # esto es automatico!
hoy_mes=now.month 
hoy_anno=now.year
print "En que fecha naciste?"
nacimiento_dia= raw_input("dia: ")# esto son cadenas
nacimiento_mes= raw_input("mes: ")
nacimiento_anno= raw_input('año: ')#cadena unicode


edad= hoy_anno - int(nacimiento_anno)

if int(nacimiento_mes)> hoy_mes:
    edad= edad - 1 
if int(nacimiento_mes)== hoy_mes:
    if int(nacimiento_dia)> hoy_dia:
        edad= edad - 1
    if int(nacimiento_dia)== hoy_dia:
        print "Feliz cumpleaños!"

print "Tu edad es", edad

if int(nacimiento_anno)>2000:
    print "Eres muy joven!"
else:
    print "Eres del siglo pasado!"


#tarea 1: hacer que el programa imprima cuantos annos tiene el usuario.

