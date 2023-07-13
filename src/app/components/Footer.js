
import Link from 'next/link'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-logo">
                    <Link href='/'>
                        <Image
                            src="/home/logo.png"
                            alt="Neve Logo"
                            width={0}
                            height={0}
                            priority
                            sizes='100vw'
                        />
                    </Link>
                </div>
                <div className="footer-nav">
                    <ul>
                        <li><Link href='/'>
                            Home
                        </Link></li>
                        <li><Link href='/about'>
                            About
                        </Link></li>
                        <li><a>Company</a></li>
                        <li><a>Product</a></li>
                        <li><Link href='/blog'>
                            Blog
                        </Link></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p className="footer-bottom__text"><i className="fa fa-copyright" aria-hidden="true"></i> Coppyright by Son</p>
                </div>
            </div>
        </div>
    )
}

export default Footer