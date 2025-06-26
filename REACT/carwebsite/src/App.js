import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Cental/Pages/Home'
import About from './Cental/Pages/About'
import Contact from './Cental/Pages/Contact'
import Blog from './Cental/Pages/Blog'
import Service from './Cental/Pages/Service'
import Features from './Cental/Pages/Features'
import Car from './Cental/Pages/Car'
import Team from './Cental/Pages/Team'
import Testimonial from './Cental/Pages/Testimonial'
import Error from './Cental/Pages/Error'
import Dashboard from './Admin/Adminpages/Dashboard'
import Blogmanager from './Admin/Adminpages/Blogmanager'
import Addblog from './Admin/Adminpages/Addblog'
import Addcar from './Admin/Adminpages/Addcar'
import Addteam from './Admin/Adminpages/Addteam'
// import Adminnavbar from './Admin/Admincommon/Adminnavbar'
// import Adminheader from './Admin/Admincommon/Adminheader'

function App() {
  return (
    <div>

      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/service" element={<Service />} />
            <Route path="/feature" element={<Features />} />
            <Route path="/car" element={<Car />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testi" element={<Testimonial />} />



            <Route path="*" element={<Error />} />


            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Blogmanager" element={<Blogmanager />} />
            <Route path="/Addblog" element={<Addblog />} />
            <Route path="/addcar" element={<Addcar />} />
            <Route path="/addteam" element={<Addteam />} />

          </Routes>
        </div>

      </BrowserRouter>

    </div>
  )
}

export default App
