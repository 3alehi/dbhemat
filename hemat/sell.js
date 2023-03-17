let back = document.getElementById('back')
let url = location.search
let starturl = new URLSearchParams(url)
let endurl = starturl.get("idusers")
let find = null
let listcard = document.getElementById("list-card")
back.addEventListener("click", () => {
    history.back()
})
let asd = null

fetch('http://127.0.0.1:3001/data')
    .then(res => {
        return res.json()
    })
    .then(res => {
        ads = res
        find = ads.forEach(element => {
            if (element.id == endurl) {
                listcard.innerHTML += `
                <div class="card">
                <img src="https://www.semana.com/resizer/phTtNIpq5t1VRhUZjnMsueYJVjk=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/CE6UK4MH6VHRJPVMBS73Y23SZ4.jpg">
                <h3 class="t">نام  : ${element.name}</h3>
                <h3 class="t">نام خانوادگی  : ${element.lastname}</h3>
                <h5 class="t"> نام پدر : ${element.fothername}</h5>
                <h6 class="t">  شماره تلفن : ${element.phone}</h6>
                <p class="t" class="price"> قیمت مورد نظر : ${element.price}  ملیون تومان</p>
                <p id="statuse" class="t" class="price"> وضعیت : ${element.status}</p>
              
                <button class="btn btn-success" >ویرایش آگهی </button>
                <button id="close" class="btn btn-danger" >حذف آگهی</button>
              </div>`

                setTimeout(() => {
                    let btndelete = document.getElementById("close")
                    btndelete.addEventListener("click", () => {
                        const userId = element.id;
                        fetch(`http://127.0.0.1:3009/users/${userId}`, { method: 'DELETE' })

                            .then(response => response.text())
                            .then(data => {
                                location.href = location.href

                            })
                            .catch(error => console.error(error));
                    })

                }, 200);
            }

        });

    })






