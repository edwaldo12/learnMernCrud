import Button from "../Button/Button";
import { useState, useEffect } from "react";
import AddModal from "../Modal/AddModal.js";

const Table = () => {
  const [showAddModal, setshowAddModal] = useState(false);
  return (
    <div className="grid grid-cols-1 place-content-center min-h-screen">
      <AddModal></AddModal>
      <div>
        <table className="border-separate border border-slate-600 mx-auto">
          <thead>
            <tr>
              <th class="border border-slate-600">Nama</th>
              <th class="border border-slate-600">Username</th>
              <th class="border border-slate-600">Tanggal Lahir</th>
              <th class="border border-slate-600">Role</th>
              <th class="border border-slate-600">Email</th>
              <th class="border border-slate-600">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-600">Indiana</td>
              <td class="border border-slate-600">Indianapolis</td>
              <td class="border border-slate-600">Weronpoolis</td>
              <td class="border border-slate-600">Indianpolos</td>
              <td class="border border-slate-600">Polosi</td>
              <td class="border border-slate-600">
                <Button
                  buttonName={"Add"}
                  onClick={() => setshowAddModal(!showAddModal)}
                ></Button>
                <Button buttonName={"Edit"}></Button>
                <Button buttonName={"Delete"}></Button>
              </td>
            </tr>
            <tr>
              <td class="border border-slate-600">Indiana</td>
              <td class="border border-slate-600">Indianapolis</td>
              <td class="border border-slate-600">Weronpoolis</td>
              <td class="border border-slate-600">Indianpolos</td>
              <td class="border border-slate-600">Polosi</td>
              <td class="border border-slate-600">
                <Button buttonName={"Add"}></Button>
                <Button buttonName={"Edit"}></Button>
                <Button buttonName={"Delete"}></Button>
              </td>
            </tr>
            <tr>
              <td class="border border-slate-600">Indiana</td>
              <td class="border border-slate-600">Indianapolis</td>
              <td class="border border-slate-600">Weronpoolis</td>
              <td class="border border-slate-600">Indianpolos</td>
              <td class="border border-slate-600">Polosi</td>
              <td class="border border-slate-600">
                <Button buttonName={"Add"}></Button>
                <Button buttonName={"Edit"}></Button>
                <Button buttonName={"Delete"}></Button>
              </td>
            </tr>
            <tr>
              <td class="border border-slate-600">Indiana</td>
              <td class="border border-slate-600">Indianapolis</td>
              <td class="border border-slate-600">Weronpoolis</td>
              <td class="border border-slate-600">Indianpolos</td>
              <td class="border border-slate-600">Polosi</td>
              <td class="border border-slate-600">
                <Button buttonName={"Add"}></Button>
                <Button buttonName={"Edit"}></Button>
                <Button buttonName={"Delete"}></Button>
              </td>
            </tr>
            <tr>
              <td class="border border-slate-600">Indiana</td>
              <td class="border border-slate-600">Indianapolis</td>
              <td class="border border-slate-600">Weronpoolis</td>
              <td class="border border-slate-600">Indianpolos</td>
              <td class="border border-slate-600">Polosi</td>
              <td class="border border-slate-600">
                <Button buttonName={"Add"}></Button>
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
