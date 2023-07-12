'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {
  const [showMenuSP, setShowMenuSP] = useState(false)


  // useEffect(() => {
  // }, [])
  const handleMenuSP = () => {
    setShowMenuSP(!showMenuSP)
  }
  return (
    <main>
      <div className="header">
        <div className="container">
          <div className="header-logo">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/home/logo.png"
                alt="Neve Logo"
                width={0}
                height={0}
                priority
                sizes='100vw'
              />
            </a>
          </div>

          <div className={`header-nav ${showMenuSP ? 'show_memu' : ''}`} >
            <ul>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Company</a></li>
              <li><a>Product</a></li>
              <li><a>Blog</a></li>
            </ul>
            <div className='header-btn'>
              <a className='header-btn--contact'>Contact</a>
            </div>
          </div>

          <div className={`menubar-sp ${showMenuSP ? 'show_memu' : ''}`} onClick={handleMenuSP}>
            {
              showMenuSP ? (
                <i class="fa fa-close" />
              )
                : (
                  <i className="fa fa-bars" />
                )
            }
            {/* <i className="fa fa-bars" aria-hidden="true"></i> */}
          </div>
        </div>
      </div>

      <div className="sitebar">
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
                alt="Neve Logo"
                width={96}
                height={96}
              />
            </figure>
            <a href=""><h3 className="content-list--item__title">Point 1</h3></a>
            <p className="content-list--item__text">Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.</p>
            <a href="/about#point1" className="content-list--item-btn" >Learn more</a>
          </div>

          <div className="content-list--item">
            <figure>
              <Image
                className="content-list--item__img"
                src="/home/icon2.png"
                alt="Neve Logo"
                width={96}
                height={96}
              />
            </figure>
            <a href=""><h3 className="content-list--item__title">Point 1</h3></a>
            <p className="content-list--item__text">Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.</p>
            <a href="/about#point1" className="content-list--item-btn" >Learn more</a>
          </div>

          <div className="content-list--item">
            <figure>
              <Image
                className="content-list--item__img"
                src="/home/icon3.png"
                alt="Neve Logo"
                width={96}
                height={96}
              />
            </figure>
            <a href=""><h3 className="content-list--item__title">Point 1</h3></a>
            <p className="content-list--item__text">Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.</p>
            <a href="/about#point1" className="content-list--item-btn" >Learn more</a>
          </div>
        </div>

        <div className="content-blog">
          <h2 className="content-blog__title">Blog & News</h2>
        </div>

        <div className="list-post">
          <div className="list-post_child">
            <div className="list-post_child-img">
              <figure>
                <Image
                  src="/home/list-cont-1.jpg"
                  alt="Neve Logo"
                  width={400}
                  height={400}
                />
              </figure>
            </div>
            <h3 className="list-post_child-title"><a href="">Saepe cupiditate unde autem aut eum.</a></h3>
            <div className="list-post_child-content">
              <p>Ut eligendi exercitationem possimus sed et et. Et nihil beatae sunt molestiae ut commodi animi. Dolores repellat et voluptate quis. Quia esse</p>
            </div>
          </div>

          <div className="list-post_child">
            <div className="list-post_child-img">
              <figure>
                <Image
                  src="/home/list-cont-2.jpg"
                  alt="Neve Logo"
                  width={400}
                  height={400}
                />
              </figure>
            </div>
            <h3 className="list-post_child-title"><a href="">Et atque quis quisquam ut fugiat quia.</a></h3>
            <div className="list-post_child-content">
              <p>Rerum consequatur et nobis ut. Sapiente repudiandae voluptatem facere facere aliquam dolores. Nesciunt quia ut eum consequatur odio</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="footer-logo">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/home/logo.png"
                alt="Neve Logo"
                width={0}
                height={0}
                priority
                sizes='100vw'
              />
            </a>
          </div>
          <div className="footer-nav">
            <ul>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Company</a></li>
              <li><a>Product</a></li>
              <li><a>Blog</a></li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p className="footer-bottom__text"><i className="fa fa-copyright" aria-hidden="true"></i> Coppyright by Son</p>
          </div>
        </div>
      </div>

    </main>
  )
}
