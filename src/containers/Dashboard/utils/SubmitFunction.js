import axios from "axios";

const SubmitFunction = async (data, setAlert, { isEventTrigger, setIsEventTrigger } = {}) => {
    try {
        const resp = await axios.post("https://test-kerja4-backend.herokuapp.com/file/createfile",
            data,
            { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
        );
        
        if (setIsEventTrigger) {
            setIsEventTrigger(!isEventTrigger);
        }

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