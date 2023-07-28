

import Image from 'next/image'
import axios from 'axios';
import Link from 'next/link'

async function getDataContent() {
    const res = await axios.get('http://bai-tap3/wp-json/wp/v2/blogs_new')
    return res.data.blog
}

export default async function BlogNews() {
    const blogs = await getDataContent()

    return (
        <main>
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
                        <h3 className="list-post_child-title"><Link href="">{blog.title}</Link></h3>
                        <div className="list-post_child-content">
                            <p>{blog.excerpt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}