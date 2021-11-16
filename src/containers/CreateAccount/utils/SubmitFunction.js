import axios from "axios";

const SubmitFunction = async (data, setAlert) => {
    try {
        const resp = await axios.post("https://test-kerja4-backend.herokuapp.com/user/register", data);
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