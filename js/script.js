
function kilometre() {
    let foot = document.getElementById("timeInput").value;
    const kilometre = 0.0003048;
    const ans = foot * kilometre;

 document.getElementById("display").innerHTML= ans;
 document.getElementById("displayUnit").innerHTML= "kilometre";
}

function yard() {
    let foot = document.getElementById("timeInput").value;
    const yard = 0.333333;
    const ans = foot * yard ;

 document.getElementById("display").innerHTML= ans;
 document.getElementById("displayUnit").innerHTML= "Yard";
}

function inch() {
    let foot = document.getElementById("timeInput").value;
    const inch =  12;
    const ans = foot * inch ;

 document.getElementById("display").innerHTML= ans;
 document.getElementById("displayUnit").innerHTML= "Inch";
}


// function hour() {
//     let foot = document.getElementById("timeInput").value;
//     const hour = 60;
//     const ans = foot / hour;
//     const mins = foot % hour;

//  document.getElementById("display").innerHTML= parseInt
//  (ans) + "Hour/s and" + mins + "minutes";
//  document.getElementById("displayUnit").innerHTML= " ";
// }



























//  var input = document.getElementById('input');
//  var result = document.getElementById('result');
//  var inputType = document.getElementById('inputType');
//  var resulType = document.getElementById('resultType');
//  var  inputTypeValue,resultTypeValue;

//  input.addEventListener("keyup",myResult);
//  inputType.addEventListener("change",myResult);
//  resultType.addEventListener("change",myResult);

//  function myResult(){

//     result.value = input.value; 
//  }





// function millesecond() {
//     let minute = document.getElementById("timeInput").value;
//     const milli = 60000;
//     const ans = minute * milli;

//  document.getElementById("display").innerHTML= ans;
//  document.getElementById("displayUnit").innerHTML= "Millisecond";
// }

// function second() {
//     let minute = document.getElementById("timeInput").value;
//     const second = 60;
//     const ans = minute * second;

//  document.getElementById("display").innerHTML= ans;
//  document.getElementById("displayUnit").innerHTML= "Seconds";
// }

// function hour() {
//     let minute = document.getElementById("timeInput").value;
//     const hour = 60;
//     const ans = minute / hour;
//     const mins = minute % hour;

//  document.getElementById("display").innerHTML= parseInt
//  (ans) + "Hour/s and" + mins + "minutes";
//  document.getElementById("displayUnit").innerHTML= " ";
// }