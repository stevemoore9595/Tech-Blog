const editFormHandler = async function (e) {
    e.preventDefault();

    const title = document.querySelector('input[name="title"]').value;
    const description = document.querySelector('textarea[name="description"]').value;

    if (title && description) {
        fetch ('/api/post', {
            method: 'PUT',
            body: JSON.stringify({title, description}),
             headers: {
                "Content-Type": "application/json"
                }
             }).then(res => {
        if (res.ok) {
            document.location.replace("/dashboard") 
        }
        })
    }    
};

document
    .querySelector('#editPostForm')
    .addEventListener('submit', editFormHandler);