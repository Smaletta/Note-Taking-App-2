const URL = "http://localhost:3001"

// Confirm Password for registration before posting to /register

async function passwordMatch() {
    const user = document.getElementById("registerUsername").value
    const password = document.getElementById("registerPassword").value
    const confirmPassword = document.getElementById("registerConfirmPassword").value
    try {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        } else {
            fetch(`${URL}/api/notes/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: user,
                    password: password
                })
            })
            alert("Registration successful. Redirecting to home page...");
            window.location.replace("/");
        }
    } catch (error) {
        console.error(error);
    }
}


// Login

async function login() {
    const user = document.getElementById("loginUsername").value
    const password = document.getElementById("loginPassword").value
    event.preventDefault();
    try {
        fetch(`${URL}/api/notes/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: user,
                password: password
            })
        })
        console.log("Login successful. Redirecting to home page...");
        alert("Login successful. Redirecting to home page...");
        window.location.replace("/user/:id");

    } catch (error) {
        console.error(error);
    }
}


// // New Note

// document.getElementById("newNoteSubmit").addEventListener("click", fetch("/create"));