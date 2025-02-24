// Confirm Password for registration before posting to /register

const registerSubmit = document.getElementById("registerSubmit");

document.getElementById("registerSubmit").addEventListener("click", function passwordMatch() {
    const user = document.getElementById("registerUsername").value
    const password = document.getElementById("registerPassword").value
    const confirmPassword = document.getElementById("registerConfirmPassword").value

    if (password !== confirmPassword) {
        alert("Passwords do not match");
    } else fetch("/api/notes/register", {
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
    setTimeout(() => (window.location.href = "/"), 1500);

})

document.getElementById("loginSubmit").addEventListener("click", function login() {
    const user = document.getElementById("loginUsername").value
    const password = document.getElementById("loginPassword").value

    fetch("/api/notes/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: user,
            password: password
        })
    })
    alert("Login successful. Redirecting to home page...");
    setTimeout(() => (window.location.href = "/"), 1500);
})