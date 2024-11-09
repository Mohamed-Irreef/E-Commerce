import React from 'react'
import './Home.css'
import GalleryGrid from '../../components/Gallery-Grid/GalleryGrid'
import Banner from '../../components/Banner/Banner'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import FeaturedProductFilter from '../../components/FeaturedProductFilter/FeaturedProductFilter'
import Banner2 from '../../components/Banner2/Banner2'

const Home = () => {
  return (
    <div className='home'>
        <GalleryGrid className='GalleryGrid'/>
        <FeaturedProducts className='FeaturedProducts '/>

        <Banner className='Banner'/>
        <FeaturedProductFilter className='FeaturedProductFilter'/>
        <Banner2 className='Banner2'/>
    </div>
  )
}

export default Home