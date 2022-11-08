import React from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Navbar from '../../components/Navbar/Navbar'

const About = () => {
    return (
        <div>
            <Header variant="header yellow" title="About" />
            <Navbar />
            <Main title="Pagina About" />
        </div>
    )
}

export default About