c=[956,12,2455]
a=[3435,34,34,656,35,[...c]]
console.log(a)
b=[...a]
c[2]=9090
//c=[...a]
console.log(a)
console.log(b)
console.log(c)

/*
b=[...a] //copies the value of the array,not reference
b[5]=[...a[5]] //if we use spread array[...] in nested array ,it will not impact 
  
//spread operator is available after es2015 and later

c[3]=567  
console.log(a)
console.log(b)

b[8]=9090
console.log(a)
console.log(b)***/

