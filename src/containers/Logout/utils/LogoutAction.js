const LogoutAction = (history) => {
    history.push("/");
    localStorage.removeItem("token");
}

export default LogoutAction;