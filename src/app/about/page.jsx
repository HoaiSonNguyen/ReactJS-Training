
import Image from 'next/image'
import axios from 'axios';

async function getData() {
    const res = await axios.get('http://bai-tap3/wp-json/wp/v2/about')
    return res.data
}

export default async function About() {
    const abouts = await getData()

    return (
        <main>
            <div className="container">
                <h1 className="contact-title">{abouts.title}</h1>
                <div className="content-about">
                    <div className="content-about__list">
                        <div className="content-about__list-item content-about__list-item--imgparent" id="point1">
                            {(abouts?.image1?.url) &&
                                <Image
                                    className="content-list--item__img"
                                    src={abouts?.image1?.url}
                                    alt={abouts?.image1?.alt}
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                />
                            }
                        </div>
                        <div className="content-about__list-item">
                            <h3 className="content-about__list-item--title">{abouts.title1}</h3>
                            <p className="content-about__list-item--text">{abouts.text1}</p>
                        </div>
                    </div>
                    <div className="content-about__list" id="point2">
                        <div className="content-about__list-item">
                            <h3 className="content-about__list-item--title">{abouts.title2}</h3>
                            <p className="content-about__list-item--text">{abouts.text2}</p>
                        </div>
                        <div className="content-about__list-item content-about__list-item--imgparent">
                            {(abouts?.image2?.url) &&
                                <Image
                                    className="content-about__list-item--img"
                                    src={abouts?.image2?.url}
                                    alt={abouts?.image2?.alt}
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                />
                            }
                        </div>
                    </div>
                    <div className="content-about__list" id="point3">
                        <div className="content-about__list-item content-about__list-item--imgparent">
                            {(abouts?.image3?.url) &&
                                <Image
                                    className="content-about__list-item--img"
                                    src={abouts?.image3?.url}
                                    alt={abouts?.image3?.alt}
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                />
                            }
                        </div>
                        <div className="content-about__list-item">
                            <h3 className="content-about__list-item--title">{abouts.title3}</h3>
                            <p className="content-about__list-item--text">{abouts.text3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}