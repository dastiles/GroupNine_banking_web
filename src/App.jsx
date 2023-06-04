import NavBar from "./components/nav/NavBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import SendMoney from "./pages/SendMoney"
import LoanPage from "./pages/loan"
import BankStatement from "./pages/bankStatement"
import ProfilePage from "./pages/profilePage"
import AboutPage from "./pages/aboutPage"
import Footer from "./components/footer/footer"
import Success from "./pages/success"

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/sendmoney' element={<SendMoney />} />
            <Route path='/loan' element={<LoanPage />} />
            <Route path='/bankstatement' element={<BankStatement />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/success' element={<Success />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer limit={1} />
      </Router>

    </>
  )
}

export default App