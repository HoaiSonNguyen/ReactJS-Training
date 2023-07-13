
import Image from 'next/image'

export default function About() {
    return (
        <main>
            <div className="container">
                <h1 className="contact-title">About</h1>
                <div className="content-about">
                    <div className="content-about__list">
                        <div className="content-about__list-item content-about__list-item--imgparent" id="point1">
                            <Image
                                className='content-about__list-item--img'
                                src="/about/about2.gif"
                                alt="about2-img"
                                width={0}
                                height={0}
                                sizes='100vw'
                            />
                        </div>
                        <div className="content-about__list-item">
                            <h3 className="content-about__list-item--title">About 1</h3>
                            <p className="content-about__list-item--text">Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.</p>
                        </div>
                    </div>
                    <div className="content-about__list" id="point2">
                        <div className="content-about__list-item">
                            <h3 className="content-about__list-item--title">About 2</h3>
                            <p className="content-about__list-item--text">Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.</p>
                        </div>
                        <div className="content-about__list-item content-about__list-item--imgparent">
                            <Image
                                className='content-about__list-item--img'
                                src="/about/about1.gif"
                                alt="about1-img"
                                width={0}
                                height={0}
                                sizes='100vw'
                            />
                        </div>
                    </div>
                    <div className="content-about__list" id="point3">
                        <div className="content-about__list-item content-about__list-item--imgparent">
                            <Image
                                className='content-about__list-item--img'
                                src="/about/about3.gif"
                                alt="about3-img"
                                width={0}
                                height={0}
                                sizes='100vw'
                            />
                        </div>
                        <div className="content-about__list-item">
                            <h3 className="content-about__list-item--title">About 3</h3>
                            <p className="content-about__list-item--text">Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}