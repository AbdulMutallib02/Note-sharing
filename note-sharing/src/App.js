import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { Container } from "react-bootstrap";
import Profile from "./components/Profile";

function App() {
  return (
    <>
    <Navbar/>
      <Container>
        {/* <Login/> */}
        
        <Registration />
      {/* <Profile/> */}
      </Container>
    </>
  );
}

export default App;
