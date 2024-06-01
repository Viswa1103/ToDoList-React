import React from 'react'

const Footer = () => {
    const year = new Date()
    return (
        <footer>React Project 1 &copy; {year.getFullYear()}</footer>
    )
}

export default Footer
