/*타이머 구현 코드*/
window.onload=function(){buildCalendar();}
let nowMonth=new Date();
let today=new Date();
today.setHours(0,0,0,0);

function buildCalendar(){
    let firstDate=new Date(nowMonth.getFullYear(),nowMonth.getMonth(),1);
    let lastDate=new Date(nowMonth.getFullYear(),nowMonth.getMonth()+1,0);

    let tbody_Calendar=document.querySelector(".Calendar>tbody");
    document.getElementById("calYear").innerText=nowMonth.getFullYear();
    document.getElementById("calMonth").innerText=leftPad(nowMonth.getMonth()+1);

    while(tbody_Calendar.rows.length>0){
        tbody_Calendar.deleteRow(tbody_Calendar.rows.length-1);
    }
    let nowRow=tbody_Calendar.insertRow();
    for(let j=0;j<firstDate.getDay();j++){
        let nowColumn=nowRow.insertCell();
    }
    for(let nowDay=firstDate;nowDay<=lastDate;nowDay.setDate(nowDay.getDate()+1)){
        let nowColumn=nowRow.insertCell();
        
    }
}   
function choiceDate(nowColumn){

}
function prevCalendar(){
    nowMonth=new Date(nowMonth.getFullYear(),nowMonth.getMonth()-1,nowMonth.getDate());
    buildCalendar();
}
function nextCalendar(){
    nowMonth=new Date(nowMonth.getFullYear(),nowMonth.getMonth(),nowMonth.getDate());
    buildCalendar();
}
