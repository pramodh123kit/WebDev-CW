var cardnumberfilled =false;
var expirydatefilled =false;
var securitycodefilled =false;
var Address1filled =false;
var Address2filled =false;
var Address3filled =false;
var Townfilled =false;
var Statefilled =false;
var Zipcodefilled =false;
var Countryfilled =false;
var phoneNumberfilled =false;


// Set the value of the input element with ID "useremail" to the value of the "useremail" item in localStorage
document.getElementById("useremail").value=localStorage.getItem("useremail");


// Set the value of the input element with ID "username" to the value of the "username" item in localStorage
document.getElementById("username").value=localStorage.getItem("username");


// Set the innerHTML of the element with ID "nameDetail" to the value of the "username" item in localStorage
document.getElementById("nameDetail").innerHTML=localStorage.getItem("username");


// Set the innerHTML of the element with ID "totalPriceItams" to the value of the "totalprice" item in localStorage, preceded by a dollar sign
document.getElementById("totalPriceItams").innerHTML="$"+localStorage.getItem("totalprice");



    if(localStorage.getItem("delivery")==="true"){
        document.getElementById("delivery").innerHTML="Express Delivery"
    }
    else{
        document.getElementById("delivery").innerHTML="No Express Delivery"
    }
    


//Validate Credit Card Input

var cardnumber = document.getElementById("Card-number")

cardnumber.addEventListener("change",function(){
    var cardnum = cardnumber.value;
    if(cardnum==="" || cardnum.length!==16){
        cardnumber.style.borderColor="red"
        cardnumberfilled =false
    }
    else{
        cardnumber.style.borderColor="green"
        cardnumberfilled =true
    }
    
})


//Validate Expiry Date Input

var expirydate = document.getElementById("date")

expirydate.addEventListener("change",function(){
    var exdate = expirydate.value;
    if(exdate===""){
        expirydate.style.borderColor="red"
        expirydatefilled =false
    }
    else{
        expirydate.style.borderColor="green"
        expirydatefilled =true
    }
    
})


//Validate Security Code Input

var securitycode = document.getElementById("code")

securitycode.addEventListener("change",function(){
    var scode = securitycode.value;
    if(scode==="" || scode.length!==3){
        securitycode.style.borderColor="red"
        securitycodefilled =false
    }
    else{
        securitycode.style.borderColor="green"
        securitycodefilled =true
    }
    
})


//Validate Billing Address details


//Validate Address 1 input

var Address1 = document.getElementById("address1")

Address1.addEventListener("change",function(){
    var add1 = Address1.value;
    if(add1===""){
        Address1.style.borderColor="red"
        Address1filled =false
    }
    else{
        Address1.style.borderColor="green"
        Address1filled =true
    }
    
})

//Validate Address 2 input

var Address2 = document.getElementById("address2")

Address2.addEventListener("change",function(){
    var add2 = Address2.value;
    if(add2===""){
        Address2.style.borderColor="red"
        Address2filled =false
    }
    else{
        Address2.style.borderColor="green"
        Address2filled =true
    }
    
})

//Validate Address 3 input
var Address3 = document.getElementById("address3")

Address3.addEventListener("change",function(){
    var add3 = Address3.value;
    if(add3===""){
        Address3.style.borderColor="red"
        Address3filled =false
    }
    else{
        Address3.style.borderColor="green"
        Address3filled =true
    }
    
})

//Validate Town/City input

var Town = document.getElementById("town")

Town.addEventListener("change",function(){
    var towncity = Town.value;
    if(towncity===""){
        Town.style.borderColor="red"
        Townfilled =false
    }
    else{
        Town.style.borderColor="green"
        Townfilled =true
    }
    
})

//Validate State/Region input

var State = document.getElementById("state")

State.addEventListener("change",function(){
    var stateRegion = State.value;
    if(stateRegion===""){
        State.style.borderColor="red"
        Statefilled =false
    }
    else{
        State.style.borderColor="green"
        Statefilled =true
    }
    
})

//Validate Postcode/Zipcode input

var Zipcode = document.getElementById("zip")

Zipcode.addEventListener("change",function(){
    var code = Zipcode.value;
    if(code===""){
        Zipcode.style.borderColor="red"
        Zipcodefilled =false
    }
    else{
        Zipcode.style.borderColor="green"
        Zipcodefilled =true
    }
    
})

//Validate Country input

var Country = document.getElementById("country")

Country.addEventListener("change",function(){
    var countryv = Country.value;
    if(countryv===""){
        Country.style.borderColor="red"
        Countryfilled =false
    }
    else{
        Country.style.borderColor="green"
        Countryfilled =true
    }
    
})


//Validate Contact details

//Validate Phone Number input
var phoneNumber = document.getElementById("pnumber")

phoneNumber.addEventListener("change",function(){
    var phoneNum = phoneNumber.value;
    if(phoneNum===""){
        phoneNumber.style.borderColor="red"
        phoneNumberfilled =false
    }
    else{
        phoneNumber.style.borderColor="green"
        phoneNumberfilled =true
    }
    
})


// Get the button element with ID "btn" and store it in the variable "submitbutton"
var submitbutton = document.getElementById("btn")

// Add an event listener to the button element for the "click" event
submitbutton.addEventListener("click",function(){
    if (cardnumberfilled && expirydatefilled && securitycodefilled && Address1filled &&  Address2filled && 
        Address3filled && Townfilled && Statefilled && Zipcodefilled &&  Countryfilled && phoneNumberfilled
        ){

// If all input fields are filled in, display an alert message to thank the user
        alert("Thank you!")
    }
    
})
    
