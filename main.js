let counter = 0;

function login() {


  const input=document.getElementById("login")
  const input2 = document.getElementById("passwordInput");
  const button = document.getElementById("loginButton");


  if ( input.value==="JS" && input2.value==="document" ) {
    
    input.style.border="3px solid green";
    input2.style.border="3px solid green";
  } else {

    counter++;
    
    if (counter >= 5) {
         
      button.disabled = true;
      alert("Превышено количество попыток ввода пароля. Кнопка входа отключена.");
    }
    
    input.style.border="3px solid red";
    input2.style.border="3px solid red";
 
}
   input.value = "";
   input2.value = "";

}

    