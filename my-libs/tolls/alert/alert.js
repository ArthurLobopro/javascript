function alert({title, text, center = true}) {
    title = title ?? window.location.hostname + " diz"
    const div = document.createElement('div')
    div.classList.add("full")
    div.id = "alert"
    div.innerHTML = `
    <div id="alert-interior" style="align-self:${center ? "center": "flex-start;margin-top: 5px"}">
        <div class="title">${title}</div>
        <div class="text"> ${text}</div>
        <button id="remove-alert">
            OK
        </button>
    </div>
    `
    document.body.appendChild(div)
    document.getElementById("remove-alert").onclick = removeAlert
}
function removeAlert() {
    const div = document.querySelector("#alert.full")
    document.body.removeChild(div)
}

export default alert