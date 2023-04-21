const loginFormHandler = async function (e) {
    e.preventDefault();

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (username && password) {
        fetch("/api/user/login", {
            method: "POST",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (res.ok) {
                location.href = "/dashboard"
            }
        })
    }
};


document
    .querySelector('#login-form')
    .addEventListener('#signIn-btn', loginFormHandler);