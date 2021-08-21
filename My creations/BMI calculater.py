a = float(input())
b = float(input())
c= (a/(b**2))
if c< 18.5:
 print("Underweight")
elif c>=18.5 and c<25:
 print ("Normal")
elif c>=25 and c<30:
 print ("Overweight")
elif c>=30:
 print ("Obesity")