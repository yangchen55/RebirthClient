import React from 'react'
import Footer from './Footer'

const WithoutHeaderLayout = ({ children }) => {
    return (
        <div>
            {children}
            <Footer />
        </div>
    )
}

export default WithoutHeaderLayout