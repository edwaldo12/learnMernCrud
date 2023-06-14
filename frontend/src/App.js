import Container from "./components/Container/Container";
import Table from "./components/Table/Table";
import { useEffect, useState } from "react";
import Form from "./components/Form/Form.js";
import FormEdit from "./components/EditForm/FormEdit.js";
import Button from "./components/Button/Button";
import { getUsers } from './api/getUsers/index';

const App = () => {
  const [showForm, setshowForm] = useState(false);
  const [showFormEdit, setshowFormEdit] = useState(false);
  const [users, setUsers] = useState([]);
  const [saveId, setSaveId] = useState(0);

  useEffect(() => {
    getUsers().then(users => {
      setUsers(users);
    });
  }, [showForm, showFormEdit]);

  return (
    <Container>
      <Form showForm={showForm} setshowForm={setshowForm}></Form>
      <FormEdit showFormEdit={showFormEdit} setshowFormEdit={setshowFormEdit} saveId={saveId} ></FormEdit>
      <Button
        buttonName={"Add New User"}
        handler={() => setshowForm(!showForm)}
      ></Button>
      <Table
        users={users}
        setUsers={setUsers}
        showFormEdit={showFormEdit}
        setshowFormEdit={setshowFormEdit}
        saveId={saveId}
        setSaveId={setSaveId} />
    </Container>
  );
};

export default App;
