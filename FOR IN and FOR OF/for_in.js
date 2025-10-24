const bison={Name:"Bison",Actor:"Dhruv",Director:"MariSelvaraj"}
for(let actor in bison){
    console.log("Cast and Crew: ",bison[actor])
}

const course={course1:"JAVA",course2:"PYTHON"}
for(let k in course){
    console.log(k);
    console.log(course[k])
}

const movie={Comedy:"A1",Love:"96"}
for(let cinema in movie){
    console.log(movie[cinema], cinema);
}


const pet={Name:"Dog",age:24,Breed:"Shizu"}
for(let animal in pet){
    console.log(animal,pet[animal]);
}

const car = { brand: "Tesla", model: "Model 3", color: "Red" };
for (let key in car) {
  console.log(key, car[key]);
}

const student = { name: "AK", age: 22, course: "CSE" };
for (let detail in student) {
  console.log(detail, student[detail]);
}

const TV = { title: "Inception", director: "Nolan", rating: 9 };

for (let info in TV) {
  console.log(info, TV[info]);
}
