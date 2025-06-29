import { Button } from "@/components/ui/button"
import Header from "./shared/layout/Header/Header"
import Footer from "./shared/layout/Footer/Footer"
import HomePage from "./HomePage/HomePage"
import ListPage from "./ListPage/ListPage"
import DetailsPage from "./DetailsPage/DetailsPage"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="font-inter container mx-auto px-4 2xl:px-20">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App