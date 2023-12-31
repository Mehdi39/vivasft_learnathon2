import { Inter } from 'next/font/google'
import './globals.css'

// internal import 
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const header = {
  logoStyle: "border border-2 border-gray-500 hover:underline py-1 px-3 text-gray-700",
  menus: [
    {
      key: 1,
      nav: "Home",
      style: "border hover:underline py-1 px-3 text-gray-700",
      url: "/"
    },
    {
      key: 1,
      nav: "Login",
      style: "border hover:underline py-1 px-3 text-gray-700",
      url: "/login"
    },
    {
      key: 1,
      nav: "Dashboard",
      style: "border hover:underline py-1 px-3 text-gray-700",
      url: "/dashboard"
    },
  ],
  avatarStyle: ""
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Header logoStyle={header.logoStyle} menus={header.menus} avatarStyle={header.avatarStyle}/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
