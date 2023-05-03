const delBtn = document.querySelector("#deletePost");
const editBtn = document.querySelector('#editPost');

// TODO: somehow apply this to all buttons (forEach loop?)
delBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const postId = document.getElementById('deletePost').getAttribute('data-id')
    console.log(postId)
    // TODO: extract the postId of the specific post
    await fetch(`/api/post/${postId}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    
    })
    document.location.reload()
})

editBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const postId = document.getElementById('editPost').getAttribute('data-id')
})