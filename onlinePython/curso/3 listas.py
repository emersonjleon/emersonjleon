#listas y tuplas
#list, enumerate, for, append, extend


meses=["","enero","febrero","marzo","abril","mayo","junio","julio"]
tupla=("","enero","febrero","marzo","abril","mayo","junio","julio")


for n in range(1,8):
    print str(n)+": "+meses[n]

meses.append("agosto") #agregar un objeto a la lista


for x in meses:
    print x

meses.extend(["septiembre","octubre","noviembre","diciembre"])



print list(enumerate(meses))

for n, mes in enumerate(meses):
    print n, mes



for x in meses+[meses, tupla, 8, "hola"]:
    print x

"""
1: enero
2: febrero
...
"""
