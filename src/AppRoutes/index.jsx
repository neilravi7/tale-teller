import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { AuthLayout, AppLayout } from "../components/Layout";
import { 
    HomePage, 
    PostDetailPage, 
    PostHomePage, 
    Profile,
    ProfilePage, 
    SignInPage, 
    SignUpPage,
    NotFound, 
} from "../pages";
import PostPage from '../pages/PostPage';


function AppRoutes(props) {
    return (
        <>
      <Router>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path={'/'} element={<HomePage />} />              
            <Route path="/home" element={<Navigate to="/"/> } />
            <Route path={'/profile'} element={<ProfilePage />} />
            <Route path={'/posts'} element={<PostHomePage />} />
            <Route path={'/post/:postSlug'} element={<PostDetailPage />} />
            <Route path='*' element={<NotFound />}/>
          </Route>          
          <Route path={'/auth'} element={<AuthLayout />} >
            <Route path={'/auth/login'} element={<SignInPage />} />
            <Route path={'/auth/register'} element={<SignUpPage />} />
          </Route>
          <Route path={'/post'} element={<AuthLayout />} >
            <Route path={'/post/create'} element={<PostPage/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
    );
}

export default AppRoutes;

