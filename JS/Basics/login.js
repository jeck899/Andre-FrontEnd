var database = [{
username: "albert",
password: "albertpass"
},{
username: "Lei",
password: "leipass"
},{
    username: "Emma",
    password: "emmapass"
    },{
        username: "Alex",
        password: "alexpass"
        }];

var newsfeed = [
    {
    username: "Bobby",
    timeline: "So Tired!"
}, 
{
    username: "Sally",
    timeline: "I love JS!!!"
}];

var userNamePrompt = prompt("Username: ");
var passwordPrompt = prompt("Password: ");
var loginResult

function isUserValid(username,password) {
    // for(var i=0;i<database.length;i++){
    //     if(database[i].username === username && database[i].password === password ){
    //         console.log(newsfeed);
    //         return true;
    //     }
    //     return false;
    // };

    Object.values(database).forEach(function(data){
        if(data.username === username){
            if(data.password === password){
                console.log(true);
                loginResult = 1;
                return;
            }
            else
            {
                console.log("Wrong Password");
                loginResult = 2;
                    return;
            }
            
}})};

function signIn(username,password) {
    isUserValid(username,password);
    console.log("Sign In Result:" + loginResult)
    if (loginResult === 1){
        alert("Success! Welcome "+ username)
        console.log(newsfeed);
    } else if(loginResult === 2) {
        alert("Wrong Password");
    } else {
        alert("No User");
}};

signIn(userNamePrompt,passwordPrompt);