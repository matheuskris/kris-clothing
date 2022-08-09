import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Routes, Route, useNavigate } from "react-router-dom";

import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from "./utils/firebase/firebase.utils";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Auth from "./routes/Authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/Checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.action";
import { selectCurrentUser } from "./store/user/user.selector";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        dispatch(setCurrentUser(user));
        navigate("/home");
      } else {
        dispatch(setCurrentUser(undefined));
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {user ? (
          <>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="*" element={<Home />} />
          </>
        ) : (
          <>
            <Route index element={<Auth />} />
            <Route path="auth" element={<Auth />} />
            <Route path="*" element={<Auth />} />
          </>
        )}
      </Route>
    </Routes>
  );
};

export default App;
