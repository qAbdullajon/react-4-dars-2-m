import React, { useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([
    {
      figure: '<Figure>',
      figcaption: '<Figcaption>',
      header: '<Header>',
      footer: '<Footer>',
      article: '<Article>'
    },
    {
      figure: '<Figure>',
      figcaption: '<Figcaption>',
      header: '<Header>',
      footer: '<Footer>',
      article: '<Article>'
    },
    {
      figure: '<Figure>',
      figcaption: '<Figcaption>',
      header: '<Header>',
      footer: '<Footer>',
      article: '<Article>'
    },
  ])
  return (
    <div className='grid grid-cols-[19%_80%] gap-[1%] m-[1%]'>
      <div className='w-full bg-yellow-100 col-start-1 col-end-3 h-[16vh] flex justify-center items-center'>
        <h1 className='text-4xl'>{`<Header>`}</h1>
      </div>
      <div className='flex justify-center row-start-2 row-end-5 items-center bg-pink-200'>
        <h1 className='text-4xl -rotate-90'>{`<Nav>`}</h1>
      </div>
      {
        users.map((item, i) => {
          return <div key={i} className='grid grid-cols-[20%_79%] gap-[1%] row-start-{i+2} col-start-2 h-[20vh] bg-teal-100 p-2' >
            <div className='bg-lime-500 bg-opacity-50 flex justify-end flex-col'>
              <h1 className='text-3xl flex items-center justify-center h-[40%]'>{item.figure}</h1>
              <h2 className='text-2xl flex items-center justify-center h-[30%]'>{item.figcaption}</h2>
            </div>
            <div>
              <h2 className='text-2xl h-[30%] bg-yellow-100 flex justify-center items-center'>{item.header}</h2>
              <h1 className='text-3xl h-[40%] flex justify-center items-center'>{item.article}</h1>
              <h2 className='text-2xl h-[30%] bg-orange-200 flex justify-center items-center'>{item.footer}</h2>
            </div>
          </div>
        })
      }
      <div className='w-full bg-orange-200 col-start-1 col-end-3 h-[16vh] flex justify-center items-center'>
        <h1 className='text-4xl'>{`<Footer>`}</h1>
      </div>
    </div >
  )
}

export default App