import math

print("  n   log(n) log_10(n)  log_2(n)")

for i in range(1,21):
    print(f"{i:3}  {math.log(i):.6}    {math.log(i,10):.6}    {math.log(i,2):.6}")
