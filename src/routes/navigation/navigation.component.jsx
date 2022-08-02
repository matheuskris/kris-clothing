import { Outlet } from "react-router-dom"
import { Fragment, useContext } from "react"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"

import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

import { signOutUser } from '../../utils/firebase/firebase.utils'

import { UserContext } from "../../contexts/user.context"
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles.jsx'


const Navigation = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <Fragment>
      <NavigationContainer>
          <LogoContainer to='/'>
              <CrwnLogo className='Logo'></CrwnLogo>
          </LogoContainer>
          <NavLinks>
              <NavLink className="nav-link" to='/shop'>SHOP</NavLink>
              {currentUser ? (
                <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
              ) : (
                <NavLink className="nav-link" to='/auth'>SIGN IN</NavLink>
              )}
              <CartIcon/>
          </NavLinks>
          <CartDropdown></CartDropdown>
      </NavigationContainer>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation