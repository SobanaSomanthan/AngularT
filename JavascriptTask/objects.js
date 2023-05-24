person = {
    sno: 1,
    name:"Sobana",
    city: "Thanjavur"
}

person.skills = ["Java","CSS","Javascript"]
list =[34,345,345]
list["sno"]=35
list["name"]="Sobana"
console.log(person)

for(let x in person)
console.log(x, "=>", person[x])

console.log(Object.keys(person))
console.log(Object.keys(list))