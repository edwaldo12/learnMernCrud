import Button from "../Button/Button";
const Table = ({ users, setUsers, showFormEdit, setshowFormEdit, setSaveId }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 py-6">
      <table className="border border-slate-300 w-full">
        <thead>
          <tr>
            <th className="p-2 border border-slate-300">Nama</th>
            <th className="p-2 border border-slate-300">Username</th>
            <th className="p-2 border border-slate-300">Tanggal Lahir</th>
            <th className="p-2 border border-slate-300">Role</th>
            <th className="p-2 border border-slate-300">Email</th>
            <th className="p-2 border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td className="p-2 border border-slate-300">{user.nama}</td>
              <td className="p-2 border border-slate-300">{user.username}</td>
              <td className="p-2 border border-slate-300">
                {user.tanggal_lahir}
              </td>
              <td className="p-2 border border-slate-300">{user.role}</td>
              <td className="p-2 border border-slate-300">{user.email}</td>
              <td className="p-2 border border-slate-300">
                <Button
                  setUsers={setUsers}
                  users={users}
                  id={user._id}
                  buttonName={"Edit"}
                  showFormEdit={showFormEdit}
                  setshowFormEdit={setshowFormEdit}
                  setSaveId={setSaveId}
                ></Button>
                <Button setUsers={setUsers} users={users} id={user._id} buttonName={"Delete"}></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
