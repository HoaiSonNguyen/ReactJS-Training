
'use client'
import { useEffect, useState } from 'react';

export default function BlogDetail({ params }) {
    const [details, setDetails] = useState([])
    useEffect(() => {
        let slug = params.slug || "";
        fetch(`http://bai-tap3/wp-json/wp/v2/blog/${slug}`)
            .then(res => res.json())
            .then(response => {
                setDetails(response);
            })
    }, [])
    return (
        <main>
            <div className="container">
                <div className="content-sg-post">
                    <h1 className="content-sg-post__title">{details.title}</h1>
                    <div className="content-sg-post__text" dangerouslySetInnerHTML={{ __html: details.content }}></div>
                </div>
            </div>
        </main>
    )
}