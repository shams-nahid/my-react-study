import "./App.css";
import { UsingHook } from "./UsingHook";
import { WithoutHook } from "./WithoutHook";

function App() {
  return (
    <div className="App">
      <WithoutHook />
      <UsingHook />
    </div>
  );
}

export default App;
