import './App.css'
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/mainPage.tsx";
import Catalog from "./pages/catalog/catalog.tsx";
import CatalogItem from "./pages/catalog/catalog_item.tsx";

function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
            <Route path={'/catalog'} element={<Catalog />} />
            <Route path={'/catalog/item'} element={<CatalogItem />} />
      </Routes>
    </>
  )
}

export default App
