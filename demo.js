document.getElementById('getText').addEventListener
('click',getText);

document.getElementById('getLogin').addEventListener
('click',getLogin);

document.getElementById('getSignup').addEventListener
('click',getSignup);

document.getElementById('getContact').addEventListener
('click',getContact);

document.getElementById('getCreate').addEventListener
('click',getCreate);

document.getElementById('getUpdate').addEventListener
('click',getUpdate);

document.getElementById('getPartial').addEventListener
('click',getPartial);

document.getElementById('getDelete').addEventListener
('click',getDelete);

document.getElementById('addPost').addEventListener
('submit',addPost);


function getText(){
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data;
    })
    .catch((err) => console.log(err))
}

function getLogin(){
    fetch('login.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h4>Login</h4>';
        data.forEach(function(login){
            output +=  `
            <ul class="list-group mb-3">
                <li class="list-group-item">Email: ${login.email}</li>
                <li class="list-group-item">Password: ${login.password}</li>
            </ul>
             `;
        })
        document.getElementById('get').innerHTML = output;
    })     
}

function getSignup(){
    fetch('signup.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h4>SignUp</h4>';
        data.forEach(function(signup){
            output +=  `
            <ul class = "list-group mb-3">
                <li class="list-group-item">Username: ${signup.username}</li>
                <li class="list-group-item">Email: ${signup.email}</li>
                <li class="list-group-item">Password: ${signup.password}</li>
                <li class="list-group-item">Retype password: ${signup.password}</li>
            </ul>
             `;
        })
        document.getElementById('signup').innerHTML = output;
    })
}

function getContact(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h4>List</h4>';
        data.forEach(function(posts){
            output +=  `
            <ul class="list-group mb-3">
                <li class="list-group-item">Name: ${posts.name}</li>
                <li class="list-group-item">Phone number: ${posts.number}</li>
                <li class="list-group-item">Adress: ${posts.adress}</li>
            </ul>
             `;
        })
        document.getElementById('list').innerHTML = output;
    })

}

function getCreate(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
       method: 'POST',
       body: JSON.stringify({
          id: '101',
          Name: 'string',
          PhoneNumber: 'string',
          Adress: 'string',
          userId: 1,
        }),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
       },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function getUpdate() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
        body: JSON.stringify({
        id: 1,
        Name: 'string',
        PhoneNumber: 'string',
        Adress: 'string',
        userId: 1,
    }),
      headers: {
    'Content-type': 'application/json; charset=UTF-8',
        },
})
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function getPartial() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PATCH',
        body: JSON.stringify({
        PhoneNumber: 'string',
        Adress: 'string',
       }),
      headers: {
       'Content-type': 'application/json; charset=UTF-8',
       },
      })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function getDelete() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
    body: JSON.stringify({
        id: 'string',
    })
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function addPost(e){
    e.preventDefault();

    let titlle = document.getElementById('titlle').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'POST',
        headers : {
            'Accept': 'application/json, text/plain, */*',
            'Content-type' : 'application/json'
        },
        body : JSON.stringify({titlle:titlle, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}
