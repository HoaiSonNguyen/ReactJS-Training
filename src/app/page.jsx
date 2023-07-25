'use client'
import Image from "next/image"
import Link from 'next/link'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Content from '@/app/components/Content'

async function getData() {
  let data = null
  const res = await axios.get('http://bai-tap3/wp-json/wp/v2/posts?_embed&order=desc&status=publish').then(response => {
    data = response.data
  });
  return data
}

// const PageName = () => {
//   const [ variableNameTwo, setVariableNameTwo] = useState([]);
//   useEffect(() => {
//           setLoading(true);
//           const fetchBlogData = async () => {
//               const blgData = await fetch(
//                   'https://your-wp-domain-url.com/wp-json/wp/v2/posts?_embed&order=desc&status=publish'
//               );
//               const blgJsnData = await blgData.json();
//               setBlogData(blgJsnData);
//               setLoading(false);
//           };
//           fetchBlogData();
//       }, []);
//       return (
//            <ComponentName variableNameTwo={variableNameTwo} />
//       )
//   }

export default async function Home() {
  // const [show, setShow] = useState(false)
  const datas = await getData()

  return (
    <main>
      <ul>
        {datas.map(data => (
          <li key={data.id}>{data.title.rendered}</li>
        ))}
      </ul>
      {/* <div className="sitebar">
        <div className="sitebar-list">
          <h1 className="sitebar-list__title">Simple design and your
            unique website today</h1>
          <p className="sitebar-list__text">Programmatically work but low hanging fruit so new economy cross-pollination. Quick sync new
            economy onward and upward.</p>
          <div className="sitebar-list__btn-parent">
            <a className="sitebar-list__btn--textone sitebar-list__btn" >Learn more</a>
            <a className="sitebar-list__btn--two sitebar-list__btn--texttwo sitebar-list__btn">Download</a>
          </div>
        </div>
        <figure>
          <Image
            className='sitebar-img pc'
            src="/home/sitebar.png"
            alt="sitebar-img pc"
            width={0}
            height={0}
            sizes='100vw'
          />
        </figure>

        <figure>
          <Image
            className='sitebar-img sp'
            src="/home/sitebar-sp.png"
            alt="sitebar-img sp"
            width={0}
            height={0}
            sizes='100vw'
          />
        </figure>
      </div>

      <div className="container" >
        <div className="content-list">
          <div className="content-list--item">
            <figure>
              <Image
                className="content-list--item__img"
                src="/home/icon1.png"
                alt="icon1"
                width={96}
                height={96}
              />
            </figure>
            <Link href='/about#point1'>
              <h3 className="content-list--item__title">Point 1</h3>
            </Link>
            <p className="content-list--item__text">Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.</p>
            <Link href='/about#point1' className="content-list--item-btn">Learn more</Link>
          </div>

          <div className="content-list--item">
            <figure>
              <Image
                className="content-list--item__img"
                src="/home/icon2.png"
                alt="icon2"
                width={96}
                height={96}
              />
            </figure>
            <Link href='/about#point2'>
              <h3 className="content-list--item__title">Point 2</h3>
            </Link>
            <p className="content-list--item__text">Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.</p>
            <Link href='/about#point2' className="content-list--item-btn">Learn more</Link>
          </div>

          <div className="content-list--item">
            <figure>
              <Image
                className="content-list--item__img"
                src="/home/icon3.png"
                alt="icon3"
                width={96}
                height={96}
              />
            </figure>
            <Link href='/about#point3'>
              <h3 className="content-list--item__title">Point 3</h3>
            </Link>
            <p className="content-list--item__text">Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.</p>
            <Link href='/about#point3' className="content-list--item-btn">Learn more</Link>
          </div>
        </div>

        <div className="content-blog">
          <h2 className="content-blog__title">Blog & News</h2>
        </div>

        <div className="list-post">
          <div className="list-post_child">
            <div className="list-post_child-img">
              <Link href='/blog/detail'>
                <Image
                  src="/blog/list-cont-1.jpg"
                  alt="list-cont-1"
                  width={0}
                  height={0}
                  sizes='100vw'
                />
              </Link>
            </div>
            <h3 className="list-post_child-title"><Link href='/blog/detail'>Saepe cupiditate unde autem aut eum.</Link></h3>
            <div className="list-post_child-content">
              <p>Ut eligendi exercitationem possimus sed et et. Et nihil beatae sunt molestiae ut commodi animi. Dolores repellat et voluptate quis. Quia esse</p>
            </div>
          </div>

          <div className="list-post_child">
            <div className="list-post_child-img">
              <Link href='/blog/detail'>
                <Image
                  src="/blog/list-cont-2.jpg"
                  alt="list-cont-2"
                  width={0}
                  height={0}
                  sizes='100vw'
                />
              </Link>
            </div>
            <h3 className="list-post_child-title"><Link href='/blog/detail'>Et atque quis quisquam ut fugiat quia.</Link></h3>
            <div className="list-post_child-content">
              <p>Rerum consequatur et nobis ut. Sapiente repudiandae voluptatem facere facere aliquam dolores. Nesciunt quia ut eum consequatur odio</p>
            </div>
          </div>
        </div> */}

      {/* <div style={{ padding: 100 }}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <Content />}
      </div> */}

      {/* </div> */}
    </main>
  )
}


