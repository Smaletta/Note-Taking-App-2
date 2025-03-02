const URL = "http://localhost:3001";
const token = document.cookie.split("=")[1];

// Confirm Password for registration before posting to /register

async function passwordMatch() {
    const user = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("registerConfirmPassword").value;
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
            });
            alert(`${(JSON.parse(await response.text())).message}`);
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
        alert(`${(JSON.parse(await response.text())).message}`);
        if (response.ok)
            window.location.replace(`/user/${user}`)
        } catch (error) {
        console.error(error);
    }
}


// Create Note

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
        alert(`${(JSON.parse(await response.text())).message}`);
        if (response.ok) {
            window.location.reload();

        };
    } catch (error) {
        console.error(error);
    }
}

// Delete Note

async function deleteNote(req) {
    const result = confirm("Are you sure you want to delete this note?");
    const username = document.getElementById("userHome").value;
    if (!result) {
        return;
    }
    try {
        const response = await fetch(`${URL}/delete/${req}`, {
            method: "DELETE"
        })
        alert(`${(JSON.parse(await response.text())).message}`);
        if (response.ok) {
            window.location.replace(`/user/${username}`);
        };
    } catch (error) {
        console.error(error);
    }
}

// Edit Note

async function editNote() {
    document.getElementById("noteTitle").removeAttribute("disabled");
    document.getElementById("noteContent").removeAttribute("disabled");
    const updateButton = document.getElementsByName("update");
    updateButton[0].removeAttribute("disabled");
}

// Update Note

async function updateNote(req) {
    const title = document.getElementById("noteTitle").value;
    const content = document.getElementById("noteContent").value;
    const username = document.getElementById("userHome").value;
    try {
        const response = await fetch(`${URL}/update/${req}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                content: content,
            })
        })
        alert(`${(JSON.parse(await response.text())).message}`);
        if (response.ok) {
            window.location.replace(`/user/${username}`)
        };
    } catch (error) {
        console.error(error);
    }
}

// Logout

async function logout() {
    try {
        const response = await fetch(`${URL}/api/notes/logout`, {
            method: "GET"
        })
        if (response.ok) {
            window.location.replace("/")
        };
    } catch (error) {
        console.error(error);
    }
}