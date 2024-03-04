import './App.css'
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/mainPage.tsx";
import Catalog from "./pages/catalog/catalog.tsx";

function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/catalog'} element={<Catalog />} />
      </Routes>
    </>
  )
}

export default App
