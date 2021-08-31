const BASE_URL = 'https://jsonplaceholder.typicode.com';

getPostById(3);
function getPostById(id) {
    fetch(`${BASE_URL}/posts/${id}`)
        .then(res => res.json())
        .then(data => {
            renderPost(data);
            getCommentById(id)
        });
}

function renderPost(post) {
    const div = document.createElement('div');
    div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `
    document.querySelector('#post').append(div);
}
function getCommentById(id) {
    fetch(`${BASE_URL}/comments?postId=${id}`)
        .then(res => res.json())
        .then(data=>renderComments(data))
}
function renderComments(comments) {
    comments.forEach(el => {
    const div = document.createElement('div');
    div.innerHTML = `
    <h5>${el.email} , left comment:</h5>
    <p>${el.body}</p>
    `
    document.querySelector('#comments').append(div)
        });
}