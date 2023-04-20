const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const userObj={
        username:document.querySelector("#username-signup").value,
        password:document.querySelector("#password-signup").value,
    };
    fetch("/api/user",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
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
        }
    });
});
            