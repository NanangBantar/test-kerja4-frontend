import axios from "axios";

const SubmitFunction = async (data, setAlert, { isEventTrigger, setIsEventTrigger } = {}) => {
    try {
        const resp = await axios.post("http://localhost:5000/file/createfile",
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