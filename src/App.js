import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout"
import Profile from "./pages/profile"

/**
 * This function contains the logic of the router, with a parent route for the layout
 * and a child route for the "profile page" displayed in this project.
 * @function App
 */
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path=":id" element={<Profile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
