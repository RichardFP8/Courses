"use strict";
window.onload = function (){
    const urlParams = new URLSearchParams(location.search);
    const row = document.getElementById("displayCourseData");
    let id = -1;
    if(urlParams.has("courseid")){
        id = urlParams.get("courseid");
        fetch(`http://localhost:8081/api/courses/${id}`)
        .then(response => response.json())
        .then(data => {
            for(let x in data){
                let cell = row.insertCell(-1);
                cell.innerHTML = data[x];
            }
        })
    }
}