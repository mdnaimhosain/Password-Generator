let generatedpassword1 = document.getElementById("generatedpassword");
let copybutton = document.getElementById("copybutton");
let genaratebutton = document.getElementById("genaratebutton");
let lengthSlider = document.getElementById("lengthSlider");
let charavtervalue = document.getElementById("charavtervalue");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let number = document.getElementById("number");
let symbols = document.getElementById("symbols");
let stringthtext = document.getElementById("stringthtext");
let passwordinput = document.getElementById("generatedpassword")

let uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseletters = "abcdefghijklmnopqrstuvwxyz"
let numbers = "0123456789"
let symbolss = "!`@#$%^&*:()_-+={}[]<>?/";

lengthSlider.addEventListener("input", function(){
charavtervalue.textContent = lengthSlider.value;
});

function generatedpassword() {
let passwordlength = parseInt(lengthSlider.value);
let allowcharacters = "";

if(uppercase.checked)
    allowcharacters += uppercaseletters;
if(lowercase.checked)
    allowcharacters += lowercaseletters;
if(number.checked)
    allowcharacters += numbers;
if(symbols.checked)
    allowcharacters += symbolss;
if(allowcharacters===""){
    alert("Please Select one Option!");
    return;
}
 let finalpassword = "" ;
  for(let i = 0; i<passwordlength;i++){
     let randomindex = Math.floor(Math.random()*
     allowcharacters.length);
    finalpassword += allowcharacters
    [randomindex];
  }
  passwordinput.value = finalpassword;
//   stringthtext(finalpassword)
   
}
copybutton.addEventListener("click" ,function(){
    if(passwordinput.value===""){
        alert ("No Password")
        return;
    }
navigator.clipboard.writeText(passwordinput.value);
alert (" Password Copied")
})
function checksringht (password){
    // let stringthtext = "WEAK"
     if(password.length <=8){
       stringthtext.textContent = "WEAK" 
    } else if(password.length <=12){
       stringthtext.textContent = "MEDIUM"  
    }
}
checksringht(passwordinput)

genaratebutton.addEventListener("click", function()
{
    generatedpassword();
})