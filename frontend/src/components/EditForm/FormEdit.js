import { useState, useEffect } from "react";
import { updateUser } from "../../api/updateUser/index";
import { getUser } from "../../api/getUser/index";

const defaultValue = {
  name: "",
  username: "",
  password: "",
  role: "Admin",
  tanggal_lahir: "",
  email: "",
};

const UpdateUserForm = ({ setshowFormEdit, showFormEdit, saveId }) => {
  const [userInfo, setUserInfo] = useState(defaultValue);
  useEffect(() => {
    if (saveId) {
      const userFetched = getUser(saveId);
      userFetched.then((user) => {
        setUserInfo({
          ...userInfo,
          name: user.data.user.nama,
          username: user.data.user.username,
          role: user.data.user.role,
          tanggal_lahir: user.data.user.tanggal_lahir,
          email: user.data.user.email
        });
      }).catch((error) => {
        console.log(error);
      });
    }
  }, [saveId]);

  const updateForm = async () => {
    try {
      let objUser = {
        nama: userInfo.name,
        username: userInfo.username,
        password: userInfo.password,
        role: userInfo.role,
        tanggal_lahir: userInfo.tanggal_lahir,
        email: userInfo.email
      };
      await updateUser(saveId, objUser);
      setshowFormEdit(!showFormEdit);
      alert('Update User Success');
    } catch (error) {
      console.log("Something's Wrong :", error.message);
    }
  }

  if (showFormEdit) {
    return (
      <div className="w-full">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex">
            <div className="basis-1/2 mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                value={userInfo.name}
                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
              />
            </div>
            <div className="basis-1/2 mb-6 ml-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                value={userInfo.username}
                onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
              />
            </div>
          </div>
          <div className="flex">
            <div className="basis-1/2 mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                name="password"
              />
            </div>
            <div className="basis-1/2 mb-6 ml-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="role"
              >
                Role
              </label>
              <select onChange={(e) => setUserInfo({ ...userInfo, role: e.target.value })} id="role" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={userInfo.role}>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </div>
          </div>
          <div className="flex">
            <div className="basis-1/2 mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Username"
                name="email"
                value={userInfo.email}
                onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
              />
            </div>
            <div className="basis-1/2 mb-6 ml-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="tanggal_lahir"
              >
                Tanggal Lahir
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="tanggal_lahir"
                type="date"
                placeholder="Tanggal Lahir"
                name="tanggal_lahir"
                value={userInfo.tanggal_lahir}
                onChange={(e) => setUserInfo({ ...userInfo, tanggal_lahir: e.target.value })}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={updateForm}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default UpdateUserForm;
