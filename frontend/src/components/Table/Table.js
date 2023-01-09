const Table = () => {
  return (
    <table className="border-separate border border-slate-600">
      <thead>
        <tr>
          <th class="border border-slate-600 ...">State</th>
          <th class="border border-slate-600 ...">City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-600 ...">Indiana</td>
          <td class="border border-slate-600 ...">Indianapolis</td>
        </tr>
        <tr>
          <td class="border border-slate-600 ...">Ohio</td>
          <td class="border border-slate-600 ...">Columbus</td>
        </tr>
        <tr>
          <td class="border border-slate-600 ...">Michigan</td>
          <td class="border border-slate-600 ...">Detroit</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
