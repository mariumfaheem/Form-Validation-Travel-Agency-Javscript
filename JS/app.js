const name=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
let validEmail=false
let validPhone=false
let validUser=false

name.addEventListener('blur',()=>{
    console.log("name is blurred")
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let str=name.value;
    console.log(regex,str)
    if(regex .test(str)){
    name.classList.remove('is-invalid')
    validUser=true;
    }
    else{
        name.classList.add('is-invalid')
        validUser=false;
    }
})

email.addEventListener('blur',()=>{
    console.log("phone is blurred")
    let regex=/^([_\-\.0-9a-zA-z]+)@([0-9_\-\.a-zA-z0-9]+)\.([a-zA-Z]){2,7}$/
    let str=email.value;
    console.log(regex,str)
    if(regex .test(str)){
    email.classList.remove('is-invalid')
    validEmail=true;
    }
    else{
        email.classList.add('is-invalid')
        validEmail=false;
    }
}) 

phone.addEventListener('blur',()=>{
    console.log("email is blurred")
    let regex=/^([0-9]){11}$/
    let str=phone.value;
    console.log(regex,str)
    if(regex .test(str)){
        phone.classList.remove('is-invalid')
        validPhone=true;
    }
    else{
        phone.classList.add('is-invalid')
        validPhone=false;
    }
})

let submit=document.getElementById("submit")
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let failure=document.getElementById("failure")
    let success=document.getElementById("success")
    if(validEmail && validPhone && validUser){
        console.log("All Vaid")
        success.classList.add("show")
        $('#failure').alert('close');
     
    }
    else{
        console.log("one may be invalid")
       
       failure.classList.add("show")
       $('#success').alert('close');
    }
    

  
})

console.log(validEmail,validPhone,validUser)
