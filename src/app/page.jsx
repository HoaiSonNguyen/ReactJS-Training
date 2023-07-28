
import ContentHome from '@/app/components/ContentHome'
import Sitebar from '@/app/components/Sitebar'
import BlogNews from '@/app/components/BlogNews'



export default function Home() {

  return (
    <main>
      <div className="sitebar">
        <Sitebar />
      </div>
      <div className="container" >

        <ContentHome />

        <BlogNews />

      </div>
    </main>
  )
}


