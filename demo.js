document.getElementById('getText').addEventListener
('click',getText);

document.getElementById('getLogin').addEventListener
('click',getLogin);

document.getElementById('getSignup').addEventListener
('click',getSignup);

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
        let output = '<h3>Login</h3>';
        data.forEach(function(login){
            output +=  `
            <ul>
                <li>Email: ${login.email}</li>
                <li>Password: ${login.password}</li>
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
        let output = '<h3>SignUp</h3>';
        data.forEach(function(signup){
            output +=  `
            <ul>
                <li>Username: ${signup.username}</li>
                <li>Email: ${signup.email}</li>
                <li>Password: ${signup.password}</li>
                <li>Retype password: ${signup.password}</li>
            </ul>
             `;
        })
        document.getElementById('signup').innerHTML = output;
    })
} 