
'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function BlogDetail() {
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch("http://bai-tap3/wp-json/wp/v2/blogs_page")
            .then(res => res.json())
            .then(response => {
                setDetails(response.blog);
            })
    }, [])
    return (
        <main>
            <div className="container" style={{ backgroundColor: "#ffffff" }}>
                {details.map((detail, index) => (
                    <div key={index} className="content-sg-post">
                        <h1 className="content-sg-post__title">{detail.title}</h1>
                        {/* <div className="content-sg-post__text"><p>Ut eligendi exercitationem possimus sed et et. Et nihil beatae sunt molestiae ut commodi animi. Dolores repellat et voluptate quis. Quia esse inventore dolores beatae cupiditate. Fugiat consequatur cupiditate recusandae ut. Rerum et aspernatur quasi qui est non nisi. Incidunt nam et dolorem est omnis modi sunt. Ipsum beatae cum blanditiis dolorum. Numquam placeat omnis ab impedit. Id et delectus sed aut voluptas. Maiores sint earum blanditiis possimus. Dolor est aut veniam aut officia dolor. Deserunt nihil officia architecto blanditiis quis officiis facilis. Fuga ex culpa at porro nisi consequatur. Sunt labore labore quos illum.</p>
                            <p>
                                <Image
                                    src="/blog/list-cont-1.jpg"
                                    alt="list-cont-1"
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                />
                            </p>
                            <p>&nbsp;</p>
                            <p>Ut eligendi exercitationem possimus sed et et. Et nihil beatae sunt molestiae ut commodi animi. Dolores repellat et voluptate quis. Quia esse inventore dolores beatae cupiditate. Fugiat consequatur cupiditate recusandae ut. Rerum et aspernatur quasi qui est non nisi. Incidunt nam et dolorem est omnis modi sunt. Ipsum beatae cum blanditiis dolorum. Numquam placeat omnis ab impedit. Id et delectus sed aut voluptas. Maiores sint earum blanditiis possimus. Dolor est aut veniam aut officia dolor. Deserunt nihil officia architecto blanditiis quis officiis facilis. Fuga ex culpa at porro nisi consequatur. Sunt labore labore quos illum.</p>
                            <p>Ut eligendi exercitationem possimus sed et et. Et nihil beatae sunt molestiae ut commodi animi. Dolores repellat et voluptate quis. Quia esse inventore dolores beatae cupiditate. Fugiat consequatur cupiditate recusandae ut. Rerum et aspernatur quasi qui est non nisi. Incidunt nam et dolorem est omnis modi sunt. Ipsum beatae cum blanditiis dolorum. Numquam placeat omnis ab impedit. Id et delectus sed aut voluptas. Maiores sint earum blanditiis possimus. Dolor est aut veniam aut officia dolor. Deserunt nihil officia architecto blanditiis quis officiis facilis. Fuga ex culpa at porro nisi consequatur. Sunt labore labore quos illum.</p>
                            <p>Ut eligendi exercitationem possimus sed et et. Et nihil beatae sunt molestiae ut commodi animi. Dolores repellat et voluptate quis. Quia esse inventore dolores beatae cupiditate. Fugiat consequatur cupiditate recusandae ut. Rerum et aspernatur quasi qui est non nisi. Incidunt nam et dolorem est omnis modi sunt. Ipsum beatae cum blanditiis dolorum. Numquam placeat omnis ab impedit. Id et delectus sed aut voluptas. Maiores sint earum blanditiis possimus. Dolor est aut veniam aut officia dolor. Deserunt nihil officia architecto blanditiis quis officiis facilis. Fuga ex culpa at porro nisi consequatur. Sunt labore labore quos illum.</p>
                        </div> */}
                        <div className="content-sg-post__text">
                            {detail.content}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}