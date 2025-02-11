import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Example1 from './Example1.jsx'
import Example2 from './Example2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Example1 /> */}
    <Example2 />
  </StrictMode>,
)
