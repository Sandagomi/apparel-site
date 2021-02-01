import React,{useState,useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shoppage/shoppage.components'
import Header from './components/header/header.components';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components'
import { auth } from './firebase/firebase.utils';


const App = () =>  {
    const [currentUser,setCurrentUser] = useState(null)

    useEffect(()=> {
        auth.onAuthStateChanged((user)=>{
            setCurrentUser(currentUser)
            console.log(user)
        })

    },[])

  return (
    <div className="App">
      <Header/>
      <Switch>
         <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
