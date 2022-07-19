import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import SignIn from './routes/SignIn/SignIn-component'

const Shop = () => (
  <h1>I am the shop component</h1>
)

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='Shop' element={<Shop/>}/>
        <Route path='Sign-in' element={<SignIn/>}/>
      </Route>
    </Routes>
  )
}

export default App