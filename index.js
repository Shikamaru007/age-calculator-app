const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const calculateBtn = document.getElementById("calculateBtn");
const dayError = document.getElementById("dayErrorMsg");
const monthError = document.getElementById("monthErrorMsg");
const yearError = document.getElementById("yearErrorMsg");

calculateBtn.onclick = function (){
    document.querySelectorAll(".input").forEach(block => {
        block.classList.remove("error");
    });

    const day = dayInput.value;
    const month = monthInput.value;
    const year = yearInput.value;

    dayError.textContent = " ";
    monthError.textContent = " ";
    yearError.textContent = " ";

    let isValid = true;

    if(!day){
        dayInput.parentElement.classList.add("error");
        dayError.textContent = "This field is required";
        isValid = false;
    }
    else if(day > 31){
        dayInput.parentElement.classList.add("error");
        dayError.textContent = "Must be a valid day";
        isValid = false;
    }
    if(!month){
        monthInput.parentElement.classList.add("error");
        monthError.textContent = "This field is required";
        isValid = false;
    }
    else if(month > 12){
        monthInput.parentElement.classList.add("error");
        monthError = "Must be a valid month";
        isValid = false;
    }
    if(!year){
        yearInput.parentElement.classList.add("error");
        yearError.textContent = "This field is required";
        isValid = false;
    }
    else if(year > 2024){
        yearInput.parentElement.classList.add("error");
        yearError.textContent = "Must be in the past";
        isValid = false;
    }

    if (!isValid){
        return;
    }

    const userDate = new Date(year, month -1, day);

    if(userDate.getFullYear() != year || userDate.getMonth() != month - 1 || userDate.getDate() != day){
        dayInput.parentElement.classList.add("error");
        monthInput.parentElement.classList.add("error");
        yearInput.parentElement.classList.add("error");
        dayError.textContent = "Must be a valid date";  
        return;      
    }

    const currentDate = new Date();
    const userBirthDate = new Date(year, month - 1, day);

    let ageYears = currentDate.getFullYear() - userBirthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - userBirthDate.getMonth();
    let ageDays = currentDate.getDate() - userBirthDate.getDate();

    if(ageMonths < 0 || (ageMonths === 0 && ageDays < 0)){
        ageYears--;
        ageMonths += 12;
    }
    if(ageDays < 0){
        const daysInLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        ageDays += daysInLastMonth;
        ageMonths--;
    }

    document.getElementById("years").textContent = ageYears;
    document.getElementById("months").textContent = ageMonths;
    document.getElementById("days").textContent = ageDays;
    
};
