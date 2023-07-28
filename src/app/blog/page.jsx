'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
// import Pagination from '@/app/components/Pagination'
// import { paginate } from "../src/helpers/paginate"


export default function Blog() {
    // Blog Page
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("http://bai-tap3/wp-json/wp/v2/blogs_page")
            .then(res => res.json())
            .then(response => {
                setBlogs(response.blog);
            })
    }, [])

    // pagination
    // const [currentPage, setCurrentPage] = useState(1);
    // const pageSize = 10;

    // const onPageChange = (page) => {
    //     setCurrentPage(page);
    // };

    return (
        <main>

            <div className="container">
                <h1 className="contact-title">Blog & News</h1>

                <div className="list-post">
                    {blogs.map((blog, index) => (
                        <div key={index} className="list-post_child">
                            <div className="list-post_child-img">
                                <Link href="">
                                    <Image
                                        src={blog.thumbnail.url}
                                        alt={blog.thumbnail.alt}
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                    />
                                </Link>
                            </div>
                            <h4 className="list-post_child-title"><Link href='/blog/detail'>{blog.title}</Link></h4>
                            <div className="list-post_child-content"><p>{blog.excerpt}</p></div>
                        </div>
                    ))}
                </div>

                <div className="pagination">
                    <ul>
                        <li>
                            <span aria-current="page" className="page-numbers current">1</span>
                            <Link className="page-numbers" href='/'>2</Link>
                            <Link className="page-numbers" href='/'>3</Link>
                            <Link className="next page-numbers" href='/'><i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                        </li>
                    </ul>

                    {/* <Pagination
                        items={data.length} // 100
                        currentPage={currentPage} // 1
                        pageSize={pageSize} // 10
                        onPageChange={onPageChange}
                    /> */}
                </div>
            </div>

        </main>
    )
}