import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Example1 from './Example1.jsx'
import Example2 from './Example2.jsx'
import Example3 from './Example3.jsx'
import Practice1 from './Practice1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Example1 /> */}
    {/* <Example2 /> */}
    {/* <Example3 /> */}
    <Practice1 />
  </StrictMode>,
)
