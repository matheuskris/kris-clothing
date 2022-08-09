import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectToggle } from "../../store/cart-products/cart-products.selector";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles.jsx";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const toggle = useSelector(selectToggle);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="Logo"></CrwnLogo>
        </LogoContainer>
        <NavLinks>
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink to="/" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {toggle ? <CartDropdown></CartDropdown> : ""}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
