import { Hero } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='md:flex'>
        <div>
          <Hero />
        </div>

        <div className='p-6 lg:columns-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, at excepturi. Atque aspernatur accusantium, aliquam at eveniet veritatis odio commodi laborum est. Eveniet inventore vitae necessitatibus quis omnis doloremque tempore? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur unde blanditiis eaque excepturi exercitationem, necessitatibus mollitia neque repellat odio consequatur est numquam molestiae voluptate at culpa ut consectetur enim officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sit minima illum nisi! Laborum, consequatur repellendus blanditiis nam necessitatibus consequuntur explicabo quibusdam optio pariatur est dolores at temporibus, sapiente consectetur!</div>
      </div>
      
    </main>

  )
}
