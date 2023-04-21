// const signupForm = document.querySelector("#signup-form");

// signupForm.addEventListener("submit",(e) => {
//     e.preventDefault();
//     const userObj={
//         username:document.querySelector("#username-signup").value,
//         password:document.querySelector("#password-signup").value,
//     };
//     fetch("/api/user",{
//         method:"POST",
//         body:JSON.stringify(userObj),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     }).then(res=>{
//         if(res.ok){
//             fetch("/api/user/login",{
//                 method:"POST",
//                 body:JSON.stringify(userObj),
//                 headers:{
//                     "Content-Type":"application/json"
//                 }
//             }).then(res=>{
//                 if(res.ok){
//                    location.href = "/dashboard"
//                 }
//             })
//         }
//     });
// });

const signUpFormHandler = async function (e) {
    e.preventDefault();

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (username && password) {
        fetch("/api/user/", {
            method: "POST",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (res.ok) {
                location.href = "/dashboard"
            } else {
                alert("trumpet sound")
            }
        })
    }
};


document
    .querySelector('#signup-form')
    .addEventListener('#signup-btn', signUpFormHandler);
    