function submitForm(){

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if(name === ""){
        alert("Please enter your name");
        return;
    }

    if(email === ""){
        alert("Please enter your email");
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        alert("Please enter a valid email address");
        return;
    }

    document.getElementById("greeting").innerHTML =
    "🎉 Welcome, " + name + "!";
}

function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
}

function updateClock(){

    let now = new Date();

    let time = now.toLocaleTimeString();

    document.getElementById("clock").innerHTML =
    "🕒 Current Time: " + time;
}

setInterval(updateClock,1000);

updateClock();