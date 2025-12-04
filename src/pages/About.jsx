import React from 'react'
import { about, Facebook, Instagram, man1, man2, man3, man4,  twitterBlack } from '../assets/images'

const meetTeam = [
  {
    id:4,
    img: <img src={man1} alt="" />,
    name: "David Micheal",
    title: " Senior Backend Engineer",
    x: <img src={twitterBlack} alt="" />,
    facebook: <img src={Facebook} alt="" />,
    insta: <img src={Instagram} alt="" />,
  },
  {
    id:5,
    img: <img src={man2} alt="" />,
    name: "Rufus",
    title: " Senior Backend Engineer",
    x: <img src={twitterBlack} alt="" />,
    facebook: <img src={Facebook} alt="" />,
    insta: <img src={Instagram} alt="" />,
  },
  {
    id:6,
    img: <img src={man3} alt="" />,
    name: "Samson",
    title: " Senior Backend Engineer",
    x: <img src={twitterBlack} alt="" />,
    facebook: <img src={Facebook} alt="" />,
    insta: <img src={Instagram} alt="" />,
  },
  {
    id:7,
    img: <img src={man4} alt="" />,
    name: "David Micheal",
    title: " Senior Backend Engineer",
    x: <img src={twitterBlack} alt="" />,
    facebook: <img src={Facebook} alt="" />,
    insta: <img src={Instagram} alt="" />,
  },
]

export default function About() {
  return (
    <main>
      <div className='md:px-28 py-16 relative'>
        <img src={about} alt="" className='w-full md:h-60 object-cover' />
       <div className="absolute inset-0 bg-primary/50 md:right-28 md:left-28 bottom-16 top-16"></div>
       <div className='flex flex-col justify-center items-center align-items-center absolute inset-0 text-white text-2xl font-semibold'>
        <p>
          What you have to know</p>
        <p>about <span className='text-[#FFA500]'>Protos</span> </p>
       </div>
      </div>
      <div className='flex flex-col items-center justify-center text-primary font-semibold mb-10 px-8 lg:px-28'>
        <h3 className='text-3xl'>About Protos</h3>
        <p className='my-8 font-normal text-2xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique deserunt quibusdam dolore sed necessitatibus vitae provident debitis quia libero, ab modi sequi dicta et nihil natus eaque alias dolorum sit in eos ipsam quod est placeat maiores! Asperiores at provident ab. Quis doloremque rerum sunt perferendis ullam dolores quod eius, quibusdam, laudantium distinctio dolorum porro accusamus velit, atque autem neque architecto animi cumque dicta? Dolorum veritatis voluptates quaerat. Sapiente quod vero optio voluptates exercitationem enim nemo, mollitia nihil distinctio, culpa a quisquam facere, rerum aliquam qui consequatur eius est harum aut aliquid dignissimos? Tempore, velit sunt fugit magni ad consectetur enim minima doloremque veniam. Distinctio, ut id, animi natus quae neque nostrum eveniet blanditiis unde aspernatur nulla, amet debitis provident porro quam recusandae quod vero rerum. Eius, tempore dolorum iure vel exercitationem doloremque expedita, praesentium et ratione rerum dolor quidem totam? Officia iusto numquam voluptas dolor ex repellat sed sunt commodi quod, voluptatibus facilis soluta quasi distinctio. Officiis numquam ut quos neque magnam, voluptate voluptatem ipsum quisquam, doloribus ad repellat reiciendis perspiciatis praesentium expedita aspernatur. Quas sed vel porro quibusdam, possimus praesentium exercitationem nesciunt voluptatibus, aliquam numquam sequi, nam a. Cupiditate corrupti rem quasi harum quidem nobis, molestiae exercitationem modi?
        </p>
        <h3 className='text-[26px] my-5 text-center'>Getting the Exposure you need</h3>
        <p className="my-8 font-normal text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et recusandae, aliquid, dicta autem fuga officia soluta dolores suscipit beatae tempore voluptatem quia facilis rem cumque pariatur dolor nihil ad! Delectus autem non ducimus veniam esse natus praesentium similique numquam illum ratione perferendis iusto dolore consequuntur tempora animi mollitia inventore aliquid, voluptates, eveniet ipsum beatae! Ea, possimus nisi. Veniam debitis eos impedit maxime deleniti aliquam! Tenetur repudiandae qui commodi illo nostrum iure cumque eaque sapiente accusamus tempore! Tempora beatae voluptates, nesciunt omnis adipisci neque dolorem amet, quisquam officia placeat maiores nulla quas sapiente. Error ullam expedita omnis enim rerum, ipsum voluptate!</p>
        <h3 className='text-3xl mb-6'>Meet the Team</h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:px-28'>
            {meetTeam.map((i) => (
              <div 
                key={i.id}
                className='bg-[#E7EBEF] p-1 md:p-2 rounded-sm shadow-md flex flex-col'>
                  <div>{i.img}</div>
                  <h3 className='text-lg font-semibold text-center my-3'>
                    {i.name}
                  </h3>
                    <p className='text-[10px] lg:text-lg lg:font-medium text-center text-black px-2'>
                      {i.title}
                    </p>
                    <div className='flex items-center justify-center gap-5 my-4'>
                      {i.x}
                      {i.facebook}
                      {i.insta}
                    </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  )
}
