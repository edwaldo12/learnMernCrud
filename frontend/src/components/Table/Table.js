import Button from "../Button/Button";
import { useState } from "react";
import Form from "../Form/Form.js";

const Table = () => {
  const [showForm, setshowForm] = useState(false);

  const onShowFormHandler = () => {
    setshowForm(!showForm);
  };

  return (
    <div className="grid grid-cols-1 place-content-center min-h-screen">
      <div>
        <Form props={showForm}></Form>
        <table className="border-separate border border-slate-600 mx-auto">
          <thead>
            <tr>
              <th className="border border-slate-600">Nama</th>
              <th className="border border-slate-600">Username</th>
              <th className="border border-slate-600">Tanggal Lahir</th>
              <th className="border border-slate-600">Role</th>
              <th className="border border-slate-600">Email</th>
              <th className="border border-slate-600">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-600">Indiana</td>
              <td className="border border-slate-600">Indianapolis</td>
              <td className="border border-slate-600">Weronpoolis</td>
              <td className="border border-slate-600">Indianpolos</td>
              <td className="border border-slate-600">Polosi</td>
              <td className="border border-slate-600">
                <Button buttonName={"Add"} handler={onShowFormHandler}></Button>
                <Button buttonName={"Edit"}></Button>
                <Button buttonName={"Delete"}></Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
