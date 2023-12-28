import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  const colors = ['black', 'green', 'red', 'yellow', 'olive', 'aqua']

  function changeColor(clr="olive"){
    setColor(clr)
  }
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl' >
          {
            colors.map((e1) => 
              <button className='outline-none px-4 text-white shadow-lg' style={{ backgroundColor: e1 }} onClick={() => setColor(e1)}>{e1}</button>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
