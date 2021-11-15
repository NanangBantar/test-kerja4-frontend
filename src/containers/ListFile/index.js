import { useState, useEffect } from "react";
import axios from "axios";
import deleteFile from "./utils/deleteFile";

const ListFile = () => {
    const [AllFile, setAllFile] = useState();
    const [isEventTrigger, setisEventTrigger] = useState(false);
    const [filter, setFilter] = useState("");

    const getAllFile = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/file/getallfile",
                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
            );

            setAllFile(resp.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllFile();
    }, [isEventTrigger]);

    console.log(isEventTrigger);

    return (
        <div className="block w-full overflow-x-auto p-6">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input onChange={(e) => setFilter(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search File" />
            </div>
            <table className="items-center bg-transparent w-full border-collapse bg-white shadow">
                <thead>
                    <tr>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            File Name
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Location
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Description
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        AllFile?.filter(val => val.fileName.includes(filter)).map(val =>
                            <tr key={val.fileName}>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                    {val.fileName}
                                </th>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                    {val.location}
                                </th>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                    <p>
                                        Name : {val.description.name}
                                    </p>
                                    <p>
                                        Email : {val.description.email}
                                    </p>
                                </th>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                    <button onClick={() => deleteFile(val.fileName, { isEventTrigger, setisEventTrigger })} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Delete
                                    </button>
                                </th>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    );
}

export default ListFile;