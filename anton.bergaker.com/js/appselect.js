let reveal_apps = function() {
    let box = document.getElementsByClassName("app_popup")[0];
    if (box === undefined) {
        return;
    }
    let is_active = box.style.display === "block";
    box.style.display = is_active ? "none" : "block";
}

window.onload = function() {
    document.getElementById("app_popup_button").onclick = reveal_apps;
}