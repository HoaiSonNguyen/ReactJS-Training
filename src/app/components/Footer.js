'use client'
import Link from 'next/link'
import Image from 'next/image';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { useEffect, useState } from 'react';

const Footer = () => {
    //Footer
    const [footers, setfooters] = useState({})
    useEffect(() => {
        fetch("http://bai-tap3/wp-json/wp/v2/footer")
            .then(res => res.json())
            .then(response => {
                setfooters(response);
            })
    }, [])
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-logo">
                    <Link href='/'>
                        {footers.src_logo &&
                            <Image
                                src={footers.src_logo}
                                alt="Neve Logo"
                                width={0}
                                height={0}
                                priority
                                sizes='100vw'
                            />
                        }
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
                    <p className="footer-bottom__text"><AiOutlineCopyrightCircle /> {footers.footer_text}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer