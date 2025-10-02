import { BrowserRouter, Routes, Route} from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import {Home} from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
