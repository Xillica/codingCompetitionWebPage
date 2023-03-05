let users = []
let form = document.getElementById('form')


form.addEventListener('submit', (e) => {
        document.getElementById('result').innerHTML=""
        e.preventDefault()
        let username = document.getElementById('username').value
        let country = document.getElementById('country').value

        let user = {
            username: username,
            country: country
        }

        document.getElementById('username').value=""
        document.getElementById('country').value=""
    })

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
            document.getElementById('result').innerHTML += `
            
            <tr>
                <td>${user.username}</td>
                <td>${user.country}</td>
            </tr>
            
            `
        });
    }

    if (localStorage.getItem('users')) {
        let users = localStorage.getItem('users')
        displayUsers(JSON.parse(users))
    }