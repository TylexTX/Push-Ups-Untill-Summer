document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("month").value = new Date().getMonth() + 1;
    document.getElementById("day").value = new Date().getDate();
});

function Calculate() {
    const canDo = Number(document.getElementById("canDo").value);
    const willDo = Number(document.getElementById("willDo").value);
    const month = Number(document.getElementById("month").value);
    const day = Number(document.getElementById("day").value);
    if (canDo == 0 || willDo == 0 || month == 0 || day == 0) {
        document.getElementById("output").innerText = "Input fields cannot be empty";
        return 0;
    }
    if (canDo < 0 || willDo < 0 || month < 0 || day < 0) {
        document.getElementById("output").innerText = "Cannot have negative numbers in the input fields";
        return 0;
    }
    if (willDo <= canDo) {
        document.getElementById("output").innerText = "Second number has to be greater than the first one";
        return 0;
    }
    let days;
    let monthDays;
    switch(month) {
        case 10:
            days = 0;
            monthDays = 31;
            break;
        case 11:
            days = 31;
            monthDays = 30;
            break;
        case 12:
            days = 61;
            monthDays = 31;
            break;
        case 1:
            days = 92;
            monthDays = 31;
            break;
        case 2:
            days = 123;
            monthDays = 28;
            break;
        case 3:
            days = 151;
            monthDays = 31;
            break;
        case 4:
            days = 182;
            monthDays = 30;
            break;
        case 5:
            days = 212;
            monthDays = 31;
            break;
        default:
            document.getElementById("output").innerText = "Input a valid month";
            return 0;
    }
    if (day > monthDays) {
        document.getElementById("output").innerText = "Input a valid day";
        return 0;
    }
    days += day;
    const difference = willDo - canDo;
    const daily = difference / 243;
    const needToDo = Math.floor(daily * days + canDo)
    document.getElementById("output").innerText = "You have to do " + needToDo + " push ups today";
}