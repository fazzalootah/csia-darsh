import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import QuestionBank from "./components/questionBank";
import Quiz from "./components/quiz";
import Resources from "./components/resources";
import AccountPref from "./components/accountpreferences";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
                <Route path="/questionbank" element={<ProtectedRoute><QuestionBank/></ProtectedRoute>}/>
                <Route path="/quiz" element={<ProtectedRoute><Quiz/></ProtectedRoute>}/>
                <Route path="/resources" element={<ProtectedRoute><Resources/></ProtectedRoute>}/>
                <Route path="/accountpref" element={<ProtectedRoute><AccountPref/></ProtectedRoute>}/>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;