document.querySelector("#registerButton").addEventListener("click", function(){

    document.querySelector(".registration-section").classList.add("active");
    document.querySelector(".homePage").classList.add("blur");
    return true;
})

let users = [];

document.querySelector("#regSubButton").addEventListener("click", (e)=>{
        
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let user = {
        name: name,
        email: email,
        username: username,
        password: password
    }

    if (localStorage.getItem('users')) {
        users = localStorage.getItem('users')
        users = JSON.parse(users)
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        displayUsers(users)
    }
    else {
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        displayUsers(users)
    }


    function displayUsers(users){
        users.forEach(user => {
            console.log(`${user.username} and ${user.password}`);
        });
    }


    document.querySelector(".registration-section").classList.remove("active");
    document.querySelector(".homePage").classList.remove("blur");

    alert("Registration Successful!");

})

document.querySelector("#loginButton").addEventListener("click", function(){

    document.querySelector(".login-section").classList.add("active");
    document.querySelector(".homePage").classList.add("blur");
    return true;
})

document.querySelector("#logSubButton").addEventListener("click", (e)=>{
        
    e.preventDefault();

    let email = document.getElementById("emailLogin").value;
    let password = document.getElementById("passwordLogin").value;
    let isSuccess= false;

    if (localStorage.getItem('users')) {
        let users = localStorage.getItem('users')
        users = JSON.parse(users)

        users.forEach(user => {
            if (user.email === email && user.password === password) {
                isSuccess = true;
            }
        });
    
    }
    if (isSuccess) {
        alert("Login Succesinsful!");
        document.querySelector(".login-section").classList.remove("active");
        document.querySelector(".homePage").classList.remove("blur");
        // Replace the current page with a new page
        window.location.replace("challenge.html");


    }else {
        alert("Login Failed! Enter Again!");
        document.querySelector(".login-section").classList.remove("active");
        document.querySelector(".homePage").classList.remove("blur");
    }

})