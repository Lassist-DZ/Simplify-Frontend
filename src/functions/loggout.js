const loggout = (navigate) => {
    localStorage.removeItem("token")
    navigate("/login")
}
export default loggout