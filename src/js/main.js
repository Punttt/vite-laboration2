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

    /* Struktur för utskrift
    <tr>
        <td>dt057g</td>
        <td>Webbutveckling I</td>
        <td>A</td>
    </tr>
    */

    courses.forEach(course =>{
        courseTableEl.innerHTML += `
            <tr>
                <td>${course.code}</td>
                <td>${course.coursename}</td>
                <td>${course.progression}</td>
            </tr>
        `;
    })

    console.table(courses);
}