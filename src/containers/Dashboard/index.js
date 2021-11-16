import { useState, useEffect } from "react";
import axios from "axios";
import inputType1 from "../../components/input/inputType1";
import { useForm } from "react-hook-form";
import SubmitFunction from "./utils/SubmitFunction";

const Dashboard = () => {
    const { register, handleSubmit } = useForm();
    const [MainFile, setMainFile] = useState();
    const [isEventTrigger, setIsEventTrigger] = useState(false);
    const [Alert, setAlert] = useState({
        status: false,
        text: ""
    });

    const onSubmit = data => {
        SubmitFunction(data, setAlert, { isEventTrigger, setIsEventTrigger });
    };

    const inputField = [
        {
            name: "name",
            type: "text",
            placeholder: "Username"
        },
        {
            name: "email",
            type: "email",
            placeholder: "Email"
        }
    ];

    const getMainFile = async () => {
        try {
            const resp = await axios.get("https://test-kerja4-backend.herokuapp.com/file/getfile",
                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            setMainFile(resp.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMainFile();
    }, [isEventTrigger]);

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 xl:w-1/2 p-6">
                    <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full px-6 py-5 bg-blue-600"><i className="fas fa-file fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h3 className="font-bold text-3xl text-center">{MainFile?.allfile[0].file.split('.').slice(0, -1).join('.').includes(".yaml") ? MainFile?.allfile[0].file.split('.').slice(0, -1).join('.') : MainFile?.allfile[0].file.split('.').slice(0, -1).join('.') + ".yaml"}</h3>
                                <p className="font-bold text-left">
                                    File Description <br />
                                    Name : {MainFile?.name} <br />
                                    Email : {MainFile?.email} <br />
                                    Location : <br />
                                    {MainFile?.folderlocation}{MainFile?.allfile[0].file.split('.').slice(0, -1).join('.').includes(".yaml") ? MainFile?.allfile[0].file.split('.').slice(0, -1).join('.') : MainFile?.allfile[0].file.split('.').slice(0, -1).join('.') + ".yaml"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/2 p-6">
                    <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full px-5 py-5 bg-blue-600"><i className="fas fa-folder fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h3 className="font-bold text-2xl text-center">Total</h3>
                                <h3 className="font-bold text-3xl text-center my-1">{MainFile?.totalfile}</h3>
                                <h3 className="font-bold text-2xl text-center">File</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap flex-grow mt-2">
                <div className="xl:w-1/2 md:w-full p-4 w-full">
                    <div className="rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-blue-900"><i className="fa fa-list"></i> File List
                                <h3 className="font-bold text-1xl">Folder Location :<br />
                                    {MainFile?.folderlocation}
                                </h3>
                            </div>
                            <ul className="list-disc px-5">
                                {MainFile?.allfile.map(val =>
                                    <li key={val.file}>{val.file}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xl:w-1/2 md:w-full p-4 w-full">
                    <div className="rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-blue-900"><i className="fa fa-plus-circle"></i> Create New File</div>
                            {Alert.status &&
                                <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                                    <p>{Alert.text}</p>
                                </div>
                            }
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
                                {inputType1(inputField, register)}
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;