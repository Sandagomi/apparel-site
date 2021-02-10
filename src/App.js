import React,{useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import {Switch,Route} from 'react-router-dom';
import {connect} from 'react-redux'
import {setCurrentUser} from "./redux/user/user.action";
import ShopPage from './pages/shoppage/shoppage.components'
import Header from './components/header/header.components';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components'
import { auth,createUserProfileDocument } from './firebase/firebase.utils';



const App = ({setCurrentUser}) =>  {

    useEffect(()=> {

    const unSubscribeFromAuth  =  auth.onAuthStateChanged(async userAuth =>{

           if(userAuth) {
               const userRef = await createUserProfileDocument(userAuth);

               userRef.onSnapshot(snapshot => {
                   setCurrentUser({id:snapshot.id,...snapshot.data()})
               })
           }else{
                setCurrentUser(userAuth);
           }

        return () => unSubscribeFromAuth();

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

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
