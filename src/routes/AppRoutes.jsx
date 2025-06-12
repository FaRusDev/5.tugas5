import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import AddVideo from "../pages/AddVideo"
import EditVideo from "../pages/EditVIdeo"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/addVideo" element={<AddVideo />} />
      <Route path="/editVideo/:id" element={<EditVideo />} />
    </Routes>
  )
}
