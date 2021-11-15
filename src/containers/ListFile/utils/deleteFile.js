import axios from "axios";

const deleteFile = async (e, { isEventTrigger, setisEventTrigger }) => {
    try {
        const resp = await axios.get(`http://localhost:5000/file/deletefile/${e}`,
            { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
        console.log(resp.data);
        setisEventTrigger(!isEventTrigger);
    } catch (error) {

    }
}

export default deleteFile;