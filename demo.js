window.fetch("https://api.github.com/users")
.then((x)=>x.json())
.then((x)=>{
    // console.log(x)
    x.map((value)=>{
        // console.log(value.login);
        let div=document.getElementById("div");
        console.log(div);
        table=""
        table+=`
        <tr>
        <td>${value.login}<td>
        <td>${value.id}<td>
        <td><img src=${value.avatar_url}/><td>
        <tr>
        `
        div.innerHTML+=table
    })
})


