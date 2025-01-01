import React from 'react'
import './CSS/Home.css'
import Quotes from '../Home/Quotes/Quotes'
import Popular from '../Home/Popular/Popular'
import NewCollections from '../Home/NewCollections/NewCollections'
import NewsLetter from '../Home/NewsLetter/NewsLetter'

const Home = () => {
  return (
    <div className='from-black-500 to-zinc-500 bg-gradient-to-br'>
        <Quotes/>
        <Popular/>
        <NewCollections title="NEW COLLECTIONS"/>
        <NewsLetter/>
    </div>
  )
}

export default Home
