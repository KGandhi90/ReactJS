import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Example1 from './Example1'
import Example2 from './Example2'

createRoot(document.getElementById('root')).render(
  // Strict Mode runs the code twice on the very first render
  // Reason : 1st time it checks the code and 2nd time it actually runs the code
  <StrictMode>
    {/* <Example1 /> */}
    <Example2 />
  </StrictMode>,
)
