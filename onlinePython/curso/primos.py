import math

#todo: hacer la factorizacion prima!

def es_primo (n):
    for d in range (2,int(math.sqrt(n))+1):
        if n%d==0:
            #print 'no es primo'        
            return False
    return True
         

def factores (n):
    if n==1:
        return []
    for d in range (2,int(math.sqrt(n))+1):
        if n%d==0:
            #print 'no es primo'        
            return [d] + factores(n/d) 
    return [n]

if __name__=="__main__":
    import datetime
    
    for n in range(10000,50000):
        if es_primo(n):
            print n, " ",

    start= datetime.datetime.now()

    for n in range(10000,50000):
        print factores(n)

    print datetime.datetime.now() -start #cronometro!

