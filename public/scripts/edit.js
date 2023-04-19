const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function (event) {
    event.preventDefault();

    const title = documnet.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name"post-body]').value;

     await fetch(`/api/post/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({
            postId,
            body
        }),
         headers: {
            'Content-Type': 'application/json'
            }
         });
    if (response.ok) {
        document.location.reload();
    }
    
};

const deleteFormHandler = async function (event) {
    await fetch(`/api/post/${postId}`, {
        method: 'DELETE',
    });
};

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);