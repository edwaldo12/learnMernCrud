import { deleteUser } from "../../api/deleteUser/index";
import { getUsers } from '../../api/getUsers/index';

const Button = ({ buttonName, handler, id, setUsers, showFormEdit, setshowFormEdit, setSaveId }) => {
  const deleteUserAction = (id) => {
    let confirmation = window.confirm("Delete user?");
    if (confirmation) {
      deleteUser(id).then(() => {
        getUsers().then(users => {
          setUsers(users);
        });
        alert('Success Delete User');
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  const getUserActionEdit = async (id) => {
    setshowFormEdit(!showFormEdit);
    setSaveId(id);
  }

  if (buttonName === "Add New User") {
    return (
      <button
        onClick={() => handler()}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-4"
      >
        {buttonName}
      </button>
    );
  } else if (buttonName === 'Delete') {
    return (
      <button
        onClick={(e) => deleteUserAction(id)}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        {buttonName}
      </button>
    );
  } else {
    return (
      <button
        onClick={(e) => getUserActionEdit(id)}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        {buttonName}
      </button>
    );
  }
};

export default Button;
