function screenWidth(){
    return screen.width;
}
function screenHeight(){
    return screen.height;
}

function addRow(tableID) {  
    console.log("running addRow");
    const table = document.getElementById(tableID);
    const elem = document.querySelector('#template');
    const clone = elem.cloneNode(true);

    console.log(elem);
    console.log();
    console.log(table);

    const newRow = elem.after(clone);
} 

function altAddRow(tableID, date, desc) {
    console.log("running addRow");
    const table = document.getElementById(tableID);
    var row = table.insertRow(-1);
    row.innerHTML = 
    `
    <td><div class="event" id="event0">
                    <table><tr>
                        <td>${date}</td>
                        <td>${desc}</td>
                    </tr></table>
                </div></td>
    `
}

async function download(){
    try {
        const target = `https://docs.google.com/spreadsheets/d/e/2PACX-1vR0RmKzzPAtkwTDAXfQDnhaqqxmLDgcGFZGlX2-0dpkd95u9fVj_jySVVC2j8GVsSQiH-p2w7zvd4vi/pub?gid=0&single=true&output=csv`; //file
        //const target = `https://SOME_DOMAIN.com/api/data/log_csv?$"queryString"`; //target can also be api with req.query
        
        const res = await fetch(target, {
            method: 'get',
            headers: {
                'content-type': 'text/csv;charset=UTF-8',
                //'Authorization': //in case you need authorisation
            }
        });

        if (res.status === 200) {
            const data = await res.text();
            return data;

        } else {
            console.log(`Error code ${res.status}`);
        }
    } catch (err) {
        console.log(err)
    }
}


  

let a = await download();

//dont ask me how this works
const lineRegex = /((\\\n)|[^\n])+/g;
const datumRegex = /,?(("(\\"|.)+?")|([^",][^,]*))?/g;
const x = a.match(lineRegex).map((row) => 
    row.match(datumRegex).map((datum) => datum.replace(/^,?"?|"$/g, "").trim()),
);

x.forEach(rowAdd)
function rowAdd(item){
    altAddRow("eventtable", item[0], item[1])
}



// getData("").then((data) => {
//     // const events = data
//         // .split(/\r?\n/).map((l) => l.split(","))
//         // .map((event) => {
//             // return { date: event[0], title: event[1]}
//         // })
//     console.log(data)
// })

var hiddenlogo = document.getElementById("hiddenlogo")
var myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 300) {
        hiddenlogo.classList.add("shown")
    } else {
        hiddenlogo.classList.remove("shown")
    }
  };

  window.addEventListener("scroll", myScrollFunc);
  