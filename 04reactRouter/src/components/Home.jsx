import React from 'react'

function Home() {
  return (
    <>
    <div className="home w-9/12 m-auto p-3 flex justify-around">
        <div className="left flex ">
            <img className=' rounded-lg size-3/4 ml-3' src="https://images.ctfassets.net/hrltx12pl8hq/01rJn4TormMsGQs1ZRIpzX/16a1cae2440420d0fd0a7a9a006f2dcb/Artboard_Copy_231.jpg?fit=fill&w=600&h=600" alt=" home image" />
        </div>
        <div className="right flex flex-col justify-center gap-3 ">
            <div className="up  ">
                <h1 className='font-bold text-4xl'>Download Now</h1>
                <h1 className='font-bold text-2xl'>Lorem, ipsum dolor.</h1>
            </div>
            <button className='bg-orange-700 rounded-md p-3 text-white'>Download Now</button>
        </div>
    </div>
    </>
  )
}

export default Home