"use strict";
window.onload = function () {
    fetch("http://localhost:8081/api/courses")
        .then(response => response.json())
        .then(data => displayAllCourses(data))
}
function displayAllCourses(arrayCourses) {
    const tableBody = document.getElementById("displayAllCourses")
    //in each of the elements of the array, which are all objects
    for (let x of arrayCourses) {
        let row = tableBody.insertRow(-1);
        //loop through each of the properties(with y) and display only the ones that I want; x is the object
        for (let y in x) {
            switch (y) {
                case "dept":
                case "courseNum":
                    let cell = row.insertCell(-1);
                    cell.innerHTML = x[y];
                    break;
                case "courseName":
                    
                    let anchorCell = row.insertCell(-1);
                    let anchor = document.createElement("a");
                    anchor.href = 'details.html?courseid=' + x["id"];
                    anchor.text = x[y];
                    anchor.target = "_blank";
                    anchorCell.appendChild(anchor);
                    break;

            }
        }

    }
}