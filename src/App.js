import SideBar from "./components/sidebar/SideBar";
import styles from './app.module.css'
import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Alumnos from "./components/alumnos/Alumnos";
import Pagos from "./components/pagos/Pagos";
import Clases from "./components/clases/Clases";


function App() {

  return (
      <div className={styles.App}>
        <SideBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alumnos" element={<Alumnos />} />
          <Route path="/clases" element={<Clases />} />
          <Route path="/pagos" element={<Pagos />} />
        </Routes>
      </div>
  );
}

export default App;
