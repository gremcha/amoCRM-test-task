import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent'
import '../styles/pages.css'

export default function HomePage() {
    const [layoutType, setLayoutType] = useState(
        Number(window.innerWidth < 768)
    )
    const changeLayoutType = () => {
        setLayoutType(Number(window.innerWidth < 768))
    }

    useEffect(() => {
        window.addEventListener('resize', changeLayoutType)
        return () => window.removeEventListener('resize', changeLayoutType)
    }, [])

    return (
        <div className="page">
            <Header />
            <HomeContent layoutType={layoutType} />
            <Footer layoutType={layoutType} />
        </div>
    )
}
