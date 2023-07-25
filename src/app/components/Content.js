'use client'
import { useEffect, useState } from 'react';

// const tabs = ['posts', 'todos', 'albums']


const Content = () => {

    // const [posts, setPosts] = useState([])
    // const [type, setType] = useState('posts')

    //Scroll
    // const [ShowGoToTop, setShowGoToTop] = useState(false)
    //Resize
    // const [width, setWidth] = useState(window.innerWidth)

    // useEffect(() => {
    //     // fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //     fetch(`http://bai-tap3/wp-json/wp/v2/${type}`)
    //         // fetch("http://bai-tap3/wp-json/wp/v2/posts")
    //         .then(res => res.json())
    //         .then(posts => {
    //             setPosts(posts);
    //         })
    // }, [type])

    //Scroll
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY >= 200) {
    //             setShowGoToTop(true)
    //         } else {
    //             setShowGoToTop(false)
    //         }

    //         // setShowGoToTop(window.scrollY >= 200)
    //     }
    //     window.addEventListener('scroll', handleScroll)

    //     //Cleanup Func
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)

    //     }
    // }, [])

    //Resize
    // useEffect(() => {
    //     const handleResize = () => {
    //         setWidth(window.innerWidth)
    //     }

    //     window.addEventListener('resize', handleResize)

    //     //Cleanup Func
    //     return () => {
    //         window.removeEventListener('scroll', handleResize)

    //     }
    // })

    //setInterval, setTimeout
    const [countdown, setCountdown] = useState(60)

    useEffect(() => {
        const timeId = setInterval(() => {
            setCountdown(prevState => prevState - 1)
            console.log('Countdown...')
        }, 1000)
        return () => clearInterval(timeId)
    }, [])


    return (
        <>
            {/* {tabs.map(tab => (
                <button key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        background: '#333',
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

            // Scroll

            {ShowGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >
                    Top
                </button>
            )} */}

            {/* Resize */}
            {/* <div>
                <h1>{width}</h1>
            </div> */}

            <div style={{ padding: 20 }}>
                <h1>{countdown}</h1>
            </div>
        </>
    )
}

export default Content