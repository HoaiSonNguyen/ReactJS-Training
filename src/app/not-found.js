'use client'
import Link from "next/link";
import axios from 'axios';

async function getDataError() {
    const res = await axios.get('http://bai-tap3/wp-json/wp/v2/error')
    return res.data
}

export default async function NotFound() {
    // Error Page
    const errors = await getDataError()

    return (
        <>
            <div className="container">
                <div className="content-404">
                    <h1 className="content-404__title">{errors.title}</h1>
                    <p className="content-404__text">{errors.text}</p>
                    <Link className="content-404__btn" href='/'>{errors.btntext}</Link>
                </div>
            </div>
        </>
    );
}