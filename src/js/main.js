let allCourses = [];

document.addEventListener("DOMContentLoaded", async ()=>{
    loadData();
});

async function loadData(){
    const url = "https://webbutveckling.miun.se/files/ramschema.json";

    try {
        const response = await fetch(url);
        const courses = await response.json();

        allCourses = courses;

        displayCourses(courses);
        sortAndSearch();

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
}

function sortAndSearch(){
    /* Sökfunktionen */
    document.getElementById("rsearch").addEventListener("keyup", ()=>{
        console.log("testar search");
    })

    /* Sortering - Kurskod */
    document.getElementById("sort-code").addEventListener("click", ()=>{
        console.log("Testar sort-code");
    })

    /* Sortering - Kursnamn */
    document.getElementById("sort-name").addEventListener("click", ()=>{
        console.log("Testar sort-name");
    })

    /* Sortering - Progression*/
    document.getElementById("sort-prog").addEventListener("click", ()=>{
        sortBy("progression");
        console.log("Testar sort-prog");
    })

}

function sortBy(value){
    allCourses.sort((a, b) => (a[value] > b[value]) ?1:-1);
    console.table(allCourses);
}
