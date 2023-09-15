function screenWidth(){
    return screen.width;
}
function screenHeight(){
    return screen.height;
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