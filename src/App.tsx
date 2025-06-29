import Header from "./shared/layout/Header/Header"
import Footer from "./shared/layout/Footer/Footer"
import HomePage from "./HomePage/HomePage"
import ListPage from "./ListPage/ListPage"
import DetailsPage from "./DetailsPage/DetailsPage"
import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import type { Cards } from "./shared/reuseComponents/types"

function App() {
  let [dataItems, setDataItems] = useState<Cards[]>([]);
  return (
    <div className="font-inter container mx-auto px-4 2xl:px-20">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage setDataItems={setDataItems} />} />
        <Route path="/details/:id" element={<DetailsPage dataItems={dataItems} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App