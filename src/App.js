import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [username, setUsername] = useState("");
  console.log(username);
  return (
    <div className="App">
      <form>
        <FormInput placeholder="username" setUsername={setUsername} />
        <FormInput placeholder="email" />
        <FormInput placeholder="fullname" />
        <FormInput placeholder="" />
        <FormInput placeholder="" />
      </form>
    </div>
  );
}

export default App;
