
import {  RouterProvider } from 'react-router-dom'
import { router } from './page/router/router.jsx'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlovalStyles = createGlobalStyle`
  ${reset}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  body {
    font-family: "Noto Sans KR",sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`

function App() {
  return (
      <>
        <GlovalStyles/>
        <RouterProvider router={router}/>
      </>
  )
}

export default App
