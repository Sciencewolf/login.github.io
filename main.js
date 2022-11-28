const setPasswordVisibility = () => {
    const inp = document.getElementById('input-field2')
    if(inp.type === "password") inp.type = "text"
    else inp.type = "password"
}