function menuSelection(){
    let x = document.getElementById("myList").value;
    switch(x) {
        case "A":
            document.getElementById("rates").style.display = "block";
            document.getElementById("ratesl").innerHTML = "$10 Muffin";
            break;
        case "B":
            document.getElementById("rates").style.display = "block";
            document.getElementById("ratesl").innerHTML = "$12 Pan Cake";
            break;
        case "C":
            document.getElementById("rates").style.display = "block";
            document.getElementById("ratesl").innerHTML = "$15 Cappuccino";
            break;
        case "D":
            document.getElementById("rates").style.display = "block";
            document.getElementById("ratesl").innerHTML = "$5 Latte";
            break;
        case "E":
            document.getAnimations("rates").style.display = "block";
            document.getElementById("ratesl").innerHTML = "$7 Croissant";
            break;
        default:
            document.getElementById("rates").style.display="none";
            document.getElementById("ratesl").innerHTML = "";
            break;
    }
}
function tipsArea(obj) {
    document.getElementById("tips").style.display = obj.checked
    ? "block"
    :"none";
    document.getElementById("tipst").style.display = obj.checked
    ? "block"
    : "none"
    document.getElementById("tipst").required = obj.checked ? "required" : "none";
}
function validateInputs(object, type, nameType) {
  var nameRegex = /^[a-zA-Z]+$/;
  var namesRegex = /^[a-zA-Z\s\.]+$/;
  var emailRegex = /([\w\.]+)@([\northeastern\.]+)\.(\edu+)/;
  var phoneRegex = /\d{3}-?\d{3}-\d{4}$/;
  var addressRegex = /^\s*\S+(?:\s+\S+){2}/;
  var zipcodeRegex = /^\d{5}(?:[- ]?\d{4})?$/;
  var name = "errorMsg" + nameType;
  switch(type) {
      case 1:
          if(!object.value.trim().match(nameRegex)) {
              object.style.border = "2px solid red";
              document.getElementById(name).style.display = "block";
              object.value = "";
          }else {
              object.style.border = "";
              document.getElementById(name).style.display = "none";
          }
          break;
        case 2:
            if(!object.value.trim().match(namesRegex)){
                object.style.border = "2px solid red";
                document.getElementById(name).style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById(name).style.display = "none";
            }
            break;
        case 3:
            if(!object.value.match(emailRegex)) {
                object.style.border = "2px solid red";
                document.getElementById(name).style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById(name).style.display = "none";
              
            }
            break;
        case 4:
            if(!object.value.match(phoneRegex)) {
                object.style.border = "2px solid red";
                document.getElementById(name).style.display = "block";
                object.value = "";
            }else {
                object.style.border = "";
                document.getElementById(name).style.display = "none";
            }
            break;
        case 5:
            if(!object.value.match(addressRegex)) {
                object.style.border = "2px solid red";
                document.getElementById(name).style.display= "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById(name).style.display="none";
            }
            break;
        case 6:
            if(!object.value.match(nameRegex)){
                object.style.border = "2px solid red";
                document.getElementById(name).style.display="none";
                object.value="";
            }else{
                object.style.border = "";
                document.getElementById(name).style.display="none";
            }
            break;
        case 7:
            if(!object.value.match(nameRegex)){
                object.style.border = "2px solid red";
                document.getElementById(name).style.display="block";
                object.value = "";
            }else{
                object.style.border = "";
                document.getElementById(name).style.display="none";
            }
            break;
        case 8:
            if(!object.value.match(zipcodeRegex)){
                object.style.border="2px solid red";
                document.getElementById(name).style.display="block";
                object.value = "";
            }else {
                object.style.border="";
                document.getElementById(name).style.display="none";

            }
            break;
  }
}

function onlyOne(){
    el = document.getElementsByName("source");

    var atleastOneChecked = false;
    for(i = 0; i<el.length; i++) {
        if(el[i].checked === true) {
            atleastOneChecked = true;
        }
    }

    if(atleastOneChecked === true) {
        for(i = 0; i < el.length; i++) {
            el[i].required = false;
        }
    }else {
        for(i = 0; i < el.length; i++){
            el[i].required = true;
        }
    }
}
let form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitted();
    form.reset();
    onret();
});
function submitted() {
    document.getElementById("data").style.display = "flex";
    document.getElementById("data").style.width = "100%";
    document.getElementById("data").style.justifyContent = "center";
    let table = document.getElementById("data");
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();
    var cell8 = row.insertCell();
    var cell9 = row.insertCell();
    var cell10 = row.insertCell();
    var cell11 = row.insertCell();
    var cell12 = row.insertCell();
    var cell13 = row.insertCell();
    var cell14 = row.insertCell();

    cell1.innerHTML = document.querySelector("input[name=title]:checked").value;
    cell2.innerHTML = document.getElementById("firstName").value;
    cell3.innerHTML = document.getElementById("lastName").value;
    cell4.innerHTML = document.getElementById("emailId").value;
    cell5.innerHTML = document.getElementById("phoneNumber").value;
    cell6.innerHTML = document.getElementById("streetAddress1").value;
    cell7.innerHTML = document.getElementById("streetAddress2").value;
    cell8.innerHTML = document.getElementById("city").value;
    cell9.innerHTML = document.getElementById("state").value;
    cell10.innerHTML = document.getElementById("zipcode").value;
    cell11.innerHTML = Array.from(
      document.querySelectorAll("input[name=source]:checked"),
      (e) => e.value
    );
    cell12.innerHTML = document.getElementById("comments").value;
    cell13.innerHTML = document.getElementById("ratesl").textContent;
    cell14.innerHTML = document.getElementById("tipst").value;
  }
  
  function onret() {
    let form = document.getElementById("myForm");
    form.reset();
    menuSelection();
    tipsArea("input#rates");
  }