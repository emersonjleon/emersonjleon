
# Online Python - COMENTARIOS comienzan con #

def miTotal(a, b):
    return (500*int(a) + 1000*int(b))

print("cuantos panes y cuantas bebidas? panes a 500, bebidas a 1000")

a = input('panes: ')
b = input('bebida: ')
c = input('huevos: ')

#print(f'la suma {a} y  {b} es mi Desayuno({a + b})')
print(f'el precio total de  {a} panes y  {b} bebidas es {miTotal(a,b)}')
