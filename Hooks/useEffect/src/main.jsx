import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'
import Practice1 from './Practice1'
import Practice2 from './Practice2'
import Practice3 from './Practice3'

createRoot(document.getElementById('root')).render(
  // Strict Mode runs the code twice on the very first render
  // Reason : 1st time it checks the code and 2nd time it actually runs the code
  <StrictMode>
    {/* <Example1 /> */}
    {/* <Example2 /> */}
    {/* <Example3 /> */}
    {/* <Practice1 /> */}
    {/* <Practice2 /> */}
    <Practice3 />
  </StrictMode>,
)
