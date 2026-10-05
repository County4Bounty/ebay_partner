import "./globals.css"
import UserProvider from './context/user'
import CartProvider from './context/cart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'eBay - Buy, Sell & Discover Electronics, Fashion & Collectibles',
  description: 'Shop top brand deals, electronics, fashion, home essentials, and rare collectibles with secure checkout and buyer protection.',
}
 
export default function RootLayout({ children }) {

 return (
    <html lang="en">
      <body>
        <div>
          <ToastContainer />

          <UserProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </UserProvider>
        </div>
      </body>
    </html>
  )
}
