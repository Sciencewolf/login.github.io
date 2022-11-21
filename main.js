const setPasswordVisibility = () => {
    const inp = document.getElementById('input-field2')
    const but = document.getElementById('btn-vis')
    if(inp.type === "password") {
        inp.type = "text"
        but.innerHTML = "Hide password"

    }
    else {
        inp.type = "password"
        but.innerHTML = "Show password"
    }
}