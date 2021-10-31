function login()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("username", username);
    window.location = "kwitter_page.html";
}