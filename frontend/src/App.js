import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import Profile from "./components/pages/Profile";
import MyPosts from "./components/pages/MyPosts";
import NewPosts from "./components/pages/NewPosts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/my-posts" element={<MyPosts />}></Route>
          <Route path="/new-posts" element={<NewPosts />}></Route>
          {/* <Route path="/products" element={<Products />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/examples" element={<Examples />}></Route>
          <Route path="/custom-hook" element={<CustomHook />}></Route> */}
          {/* <Route
            path="/product-details/:id"
            element={<ProductDetails />}
          ></Route> */}
        </Routes>
      </BrowserRouter>
      {/* <SignIn />
      <SignUp /> */}
    </>
  );
}

export default App;
