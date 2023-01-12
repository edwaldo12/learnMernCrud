const Table = () => {
  return (
    <div className="grid grid-cols-1 place-content-center min-h-screen">
      <div>
        <table className="border-separate border border-slate-600 mx-auto">
          <thead>
            <tr>
              <th class="border border-slate-600">Nama</th>
              <th class="border border-slate-600">Username</th>
              <th class="border border-slate-600">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-600">Indiana</td>
              <td class="border border-slate-600">Indianapolis</td>
            </tr>
            <tr>
              <td class="border border-slate-600">Ohio</td>
              <td class="border border-slate-600">Columbus</td>
            </tr>
            <tr>
              <td class="border border-slate-600">Michigan</td>
              <td class="border border-slate-600">Detroit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
