
let url = location.search
let starturl = new URLSearchParams(url)
let endurl = starturl.get("id")
let closebtn = document.getElementById('close')
let name = document.getElementById('name')
let fothername = document.getElementById('fothername')
let codemeli = document.getElementById('codemeli')
let phone = document.getElementById('phone')
let tedadsaham = document.getElementById('tedadsaham')
let idsaham = document.getElementById('idsaham')
let price = document.getElementById('price')
let tozihat = document.getElementById('tozihat')
let lastname = document.getElementById('lastname')
let btn= document.getElementById("bb")
btn.addEventListener("click" , ()=>{
if(name.value != "" && fothername.value != "" && codemeli.value !=""&& phone.value != "" && 
tedadsaham.value !="" && idsaham.value !="" && price.value != "" && lastname.value!=""){
  fetch('http://127.0.0.1:3007/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id:endurl,
              name: name.value,
              lastname: lastname.value,
              fothername: fothername.value,
              codemeli: codemeli.value,
              phone: phone.value,
              tedadsaham:tedadsaham.value,
              idsaham : idsaham.value,
              price:price.value,
              tozihat: tozihat.value,
              status:"درحال_برسی"

               
            })
        })
        .then(response =>{

          if(response.status == 500){
            swal({
              icon: 'warning',
              title: 'آگهی با این شماره ثبت موجود است',
              showConfirmButton: false,
              timer: 3000
            })
          }
          else{
            swal({
              icon: 'success',
              title: ' وضعیت : درحال برسی',  
              showConfirmButton: false,
              timer: 3000
            })
          }
          name.value =""
fothername.value =""
codemeli.value =""
phone.value =""
tedadsaham.value =""
idsaham.value =""
tozihat.value =""
price.value =""
lastname.value =""

          
        })
        .then(data => console.log(data))
        .catch(error => console.error(error));

}

else{
  swal({
    icon: 'warning',
    title: 'اطلاعات وارد شده ناقص است ',
    showConfirmButton: false,
    timer: 3000
  })
}
})
closebtn.addEventListener("click" , ()=>{

  name.value =""
fothername.value =""
codemeli.value =""
phone.value =""
tedadsaham.value =""
idsaham.value =""
tozihat.value =""
price.value =""
lastname.value =""
})
let myads = document.getElementById('myads')
myads.addEventListener("click" , ()=>{
  location.href = "myads.html?idusers="+endurl
})