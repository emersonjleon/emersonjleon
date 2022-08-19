
# Online Python - Acá puedo escribir cualquier cosa

print("""Este es nuestro primer programa en python!
Nos ayuda a calcular el precio total 
de un pedido de arepas y empanadas. Cada arepa cuesta $2000 y cada empanada cuesta $1500. 

Ingrese a continuación el numero de arepas y empanadas a cancelar...""")

def PrecioTotal(a, b):
    return (2000*int(a) + 1500*int(b))

a = input('Arepas: ')
b = input('Empanadas: ')

print(f'El precio total de {a} arepas y {b} empanadas es {PrecioTotal(a, b)}')
#print(f'La suma de {a} y {b} es {a+b}')
