import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [User, setUser] = useState()
  const userData = async () => {
    try {
      const resp = await axios.get("https://test-kerja4-backend.herokuapp.com/user/getmydata",
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setUser(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    userData();
  }, []);

  console.log(User);

  return (
    <div className="block w-full overflow-x-auto p-6 flex space-x-3">
      <div className="max-w-md rounded overflow-hidden shadow-lg">
        <img className="w-full" src={User?.coutryflags} alt="Country Flag" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {User?.user.id}
          </div>
          <p className="text-gray-700 text-base">
            Name : {User?.user.name}
          </p>
          <p className="text-gray-700 text-base">
            Email : {User?.user.email}
          </p>
          <p className="text-gray-700 text-base">
            Country : {User?.user.country}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;