import Image from 'next/image';
import React from 'react'




const page = async () => {
  const memes = await fetch('https://api.imgflip.com/get_memes');
  const responce = await memes.json();
  console.log(responce.data.memes);

  return (
    <>
      <div className='bg-black text-white'>

      <h1 className='text-center mt-5 text-5xl font-bold'>Meme Maker App</h1>
      <h2>Click on image and Generate Meme</h2>
      <section className='mx-auto container'>
        <div className='flex flex-wrap justify-between mt-10 gap-4'>
          {responce.data.memes.map((item) => (
            <Image key={item.id} src={item.url} width={300} height={350} />
          ))}

        </div>

      </section>

      </div>
    </>
  )
}

export default page