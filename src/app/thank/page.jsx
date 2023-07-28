'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link'


export default function Thank() {
    // Blog Page
    const [thanks, setThanks] = useState({})

    useEffect(() => {
        fetch("http://bai-tap3/wp-json/wp/v2/thank")
            .then(res => res.json())
            .then(response => {
                setThanks(response);
            })
    }, [])
    return (
        <main>
            <div className="container">
                <div className="container-tks">
                    <h1 className="contact-title">{thanks.title}</h1>
                    <p className='contact-text'>{thanks.contact_text}</p>
                    <div className="btn">
                        <Link href='/' className="contact-btn">{thanks.contact_btntext}</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}