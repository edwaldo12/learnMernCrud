import { useState, useEffect } from "react";
import { updateUser } from "../../api/updateUser/index";
import { getUser } from "../../api/getUser/index";

const UpdateUserForm = ({ setshowFormEdit, showFormEdit, saveId }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (saveId) {
      const userFetched = getUser(saveId);
      userFetched.then((user) => {
        setName(user.data.user.nama);
        setUsername(user.data.user.username);
        setRole(user.data.user.role);
        setTanggalLahir(user.data.user.tanggal_lahir);
        setEmail(user.data.user.email);
      }).catch((error) => {
        console.log(error);
      });
    }
  }, [saveId]);

  const updateForm = async () => {
    try {
      let objUser = {
        nama: name,
        username: username,
        password: password,
        role: role,
        tanggal_lahir: tanggalLahir,
        email: email
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
              <select onChange={(e) => setRole(e.target.value)} id="role" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={role}>
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
                value={email
                }
                onChange={(e) => setEmail(e.target.value)}
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
                value={tanggalLahir}
                onChange={(e) => setTanggalLahir(e.target.value)}
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
        </form >
      </div >
    );
  }
};

export default UpdateUserForm;
