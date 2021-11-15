import LogoutAction from "./utils/LogoutAction";
import { useHistory } from "react-router";

const Logout = () => {
    const history = useHistory();
    return (
        <div className="block w-full overflow-x-auto p-6 flex space-x-3">
            <div className="max-w-md rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <p className="text-black-700 text-2xl font-bold">
                        Logout your account
                    </p>
                    <p className="text-black-700 text-base my-4">
                        <button onClick={() => LogoutAction(history)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Logout
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Logout;