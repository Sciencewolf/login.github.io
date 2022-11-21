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

const checkEmail = () => {
    console.log(document.getElementById("myDiv").style.borderColor);
    const field = document.getElementById('input-field')
    color = "#FFF"
    if(!(field.contains('@'))){
        field.style.color = color
    }
}