import Container from "./components/Container/Container";
import Table from "./components/Table/Table";
import { useEffect, useState } from "react";
import Form from "./components/Form/Form.js";
import Button from "./components/Button/Button";

const App = () => {
  const [showForm, setshowForm] = useState(false);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    let result = [
      {
        id: "1",
        name: "joseph sayang",
        username: "joseph",
        tanggal_lahir: "2000-10-10",
        role: "admin",
        email: "mail.joseph_alberto@gmail.com",
      },
    ];
    setUsers(result);
  }, []);

  return (
    <Container>
      <Form props={showForm}></Form>
      <Button
        buttonName={"Add New User"}
        handler={() => setshowForm(!showForm)}
      ></Button>
      <Table data={users} />
    </Container>
  );
};

export default App;
