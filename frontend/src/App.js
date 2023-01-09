import Background from "./components/Background/Background";
import Container from "./components/Container/Container";
import Table from "./components/Table/Table";

const App = () => {
  return (
    <Background>
      <Container>
        <Table></Table>
      </Container>
    </Background>
  );
};

export default App;
