import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


const Home = () => {
  return (
    <>
      <h1 className="font-mono text-blue-800 text-9xl">Home</h1>
      <p className="font-mono text-blue-500 text-5xl">This is home page content</p>
    </>
  )
} 

export default function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home/>} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </Router>
  )
}