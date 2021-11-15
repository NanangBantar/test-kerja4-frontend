
import axios from "axios";

const SubmitFunction = async (data, setAlert, history) => {
    try {
        const resp = await axios.post("http://localhost:5000/user/login", data);
        setAlert({
            status: true,
            text: resp.data.text
        });
        resp.data.title === "success" && localStorage.setItem("token", resp.data.token); history.push("/dashboard");
    } catch (error) {
        console.log(error);
    }
}

export default SubmitFunction;