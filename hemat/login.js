const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
let find = null
let login = document.getElementById("login1")
let codemeliforlogin = document.getElementById('codemeliforlogin')
let phonNumberforlogin = document.getElementById('phonNumberforlogin')
let users = []
signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;

});
let name = document.getElementById("name")
let codemeli = document.getElementById("codemeli")
let phonNumber = document.getElementById("phonNumber")
let address = document.getElementById("address")
let nameFader = document.getElementById("nameFader")
let sabt = document.getElementById('sabt')
sabt.addEventListener("click", () => {

  fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name.value,
      codemeli: codemeli.value,
      phonNumber: phonNumber.value,
      address: address.value,
      nameFader: nameFader.value
    })
  })
    .then(res => {
      if (res.status == 500) {
        swal({
          title: "مشکلی پیش امد",
          text: "بنظر میرسد شما قبلا ثبتنام کرده ایید",
          icon: "error",
          timer: 3000,
          buttons: false,
        }
        );
      }
      else {

        swal({
          title: "تبریک",
          text: "   تبریک ثبتنام موفقیت امیز بود لطفا وارد شوید",
          icon: "success",
          timer: 3000,
          buttons: false,
        }
        );
        setTimeout(() => {
          find = null
          location.href = "login.html"
        }, 3000);
      }

    }


    )
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      swal({
        title: " سرور به مشکل خورده",
        text: " بنظر میرسد سرور مشکلی دارد لطفا بعدا تلاش کنید",
        icon: "error",
        timer: 3000,
        buttons: false,
      }
      );
    })

})
fetch('http://127.0.0.1:3005/data')
  .then(response => response.json())
  .then(data => {
    users = data
  })
login.addEventListener("click", () => {

  find = users.find(user => {
    return codemeliforlogin.value == user.codemeli
  })
  if (find) {

    localStorage.setItem("logined", "true")
    swal({
      title: " تبریک ",
      text: " درحال انتقال به سایت ",
      icon: "success",
      timer: 3000,
      buttons: false,
    }
    );
    setTimeout(() => {

      location.href = "index.html?id=" + find.id
      phonNumberforlogin.value = ""
      codemeliforlogin.value = ""
      find = null
    }, 3000);
  }
  else {
    swal({
      title: " اوه نه ",
      text: " اطلاعات وارد شده صحیح نمی باشد ",
      icon: "error",
      timer: 3000,
      buttons: false,
    }
    );
    phonNumberforlogin.value = ""
    codemeliforlogin.value = ""

  }




})


