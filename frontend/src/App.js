import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
<Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
