
import Image from 'next/image'
import Link from 'next/link'

export default function Blog() {
    return (
        <main>
            <div className="container">
                <h1 className="contact-title">Blog & News</h1>
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
                        <h4 className="list-post_child-title"><Link href='/blog/detail'>Saepe cupiditate unde autem aut eum.</Link></h4>
                        <div className="list-post_child-content"><p>Ut eligendi exercitationem possimus sed et et. Et nihil beatae sunt molestiae ut commodi animi. Dolores repellat et voluptate quis. Quia esse inventore dolores beatae cupiditate. Fugiat consequatur cupiditate recusandae ut. Rerum et aspernatur quasi qui est non nisi. Incidunt nam et dolorem est omnis modi sunt. Ipsum beatae cum blanditiis dolorum. Numquam placeat omnis</p></div>
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
                        <h4 className="list-post_child-title"><Link href='/blog/detail'>Et atque quis quisquam ut fugiat quia.</Link></h4>
                        <div className="list-post_child-content"><p>Rerum consequatur et nobis ut. Sapiente repudiandae voluptatem facere facere aliquam dolores. Nesciunt quia ut eum consequatur odio et. Alias corporis eos vitae vero harum rem. Laudantium ut excepturi temporibus nam. Non asperiores dolor excepturi ut impedit quia non. At et voluptas voluptatem. Et sunt rerum sed officiis architecto aliquam. Iste ipsum sunt et fugit</p></div>
                    </div>
                    <div className="list-post_child">
                        <div className="list-post_child-img">
                            <Link href='/blog/detail'>
                                <Image
                                    src="/blog/list-cont-3.jpg"
                                    alt="list-cont-3"
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                />
                            </Link>
                        </div>
                        <h4 className="list-post_child-title"><Link href='/blog/detail'>Et doloribus ea magni fuga cumque sit.</Link></h4>
                        <div className="list-post_child-content"><p>Et placeat tempore sint dolorum odio impedit non. Qui ad quo et minus quaerat. Expedita inventore consequatur vel laboriosam exercitationem. Velit ad suscipit tempora quia asperiores sit provident. Maiores delectus perspiciatis dicta iure dolorum maxime. Sunt aut ut cupiditate illum ut ut eos. Ipsam nemo numquam fugiat impedit libero voluptatibus. Id et minima provident. Itaque</p></div>
                    </div>
                    <div className="list-post_child">
                        <div className="list-post_child-img">
                            <Link href='/blog/detail'>
                                <Image
                                    src="/blog/list-cont-4.jpg"
                                    alt="list-cont-4"
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                />
                            </Link>
                        </div>
                        <h4 className="list-post_child-title"><Link href='/blog/detail'>Esse id autem voluptatem reiciendis.</Link></h4>
                        <div className="list-post_child-content"><p>Quam dolorem voluptatibus hic exercitationem consectetur. Deserunt optio illum qui modi quia odit commodi. Ducimus ut repudiandae ex autem delectus. Laudantium ut eligendi repudiandae natus aut quisquam. Qui facilis corrupti aut maiores atque. Eum rerum eius et repudiandae accusantium aut sit. Et dolorem eius quo eum animi officiis. Dolorem aut quos culpa autem quo. Earum</p></div>
                    </div>
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
                </div>
            </div>
        </main>
    )
}