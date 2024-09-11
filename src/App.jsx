// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Homepage from './pages/HomePage'
import Profile from './pages/Profile'
import PostHomePage from './pages/PostHomePage';
import PostDetailPage from './pages/PostDetailPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'

import AuthLayout from './components/Layout/AuthLayout'

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path={'/'} element={<Homepage />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/posts'} element={<PostHomePage />} />
        <Route path={'/post/:postSlug'} element={<PostDetailPage />} />
        <Route path={'/auth'} element={<AuthLayout />} >
          <Route path={'/auth/signin'} element={<SignInPage />} />
          <Route path={'/auth/signup'} element={<SignUpPage />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
