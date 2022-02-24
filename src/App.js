import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout"
import Profile from "./pages/profile"
import Page404 from "./pages/page404"

/**
 * This function contains the logic of the router, with a parent route for the layout
 * and 2 children routes : one for the "profile page" displayed in this project and one for a 404 page.
 * @function App
 */
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="profile/:id" element={<Profile/>}/>
            <Route path="*" element={<Page404/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
