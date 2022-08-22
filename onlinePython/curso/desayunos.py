#calcular precio de panes
precio_pan = float(input("Introduzca el precio de un pan: "))
numero_panes = int(input("Introduzca el número de panes: "))
total_panes = precio_pan*numero_panes

#calcular precio de bebidas
precio_bebida = float(input("Introduzca el precio de una bebida: "))
numero_bebidas = int(input("Introduzca el número de bebidas: "))
total_bebidas = precio_bebida*numero_bebidas

#calcular precio total del pedido
total = total_panes+total_bebidas

#mostrar resultado
print("El precio total del pedido es:", total)