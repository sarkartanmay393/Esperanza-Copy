import "./App.css";
import Header from "./components/Header";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Contact from "./screens/Contact/Contact";
import Events from "./screens/Events/Events"
import { Route, Routes } from "react-router-dom";
import NotFound from "./screens/Error/NotFound";

function App() {
  return (
    <>
      <div className="bg-black w-screen h-screen">
        <Routes>
          <Route path="/" element={<Header/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="events" element={<Events/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
