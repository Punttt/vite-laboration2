document.addEventListener("DOMContentLoaded", async ()=>{
    loadData();
});

async function loadData(){
    const url = "https://webbutveckling.miun.se/files/ramschema.json";

    try {
        const response = await fetch(url);
        const courses = await response.json();

        displayCourses(courses);

    } catch(error){
        console.error("fel:", error);
    }
}

function displayCourses(courses){
    const courseTableEl = document.querySelector("#course-table-body");

    courseTableEl.innerHTML = "";

    courses.forEach(course =>{
        courseTableEl.innerHTML += `
        `;
    })

    console.table(courses);
}