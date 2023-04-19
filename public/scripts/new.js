const newFormHandler = async function (event) {
    event.preventDefault();

    const title = documnet.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name"post-body]').value;

    if (title && body) {
        const response = await fetch ('api/post', {
            method: 'POST',
            body: JSON.stringify({
                title,
                body
            }),
             headers: {
                'Content-Type': 'application/json'
                }
             });
        if (response.ok) {
            document.location.reload();
        }
        }
};

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);