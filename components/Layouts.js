import Navbar from './Navbar.js'
import Footer from './Footer'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='top'>{children}</main>
      <Footer />
    </>
  )
}