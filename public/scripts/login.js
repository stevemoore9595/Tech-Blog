const loginFormHandler = async function (e) {
    e.preventDefault();

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (username && password) {
        console.log(username, password)
        fetch("/api/user/login", {
            method: "POST",
            body: JSON.stringify({username, password}),
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
    .addEventListener('submit', loginFormHandler);