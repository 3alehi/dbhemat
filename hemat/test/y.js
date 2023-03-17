// let btn = document.getElementById('btn')

// btn.addEventListener('click' , ()=>{
//     fetch('http://localhost:3000/register', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: 'John1aa asfDoe',
//             email: 'john3@exdfasdfmple.com',
//             password:Math.random(Math.floor()*1000)
//         })
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
    
// })
// fetch('http://127.0.0.1:3000/data')
//   .then(response => response.json())
//   .then(data => {
// console.log(data)  })
//   .catch(error => console.error(error));

// let userId = 38
// fetch(`http://127.0.0.1:3009/users/${userId}`, { method: 'DELETE' })
// .then(response => response.text())
// .then(data => console.log(data))
// .catch(error => console.error(error)); 

fetch('http://127.0.0.1:4005/updating/34', {
    method: 'PUT', // استفاده از HTTP method PUT برای به‌روزرسانی اطلاعات
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: 50, // آی‌دی کاربری که قرار است به‌روزرسانی شود
      name: 'John',
      lastname: 'Doe',
      fothername: 'Alex',
      codemeli: '1234567890',
      phone: '09123456789',
      tedadsaham: 10,
      idsaham: 'ABC123',
      price: 10000,
      tozihat: 'This is a test',
      status: 'pending'
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  