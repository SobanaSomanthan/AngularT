person = {sno:1,name:"Rahul",city:"Chennai"}
candidate = person //Pass by reference
candidate.skills =  ["Java","C#","PHP"]

member = {...person, city: "Mumbai", interests: ["Singing","Dancing","Drawing"]}
console.log(person)
console.log(candidate)
console.log(member)