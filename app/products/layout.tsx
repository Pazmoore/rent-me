import type { Metadata } from "next"
import ShowAuth from "../components/auth/isAuth/showAuth"
import RouteAuth from "../components/auth/isAuth/RouteAuth"
import Header from "../components/productsDashboard/navBars/header/Header"
import Footer from "../components/productsDashboard/navBars/footer/Footer"
import ScrollToTop from "../components/utilities/scroll-to-top/ScrollToTop"
import Sidebar from "../components/productsDashboard/navBars/sidebar/Sidebar"
import ShowProperties from "../components/utilities/viewProperties/showProperties"
import MiniSidebar from "../components/productsDashboard/navBars/miniSidebar/MiniSidebar"
import "./products.scss"

export const metadata: Metadata = {
  title: "Lamburghinie | Products",
  description: "Accommodations | Workspace | Ride Sharing | Property Investment"
}

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section className="products-body">
      <div className="section">
        <MiniSidebar/>
        <Sidebar/>
      </div>
      <main className="products-page">
        <Header/>
        <RouteAuth>
          {children}
        </RouteAuth>
        <ShowAuth/>
        <ShowProperties/>
        <Footer/>
        <ScrollToTop/>
      </main>
    </section>
  )
}

export default Layout