
import { useState } from 'react'
import style from '../assets/index.css'
import Logo from '../assets/logo-2.png'
import {post } from '../helper/util'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'
function Login(){

    let [mobile, setMobile] = useState("");
    let [password, setPassword] = useState("");
    let history = useHistory();

    let login = async()=>{
        console.log(mobile, password);
        await post('user/login_user',{'strLoginId':mobile,'strPassword':password},{Authorization:""}).then(res=>{
            //console.log(window.location);
            if(res.status === 200){
              localStorage.setItem('user_type',res.data.strUserType);
              localStorage.setItem('user_token',res.data.strToken);
              localStorage.setItem('user_id',res.data.intUserId);
              localStorage.setItem('is_logged',true);
              
              if(res.strUserType === 'ADMIN')
                window.location.href = '/admin/dashboard'
              else
                history.push('/dashboard');
            }
            else{
              swal('Oops something went wrong');
            }
            
        })
      }

    return(
        <div className="index-page">
        <div className={style.wrapper}>
            <div id="formContent">
                <h2 className={style.active}> Sign In </h2>
                <div className={style.first}>
                <img src={Logo} id="logo" alt="User Icon" />
                </div>
                <div>
                    <input type="text"  className={style.second} placeholder="Mobile" onChange={(e)=>(setMobile(e.target.value))} autoComplete="false" />
                    <input type="text"  className={style.third}  placeholder="Password" onChange={(e)=>(setPassword(e.target.value))} autoComplete="false"/>
                    <input type="submit" onClick={login} className={style.fourth} value="Log In" />
                </div>
                <div id="formFooter">
                {/* <a className={style.underlineHover} href="#">Forgot Password?</a> */}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login