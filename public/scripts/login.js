const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("btn-submit",(e)=>{
    e.preventDefault();
    const userObj={
        username:document.querySelector("#username-login").value,
        password:document.querySelector("#password-login").value,
    };
    fetch("/api/user/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href = "/dashboard"
        }
    })
});

