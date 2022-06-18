// alert("Welcome!")
// getUserDetails()
// alert("Ok, Goodbye")


// /**
//  * A function to display a user details
//  */
// function getUserDetails() {

//     let username = prompt("Enter your username")

//     while (!validateUsername(username)) {
//         if (username === null) return
//         username = prompt("Enter your username. Username must be less than 10")
//     }


//     let password = prompt("Enter your password")

//     while (!validatePassword(password)) {
//         if (password === null) return
//         password = prompt("Enter your password.")
//     }

//     let passwordAgain = prompt(`Enter your password again`)

//     while (password !== passwordAgain) {
//         if (passwordAgain === null) return
//         passwordAgain = prompt("Password do not match! Confirm your password again.")
//     }

//     const userDetails = userStore[username]

//     if (!userDetails) {
//         alert(`User ${username} does not exist. Please register`)
//         return
//     }

//     if (userDetails.password !== password) {
//         alert(`Password is incorrect. Please try again`)
//         return
//     }

//     alert(`Showing details for ${username}: \n
//     First Name: ${userDetails.firstName} \n
//     Last Name: ${userDetails.lastName} \n
//     Email: ${userDetails.email} \n
//     profession: ${userDetails.profession}
//     `)
// }

// /**
//  * A function to validate the username
//  * @param {string} username 
//  * @returns boolean
//  */
// function validateUsername(username) {
//     if (!username) return false
//     if (username.length > 10) return false
//     return true
// }

// /**
//  * A function to validate the password
//  * @param {string} password 
//  * @returns boolean
//  */
// function validatePassword(password) {
//     if (!password) return false
//     if (password.length < 6) return false
//     if (password.length > 15) return false
//     return true

// }

// /**
//  * A user store object
//  * @type {object}
//  * */
// const userStore = {
//     "Ada": {
//         firstName: "Ada",
//         lastName: "Lovelace",
//         email: "adalovelace@mail.com",
//         profession: "Computer programmer",
//         password: "12345Ada"
//     },
//     "Yemi": {
//         firstName: "Yemi",
//         lastName: "Adebisi",
//         email: "yemi_adebisi@gmail.com",
//         profession: "Software Engineer",
//         password: "12345Yemi"
//     },
// }


const usersDatabase = {
    "ballo123" : {
        firstName : "ballo",
        lastName : "odey",
        email : "brightenxxx@gmail.com",
        accountActivated : true,
        password : "brighto234",
    },

    "nancy345" : {
        firstName : "Natasha",
        lastName : "odey",
        email : "nancy@gmail.com",
        accountActivated : true,
        password : "natasha"
    },

    "hunter443" : {
        firstName : "merrygold",
        lastName : "odey",
        email : "Mgodey1@gmail.com",
        accountActivated : false,
        password : "merrygold"
    },
}



function displayUserDetails(){
    let username = prompt("Enter your username")
    validateUsername(username)
    
    while (validateUsername(username) == false){
      
    username = prompt("Username not valid, please validate")    
    }
    if (username == null){
        return
    }
    
    
    
    let password = prompt("Enter your password")
    
    while (validatePassword(password) == false){
        password = prompt("Password not valid, please validate")    
        }
        if (password == null){
            return
        }
        
        let passwordconfirm = prompt=("confirm your password")

        while(passwordconfirm !== password){

         passwordconfirm = prompt=("password incorrect,confirm your password again")
        }

        const user = usersDatabase(username)
        if (user == undefined){
            alert("user not found! Please Register")
            return
        } 
        console.log(user)
        alert(`
        User found with the following details:
        first Name: ${user.firstName}
        Last Name : ${user.LastName}

        `)
        console.log(username, password, passwordconfirm)
}



function validateUsername(username) {
    console.log(`username is ${username}`)
    if (!username){
        return true
    }
    else {
        if(username.length > 10){
            console.log("username > 10")
            return false
        }else {
            return true
        }
    }
}
function validatePassword(password) {
    if (password == null){
        return false
    }
    if(password.length < 6){
        return false
}   else {
    return true
}

}

