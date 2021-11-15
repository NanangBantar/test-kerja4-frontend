import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SubmitFunction from "./utils/SubmitFunction";
import inputType1 from "../../components/input/inputType1";
import axios from "axios";

const CreateAccount = () => {
    const { register, handleSubmit } = useForm();
    const [Country, setCountry] = useState();
    const [Alert, setAlert] = useState({
        status: false,
        text: ""
    });

    const onSubmit = data => {
        SubmitFunction(data, setAlert);
    };

    const getCountry = async () => {
        const resp = await axios.get("http://localhost:5000/country/getcountry");
        setCountry(resp.data);
    }

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
        },
        {
            name: "country",
            type: "select",
            option: Country
        },
        {
            name: "passwordText",
            type: "password",
            placeholder: "Password"
        }
    ];

    useEffect(() => {
        getCountry();
        return () => {
            setCountry([]);
        };
    }, []);

    console.log(Country);

    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Create your account
                        </h2>
                    </div>

                    {Alert.status &&
                        <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                            <p>{Alert.text}</p>
                        </div>
                    }

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm -space-y-px relative">
                            {inputType1(inputField, register)}
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <Link to="/">
                                    <button className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Already have an account..!
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreateAccount;