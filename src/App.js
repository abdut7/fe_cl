import { BrowserRouter,Switch,Route } from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout';
import Login from './pages/Login';


function App() {

  // const isLogged = window.localStorage.getItem('is_logged',false)

  return (
    <div>
      <main>
        <BrowserRouter>
          <Switch>
              {/* <Route component={()=> (<h1>404</h1>) }></Route> */}
              <Route exact path="/" component={Login}></Route>
              <DashboardLayout/>
              
          </Switch>
      </BrowserRouter>
    </main>
    </div>
  );
}
export default App;
