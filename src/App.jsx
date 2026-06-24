import { useState } from 'react'
import './App.css'

export default function App() {

  const [pageState, setpageState] = useState("placeHolder");

  return (
    <>
      <section className='page-header'>

      </section>

      <section className='page-body'>

        {pageState === "placeHolder" && (<p>Hello World</p>)}

      </section>
    </>
  )
}