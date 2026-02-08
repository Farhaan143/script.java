// sellecting Home and about Elements
let nav= document.getElementById("nav")
let navigation= document.getElementById("nav")
let button = document.getElementById("button")
let card1 = document.getElementById("card")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")
let feature1= document.getElementById("feature1")
let feature2= document.getElementById("feature2")
let feature3 = document.getElementById("feature3")
// Applaying Events

nav.addEventListener("mouseover",()=>{
  nav.style.background="cyan"
  });
nav.addEventListener("mouseout",()=>{
   nav.style.background="#0f3c6e "
  });
  button.addEventListener("click",()=>{
    button.style.background = "red"
  })
  card1.addEventListener("mouseover",()=>{
    card1.style.background = "cyan"
  })
   card1.addEventListener("mouseleave",()=>{
    card1.style.background = "white"
  })
   card2.addEventListener("mouseover",()=>{
    card2.style.background = "cyan"
  })
   card2.addEventListener("mouseleave",()=>{
    card2.style.background = "white"
  })
   card3.addEventListener("mouseover",()=>{
    card3.style.background = "cyan"
  })
   card3.addEventListener("mouseleave",()=>{
    card3.style.background = "white"
  })
  feature1.addEventListener("mouseenter",()=>{
    feature1.style.background = "cyan"
  })
   feature1.addEventListener("mouseleave",()=>{
    feature1.style.background = "white"
  })
  feature2.addEventListener("mouseover",()=>{
    feature2.style.background = "cyan"
  })
   feature2.addEventListener("mouseleave",()=>{
    feature2.style.background = "white"
  })
  feature3.addEventListener("mouseover",()=>{
    feature3.style.background = "cyan"
  })
    feature3.addEventListener("mouseleave",()=>{
    feature3.style.background = "white"
  })
  //  input validation and Events 
  let fullname= document.getElementById("fullName")
  let phonenumber = document.getElementById("phoneNumber")
  let nambererror = document.getElementById("erornumber"
  let password = document.getElementById("password")
  let passworError = document.getElementById("passwordError")
  let form = document.getElementById("form")
  let submit = document.getElementById ("submit")
  
  // validtion of input 
  isvalidateFullname = false;
  isvalidtePhonenumber = false;
  isvalidatePassword = false;
  // form valiation
   form.addEventListener("submit",(event)=>{
    event.preventDefault();
  })
  //  fullname validation
  fullname.addEventListener("input",(event)=>{
    fname=event.target.value;
    if (fname.length>=3 && fname.length<=15){
      fullname.style.border = "3px solid green";
      isvalidateFullname = true;
    }else{
      fullname.style.border = "3px solid red"
      isvalidateFullname = false
    }
  });
//  phoenumber validation
  phonenumber.addEventListener("input",(event)=>{
    phone = event.target.value
    if (phone.length >= 9 && phone.length <=12){
      phonenumber.style.border= "3px solid green"
      isvalidtePhonenumber = true;
    } else{
      phonenumber.style.border= "3px solid red"
      isvalidtePhonenumber = false;
    }
    if (phone >= 610000000 && phone <= 619999999){
      phonenumber.style.border = "3px solid green"
      isvalidtePhonenumber = true;
      nambererror.textContent=""
    } else {
      phonenumber.style.border = "3px solid red"
      isvalidtePhonenumber = false;
      nambererror.textContent="Phone number must be Hormuud"
    }
  })
  //  password validation
  password.addEventListener("input",(event)=>{
    passkey = event.target.value;
    validate = validatePassword(passkey);
    if (validate === ""){
      password.style.border = "3px solid green"
      passworError.textContent = "";
      isvalidatePassword = true;
    }else {
      password.style.border = "3px solid red"
      passworError.textContent = validate;
      isvalidatePassword = false;
    }

  })
  passworError.style.color = "red"
  function validatePassword(password){
    if (password.length < 8){
      return "Your password must be atleast 8 characters";
    }
    if (!/[A-Z]/.test(password)){
      return "password must contain atleast 1 capital letter"
    }
    if (!/[a-z]/.test(password)){
      return "password must contain atleast 1 small letter"
    }
    if (!/[1-9]/.test(password)){
      return "password must contain atleast 1 digit"
    }
    if (!/[^A-Za-z1-9]/.test(password)){
      return "password must contain atleast 1 symbol"
    }
    return"";
  }
  //  button validation
  submit.addEventListener("click",()=>{
    if(isvalidateFullname && isvalidtePhonenumber && isvalidatePassword){
      alert ("successfully registered")
    } else {
      alert ("something wrong")
    }
  })
  
 

  

  
