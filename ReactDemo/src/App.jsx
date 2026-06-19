import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <p>{count}</p>
    <button onClick={()=>{setCount(count +1)}}>
      click me

    </button>
          <p>
        {count}
      </p>
  </div>
  )
}

export default App
