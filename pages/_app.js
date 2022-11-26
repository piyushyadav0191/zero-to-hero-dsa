import Navbar from '../components/NavBar'
import '../styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
