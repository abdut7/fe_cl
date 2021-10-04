import SideMenu from '../component/SideMenu';
import Header from '../component/Header';
import Logo from '../assets/logo.png';
import Dashboard from '../pages/Dashboard';
import Demo from '../pages/Demo';
import News from '../pages/News';
import Courses from '../pages/Courses';
import CourseDetails from '../pages/CourseDetails';
import Quiz from '../pages/Quiz'
import Referrals from '../pages/Referrals';
import ProtectedRoute from "./ProtectedRoute";
import {Switch} from 'react-router-dom'
function DashboardLayout(){
    return(
        <div className="container">
            <div className="container-col1">
                <div className="logoholder">
                <img src={Logo} style={{width:'144px'}} alt="" />
                </div>
                <SideMenu/>
            </div>
            <div className="container-col2">
                <Header/>
                <div className="content">
                    <Switch>
                        <ProtectedRoute exact path="/dashboard" component={Dashboard}></ProtectedRoute>
                        <ProtectedRoute exact path="/news" component={News}></ProtectedRoute>
                        <ProtectedRoute exact path="/courses" component={Courses}></ProtectedRoute>
                        <ProtectedRoute exact path="/course/:id" component={CourseDetails}></ProtectedRoute>
                        <ProtectedRoute exact path="/quiz/:course_id/:level_id" component={Quiz}></ProtectedRoute>
                        <ProtectedRoute exact path="/referrals" component={Referrals}></ProtectedRoute>
                        <ProtectedRoute exact path="/demo" component={Demo}></ProtectedRoute>
                        <ProtectedRoute exact path="*" component={()=> (<h1>404</h1>) }></ProtectedRoute>
                    </Switch>
                </div>
            </div>
            </div>
    )
}

export default DashboardLayout;



