let googleCre = "appclick@gmail.com";
let passwordCre = "1234AppClick";

 emailInput = document.querySelector(".email");
 passwordInput = document.querySelector(".password");
 login =  document.querySelector(".login");

login.addEventListener("click", function() {
  if (googleCre === emailInput.value && passwordCre === passwordInput.value) {
    alert("Login Successful")
    } else {
    alert("Login Eror")
  }
})

