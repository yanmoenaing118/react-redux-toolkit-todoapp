import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import AppBar from "./components/AppBar";
import Container from "./components/Container/Container";
import TodosList from "./components/TodosList/TodosList";
function App() {
  return (
    <div className="App">
      <AppBar />

      <Container>
        <AddTodoForm />
      </Container>

      <TodosList />
    </div>
  );
}

export default App;
