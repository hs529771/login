function logout() {
window.localStorage.clear();
window.location.href="index.html";
}


document.getElementById("FullName").innerHTML = localStorage.getItem("FullName");
document.getElementById("email").innerHTML = localStorage.getItem("email");
document.getElementById("phone").innerHTML = localStorage.getItem("Phone");
document.getElementById("gender").innerHTML = localStorage.getItem("Gender");