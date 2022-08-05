import { useEffect } from "react";
import { useDispatch } from 'react-redux'

import { Routes, Route } from 'react-router-dom'

import { createUserDocumentFromAuth, onAuthStateChangeListener } from "../src/utils/firebase/firebase.utils";
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Auth from './routes/Authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/Checkout/checkout.component'
import { setCurrentUser } from './store/user/user.action'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() =>{
    const unsubscribe = onAuthStateChangeListener((user) => {
        if(user){
            createUserDocumentFromAuth(user)
        }
        dispatch(setCurrentUser(user))
        console.log(setCurrentUser(user))
    })
    return unsubscribe
  },[dispatch])

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='auth' element={<Auth/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App