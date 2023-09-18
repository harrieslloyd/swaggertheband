function screenWidth(){
    return screen.width;
}
function screenHeight(){
    return screen.height;
}

function addRow(tableID) {  
    var table = upcomingEvents.getElementById(tableID);  
    var rowCount = table.rows.length;  
    var row = table.insertRow(rowCount);  
    //Column 1  
    var cell1 = row.insertCell(0);  
    var element1 = document.createElement("input");  
    element1.type = "button";  
    var btnName = "button" + (rowCount + 1);  
    element1.name = btnName;  
    element1.setAttribute('value', 'Delete'); // or element1.value = "button";  
    element1.onclick = function() {  
        removeRow(btnName);  
    }  
    cell1.appendChild(element1);  
    //Column 2  
    var cell2 = row.insertCell(1);  
    cell2.innerHTML = rowCount + 1;  
    //Column 3  
    var cell3 = row.insertCell(2);  
    var element3 = document.createElement("input");  
    element3.type = "text";  
    cell3.appendChild(element3);  
}  

async function getData(url) {
    const response = await fetch(url)
    return response.text
}

getData("https://docs.google.com/spreadsheets/d/e/2PACX-1vR0RmKzzPAtkwTDAXfQDnhaqqxmLDgcGFZGlX2-0dpkd95u9fVj_jySVVC2j8GVsSQiH-p2w7zvd4vi/pub?gid=0&single=true&output=csv").then((data) => {
    const events = data
        .split(/\r?\n/).map((l) => l.split(","))
        .map((event) => {
            return { date: event[0], title: event[1]}
        })
    console.log(events)
})

hiddenlogo = document.getElementById("hiddenlogo")
var myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 300) {
        hiddenlogo.classList.add("shown")
    } else {
        hiddenlogo.classList.remove("shown")
    }
  };

  window.addEventListener("scroll", myScrollFunc);
  