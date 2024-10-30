import "./App.css";
import { Message } from "./Message";
import { Todos } from "./Todos";

function App() {
  return (
    <div>
      <h1>Salut</h1>
      <Message author="Frank">Hello TypeScript</Message>
      <Message author="Julien" variant="LEFT">
        <span style={{ color: "red" }}>Hello JavaScript</span>
      </Message>
      <Todos />
    </div>
  );
}

export default App;
