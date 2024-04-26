import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import List from './assets/components/list'
import Stat from './assets/components/stat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-[600px] gap-4'>

        <List></List>
        <Stat className='w-full'></Stat>
      </div>
    </div>
  )
}

export default App
