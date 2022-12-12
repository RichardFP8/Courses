"use strict";
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
window.onload = function () {
    document.getElementById("addCourseToAPI").onclick = testValues;
}
function testValues() {
    //get the values of the input
    const deparment = document.getElementById("departmentInput").value;
    const courseNum = document.getElementById("courseNumberInput").value;
    const courseName = document.getElementById("courseNameInput").value;
    const instructor = document.getElementById("instructorInput").value;
    const d = new Date(document.getElementById("startDateInput").value);
    d.setDate(d.getDate() + 1);                                                 //only change the day in the date
    const numOfDays = document.getElementById("numOfDaysInput").value;
    const Numbersregex = /\d/g;                                                 //use a regular expression to match only numbers


    /* There are two tests, the first one is saying that if the returned array is null,
     second is, since the returned array is returning every character as its own element, 
    both the string and array should have equal lengths if the input is ALL numbers */
    const firstTest = courseNum.match(Numbersregex) !== null && courseNum.match(Numbersregex).length === courseNum.length;
    const secondTest = numOfDays >= 1 && numOfDays <= 50;
    const thirdTest = (deparment !== null) && (courseName !== null) && (instructor !== null) && (d !== null);
    if (firstTest && secondTest && thirdTest) {
        /* let data = new FormData();
        data.append("dept", deparment);
        data.append("courseNum", courseNum);
        data.append("courseName", courseName);
        data.append("instructor", instructor);
        data.append("startDate", `${months[d.getMonth()]} ${d.getDate()}`);
        data.append("numDays", numOfDays);*/

        let data = {
            // id: "",
            dept: deparment,
            courseNum: courseNum,
            courseName: courseName,
            instructor: instructor,
            startDate: `${months[d.getMonth()]} ${d.getDate()}`,
            numDays: numOfDays
        }

        // postANewCourseToAPI(data);

        fetch("http://localhost:8081/api/courses", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type":
                    "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
            .then(json => {
                window.location.href = "index.html";
            })
            .catch(err => {
                document.getElementById("message").innerHTML = "Unexpected error";
            });
    }
}
// function postANewCourseToAPI(data) {

// }