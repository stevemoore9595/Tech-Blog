const postId = document.querySelector('input[name="post-id"]').value;

const commentFormHandler = async function (event) {
    event.preventDefault();
    const body = document.querySelector('textarea[name="comment-body"]').value;

    if (body) {

        const response = await fetch('/api/comment', {
            method: 'POST',
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
    } else {
        document.location.assign("/login")
    }
}
};