'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
    //Nav
    const [showMenuSP, setShowMenuSP] = useState(false)
    const handleMenuSP = () => {
        setShowMenuSP(!showMenuSP)
    }

    //Logo
    const [headers, setHeaders] = useState({})
    useEffect(() => {
        fetch("http://bai-tap3/wp-json/wp/v2/header")
            .then(res => res.json())
            .then(response => {
                setHeaders(response);
            })
    }, [])

    return (
        <div className="header">
            <div className="container">
                <div className="header-logo">
                    <Link href='/'>
                        {headers.src_logo &&
                            <Image
                                src={headers.src_logo}
                                alt="Neve Logo"
                                width={0}
                                height={0}
                                priority
                                sizes='100vw'
                            />
                        }
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
                        {headers.btn_contact_link &&
                            <Link href={headers.btn_contact_link} className='header-btn--contact'>
                                {headers.btn_contact_text}
                            </Link>
                        }
                    </div>
                </div>

                <div className={`menubar-sp ${showMenuSP ? 'show_memu' : ''}`} onClick={handleMenuSP}>
                    {
                        showMenuSP ? (
                            // <i className="fa fa-close" />
                            <AiOutlineClose />
                        )
                            : (
                                // <i className="fa fa-bars" />
                                <AiOutlineMenu />
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Header