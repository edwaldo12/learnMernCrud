import Button from "../Button/Button";
const Table = ({ data }) => {
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
          {data.map((user) => (
            <tr>
              <td className="p-2 border border-slate-300">{user.name}</td>
              <td className="p-2 border border-slate-300">{user.username}</td>
              <td className="p-2 border border-slate-300">
                {user.tanggal_lahir}
              </td>
              <td className="p-2 border border-slate-300">{user.role}</td>
              <td className="p-2 border border-slate-300">{user.email}</td>
              <td className="p-2 border border-slate-300">
                <Button buttonName={"Edit"}></Button>
                <Button buttonName={"Delete"}></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
