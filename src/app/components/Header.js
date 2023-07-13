'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Header = () => {

    const [showMenuSP, setShowMenuSP] = useState(false)

    const handleMenuSP = () => {
        setShowMenuSP(!showMenuSP)
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header-logo">
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

                <div className={`header-nav ${showMenuSP ? 'show_memu' : ''}`} >
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
                    <div className='header-btn'>
                        <Link href='/contact' className='header-btn--contact'>
                            Contact
                        </Link>
                    </div>
                </div>

                <div className={`menubar-sp ${showMenuSP ? 'show_memu' : ''}`} onClick={handleMenuSP}>
                    {
                        showMenuSP ? (
                            <i class="fa fa-close" />
                        )
                            : (
                                <i className="fa fa-bars" />
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Header