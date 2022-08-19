#encoding: utf-8

import random 

a= random.randint(1,1000)

w= input("Adivina mi número \n")

while not w==a:
   
    if w<a:
        print "Mi número es mas grande"
    else:
	print "Mi número es mas pequeño"
    w= input() 	

print "¡Ganaste!"

