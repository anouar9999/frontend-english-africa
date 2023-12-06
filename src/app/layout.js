import './globals.css'
import { Poppins } from 'next/font/google'
import NavBar from './layout/NavBar'
import Footer from './layout/Footer'
import Menu from './layout/Menu'
import Provider from './layout/Provider'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700' ,'800','900'], 

})

export const metadata = {
  title: 'English for Africa | CELTA | Morocco',
  description: 'Teacher training with English for Africa in Morocco and Africa: CELTA, TKT, Celt-P, Celt-S, train-the-trainer, Clil, bespoke courses and more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
        <body className={poppins.className}>
        <Provider>
          <Menu />
          {/* <NavBar /> */}
          {children}
          <Footer />
        </Provider>
        </body>
    </html>
  )
}
