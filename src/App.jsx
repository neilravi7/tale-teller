// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Homepage from './pages/HomePage'
import Profile from './pages/Profile'
import PostHomePage from './pages/PostHomePage';
import PostDetailPage from './pages/PostDetailPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'

import { Navigate } from 'react-router-dom'

import AuthLayout from './components/Layout/AuthLayout'
import AppLayout from './components/Layout/AppLayout'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path={'/'} element={<Homepage />} />              
            <Route path="/home" element={<Navigate to="/"/> } />
            <Route path={'/profile'} element={<Profile />} />
            <Route path={'/posts'} element={<PostHomePage />} />
            <Route path={'/post/:postSlug'} element={<PostDetailPage />} />
          </Route>          
          <Route path={'/auth'} element={<AuthLayout />} >
            <Route path={'/auth/login'} element={<SignInPage />} />
            <Route path={'/auth/register'} element={<SignUpPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
