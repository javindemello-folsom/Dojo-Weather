function cityAlert(){
    console.log("Alert Displaying");
    alert("Loading weather report...");
}


// COOKIES
var cookiesElement = document.querySelector(".cookies");

function hide(){
    console.log("Removing Element");
    cookiesElement.remove();
}

// TEMP CHANGE
var temp1Element = document.querySelector("#temp1");
var temp2Element = document.querySelector("#temp2");
var temp3Element = document.querySelector("#temp3");
var temp4Element = document.querySelector("#temp4");
var temp5Element = document.querySelector("#temp5");
var temp6Element = document.querySelector("#temp6");
var temp7Element = document.querySelector("#temp7");
var temp8Element = document.querySelector("#temp8");


function convertTemp(element) {
    if (element.value == "°F"){
        console.log("Fahrenheit Selected")
        temp1Element.innerText = "75°";
        temp2Element.innerText = "65°";
        temp3Element.innerText = "80°";
        temp4Element.innerText = "66°";
        temp5Element.innerText = "69°";
        temp6Element.innerText = "61°";
        temp7Element.innerText = "78°";
        temp8Element.innerText = "70°";
    }
    else if (element.value == "°C"){
        console.log("Celsius Selected")
        temp1Element.innerText = "24°";
        temp2Element.innerText = "18°";
        temp3Element.innerText = "27°";
        temp4Element.innerText = "19°";
        temp5Element.innerText = "21°";
        temp6Element.innerText = "16°";
        temp7Element.innerText = "26°";
        temp8Element.innerText = "21°";
    }
}