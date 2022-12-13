"use strict";
const getCourse = new URLSearchParams(location.search);
let id = -1;
window.onload = () => {

    //first part is getting the data from the index.html page and displaying it
    if (getCourse.has("courseId")) {
        id = getCourse.get("courseId");
        fetch(`http://localhost:8081/api/courses/${id}`)
            .then(response => response.json())
            .then(course => {
                for (let property in course) {
                    let details = document.createElement("p");
                    let text = document.createTextNode(`${property}: ${course[property]}`);
                    details.appendChild(text)
                    document.getElementById("displayCourseData").appendChild(details);
                }
            });
    }
    //second part is deleting it from the onclick event of the button and redirecting the user back to the index.html page
    document.getElementById("confirmDeleteBtn").onclick = deleteCourse;

}
function deleteCourse() {
    fetch(`http://localhost:8081/api/courses/${id}`, {
        method: "DELETE"
    }).then(response => response.json())
        .then(result => {
            window.location.href = "index.html";
        })
        .catch(error => {
            document.getElementById("errorMessage").innerHTML = "No no no no no no";
        });
}