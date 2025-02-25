import { Routes,Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import IndexPage from "./pages/indexPage";
import RegisterPage from "./pages/RegisterPage";
function App() {
  return (
    
     
      <Routes>
       <Route path="/" element={<Layout/>} >
       <Route index element={<IndexPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
       
      
       </Route>
         
      </Routes>
     
   

  );
}

export default App;
