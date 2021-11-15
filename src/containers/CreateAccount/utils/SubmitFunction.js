import axios from "axios";

const SubmitFunction = async (data, setAlert) => {
    try {
        const resp = await axios.post("http://localhost:5000/user/register", data);
        setAlert({
            status: true,
            text: resp.data.text
        });
        console.log(resp.data);
    } catch (error) {
        console.log(error);
    }
}

export default SubmitFunction;