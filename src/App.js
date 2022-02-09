import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout"
import Profile from "./pages/profile"
//import GraphTest from "./components/GraphTest"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path=":id" element={<Profile/>}/>
            {/*<Route path="*" element={<Page404/>}/>*/}
          </Route>
        </Routes>
      </BrowserRouter>
      {/*<GraphTest/>*/}
    </div>
  );
}

export default App
