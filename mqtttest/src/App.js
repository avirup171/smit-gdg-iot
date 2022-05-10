import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./components/navigation";
import Message from "./components/message";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
