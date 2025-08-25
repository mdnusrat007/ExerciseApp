import React from 'react'
import Records from '../../components/records/records'
import Navbar from '../../components/navbar/navbar'
import Form from '../../components/form/form'

const Home = () => {    
  return (
    <section>
        <Navbar />
        <Form />
        <Records />
    </section>
  )
}

export default Home;