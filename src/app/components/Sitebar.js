

import Image from 'next/image'
import axios from 'axios';

async function getDataSitebar() {
    const res = await axios.get('http://bai-tap3/wp-json/wp/v2/sitebar')
    return res.data
}

export default async function Sitebar() {
    const sitebars = await getDataSitebar()

    return (
        <main>

            <div className="sitebar-list">
                <h1 className="sitebar-list__title">{sitebars.title}</h1>
                <p className="sitebar-list__text">{sitebars.description}</p>
                <div className="sitebar-list__btn-parent">
                    <a className="sitebar-list__btn--textone sitebar-list__btn" >{sitebars.text_btn1}</a>
                    <a className="sitebar-list__btn--two sitebar-list__btn--texttwo sitebar-list__btn">{sitebars.text_btn2}</a>
                </div>
            </div>

            <figure>
                {(sitebars?.image?.url) &&
                    <Image
                        className='sitebar-img pc'
                        src={sitebars?.image?.url}
                        alt={sitebars.image.alt}
                        width={0}
                        height={0}
                        sizes='100vw'
                    />
                }
            </figure>

            <figure>
                {(sitebars?.image?.url) &&
                    <Image
                        className='sitebar-img sp'
                        src={sitebars?.image?.url}
                        alt={sitebars.image.alt}
                        width={0}
                        height={0}
                        sizes='100vw'
                    />
                }
            </figure>

        </main>
    )
}