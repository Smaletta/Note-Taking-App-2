const URL = "http://localhost:3001"
const token = document.cookie.split("=")[1]

// Confirm Password for registration before posting to /register

async function passwordMatch() {
    const user = document.getElementById("registerUsername").value
    const password = document.getElementById("registerPassword").value
    const confirmPassword = document.getElementById("registerConfirmPassword").value
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    } else {
        try {
            const response = await fetch(`${URL}/api/notes/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: user,
                    password: password
                })
            })
            alert(`${(await response.text())}`);
            if (response.ok) {
                window.location.replace("/")
            };
        }
        catch (error) {
            console.error(error);
        }
    }
}


// Login

async function login() {
    const user = document.getElementById("loginUsername").value
    const password = document.getElementById("loginPassword").value
    try {
        const response = await fetch(`${URL}/api/notes/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: user,
                password: password
            })
        })
        alert(`${(await response.text())}`);
        if (response.ok) {
            fetch(`/user/${user}`), {
                method: "GET"                
            }
            window.location.replace(`/user/${user}`)

        };

    } catch (error) {
        console.error(error);
    }
}


// // Create Note

async function createNote() {    
    const title = document.getElementById("newNoteTitle").value;
    const content = document.getElementById("newNoteContent").value;
    try {
        const response = await fetch(`${URL}/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                content: content
            })
        })
        alert(`${(await response.text())}`);
        if (response.ok) {
            window.location.reload();

        };
    } catch (error) {
        console.error(error);
    }
}