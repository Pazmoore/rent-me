import Link from 'next/link'
import Image from 'next/image'
import { footerLinks, socialIcons } from './footerData'
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="stores">
        <Image src='/images/header/logo.png' alt="logo" width={50} height={50} className="logo img-color"/>
        <span>&#169;{new Date().getFullYear()} Lamburghinie, Inc.</span>
        <div className="content">
          <div className="socials">
            {
              socialIcons.map((icon, i) => (
                <Link key={i} href={icon.link} target='_blank'>
                <Image src={icon.image} alt="social" width={50} height={50} className={`${icon.style} img img-color`}/>
              </Link>
              ))
            }
          </div>
          <div className="links">
            {
              footerLinks.map((link, i) => (
                <Link key={i} href={link.link}>{link.content}</Link>
              ))
            }
          </div>
        </div>
        <div className="store">
          <button>
            <Image src="/images/footer/goggle.png" alt="img" width={50} height={50} className="img1"/>
            <div className="text">
              <span className="get">Get it on</span>
              <span className="download">Goggle Play</span>
            </div>
          </button>
          <button>
            <Image src='/images/footer/apple.png' alt="img" width={50} height={50} className="img1 img-color"/>
            <div className="text">
              <span className="get">Download on the</span>
              <span className="download">App Store</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer