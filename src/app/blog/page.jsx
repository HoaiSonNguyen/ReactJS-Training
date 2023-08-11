'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'
import Pagin from '@/app/components/Pagin'
// import Loading from '@/app/loading'
// import { Suspense } from "react";

export default function Blog() {
    // Blog Page
    const [blogs, setBlogs] = useState([])
    // Title page
    const [titles, setTitles] = useState('')
    //Get query tu url
    const searchParams = useSearchParams()
    const [totals, setTotals] = useState(0)

    const [pages, setPages] = useState(searchParams.get('page') || 1)
    const [limits, setLimits] = useState(searchParams.get('limit') || 4)

    //Pagination
    const router = useRouter()
    const handleLoadPage = (page, limit) => {
        setPages(page)
        setLimits(limit)
        router.push(`/blog?page=${page}&limit=${limit}`)
    }

    useEffect(() => {
        fetch(`http://bai-tap3/wp-json/wp/v2/blog/pagination?page=${pages}&limit=${limits}`)
            .then(res => res.json())
            .then(response => {
                setBlogs(response.data);
                setTotals(response.total)
                setTitles(response.title_page)
            })
    }, [pages, limits])

    return (
        <main>
            <div className="container">
                <h1 className="contact-title">{titles}</h1>
                <div className="list-post">
                    {blogs.map((blog, index) => (
                        <div key={index} className="list-post_child">
                            <div className="list-post_child-img">
                                <Link href={`/blog/${blog.slug}`}>
                                    <Image
                                        src={blog.thumbnail}
                                        alt={blog.title}
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                    />
                                </Link>
                            </div>
                            <h4 className="list-post_child-title"><Link href={blog.link}>{blog.title}</Link></h4>
                            <div className="list-post_child-content"><p>{blog.excerpt}</p></div>
                        </div>
                    ))}
                </div>

                <Pagin totalRows={totals} limit={limits} currentPage={parseInt(pages)} handleLoadPage={handleLoadPage} />
            </div>
        </main>
    )
}