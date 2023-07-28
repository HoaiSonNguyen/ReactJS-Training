

import Image from 'next/image'
import axios from 'axios';
import Link from 'next/link'

async function getDataContent() {
    const res = await axios.get('http://bai-tap3/wp-json/wp/v2/content')
    return res.data
}

export default async function Content() {
    const contents = await getDataContent()

    return (
        <main>
            <div className="content-list">
                <div className="content-list--item">
                    <figure>
                        {(contents?.item1_img?.url) &&
                            <Image
                                className="content-list--item__img"
                                src={contents?.item1_img?.url}
                                alt={contents?.item1_img?.alt}
                                width={96}
                                height={96}
                            />
                        }
                    </figure>
                    <Link href='/about#point1'>
                        <h3 className="content-list--item__title">{contents.item1_title}</h3>
                    </Link>
                    <p className="content-list--item__text">{contents.item1_text}</p>
                    <Link href='/about#point1' className="content-list--item-btn">{contents.item1_btn_text}</Link>
                </div>

                <div className="content-list--item">
                    <figure>
                        {(contents?.item2_img?.url) &&
                            <Image
                                className="content-list--item__img"
                                src={contents?.item2_img?.url}
                                alt={contents?.item2_img?.alt}
                                width={96}
                                height={96}
                            />
                        }
                    </figure>
                    <Link href='/about#point2'>
                        <h3 className="content-list--item__title">{contents.item2_title}</h3>
                    </Link>
                    <p className="content-list--item__text">{contents.item2_text}</p>
                    <Link href='/about#point2' className="content-list--item-btn">{contents.item2_btn_text}</Link>
                </div>

                <div className="content-list--item">
                    <figure>
                        {(contents?.item3_img?.url) &&
                            <Image
                                className="content-list--item__img"
                                src={contents?.item3_img?.url}
                                alt={contents?.item3_img?.alt}
                                width={96}
                                height={96}
                            />
                        }
                    </figure>
                    <Link href='/about#point3'>
                        <h3 className="content-list--item__title">{contents.item3_title}</h3>
                    </Link>
                    <p className="content-list--item__text">{contents.item3_text}</p>
                    <Link href='/about#point3' className="content-list--item-btn">{contents.item3_btn_text}</Link>
                </div>
            </div>

            <div className="content-blog">
                <h2 className="content-blog__title">{contents.title_blog_content}</h2>
            </div>
        </main>
    )
}