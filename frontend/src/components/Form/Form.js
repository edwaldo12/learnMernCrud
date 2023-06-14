import { useState } from "react";
import { postUser } from "../../api/createUser/index";

const Form = ({ setshowForm, showForm }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = async () => {
    try {
      let objUser = {
        nama: name,
        username: username,
        password: password,
        role: role,
        tanggal_lahir: tanggalLahir,
        email: email
      };
      await postUser(objUser);
      setshowForm(!showForm); 
      setName("");
      setUsername("");
      setPassword("");
      setRole("Admin");
      setTanggalLahir("");
      setEmail("");
      alert('Add User Success');
    } catch (error) {
      console.log("Something's Wrong :", error.message);
    }
  }

  if (showForm) {
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
                value={password}
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
              <select value={role} onChange={(e) => setRole(e.target.value)} id="role" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
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
                value={email}
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
              onClick={submitForm}
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

export default Form;
