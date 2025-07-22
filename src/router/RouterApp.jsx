import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Dashboard } from "../pages/Dashboard"
import { Login } from "../pages/login"
import { NotFound } from "../pages/NotFound"
const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resgister" element={<Login />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }