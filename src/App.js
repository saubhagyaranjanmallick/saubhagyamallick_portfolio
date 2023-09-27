import "./App.css";
import { Route, Routes } from "react-router-dom";
import Splash from "./Pages/Splash/Splash";
import Home from "./Pages/Home/Home";
import Whatsapp from "./Components/WhatsappIcon/Whatsapp";
import { Education } from "./Components/Educations/Education";
import  ExperienceCards  from "./Components/ExperienceCards/ExperienceCards";
import ContanctForm from "./Components/ContactForm/ContanctForm";
import Blog from "./Pages/Blog/Blog";


function App() {
  return (
    <div>
      <Whatsapp />
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="home" element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<ExperienceCards />} />
          <Route path="contact" element={<ContanctForm />} />
          <Route path="blog" element={<Blog />} />

        </Routes>
      </header>
    </div>
  );
}

export default App;
