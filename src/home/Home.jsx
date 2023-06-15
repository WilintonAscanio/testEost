import React, { useEffect, useState } from 'react'
import './home.scss'
import { BsSearch } from 'react-icons/bs'
import hamburguer from '../assets/hamburgermenu.svg'
import logo from '../assets/logo.svg'
import { FiSettings } from 'react-icons/fi'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { BiCommentDetail } from 'react-icons/bi'
import { CiGift } from 'react-icons/ci'
import { FaUserAlt } from 'react-icons/fa'
import barChart from '../assets/barChart.svg'
import { getData } from '../services/getData'
import { Swiper, SwiperSlide } from 'swiper/react';
import bestSelling from '../assets/bestSelling.svg'

import progressBar from '../assets/progressBar.svg'
import waveChart from '../assets/waveChart.svg'
import pieChart from '../assets/pieChart.svg'
import waveLineChart from '../assets/waveLineChart.svg'



const Home = () => {

    const [data, setData] = useState([])
    const [width, setWidth] = useState(window.innerWidth)

    const changeScreen = () => {
        setWidth(window.innerWidth)
      }
      window.addEventListener('resize', changeScreen)

    useEffect(() => {
        getData().then((response) => {
            setData(response)
        }).catch((error) => { console.log(error) })



    }, [])


    return (
        <article className='home'>
            <header className='home__header'>
                <div className='home__header__left'>
                    <figure>
                        <img src={hamburguer} alt="hamburguer" />
                        <img src={logo} alt="logo" />
                    </figure>
                    <section>
                        <input type="text" placeholder='Search here' />
                        <BsSearch />

                    </section>
                </div>
                <div className='home__header__right'>
                    <FiSettings className={width <1000 ? 'hidden' : 'home__header__right__btns settings'}  />
                    <section>
                        <div>
                            <MdOutlineNotificationsNone className='home__header__right__btns' />
                            <BiCommentDetail className={width <1000 ? 'hidden' : 'home__header__right__btns'}  />
                            <CiGift className={width <1000 ? 'hidden' : 'home__header__right__btns'}  />

                        </div>
                        <div className='home__header__right__user'>
                            <FaUserAlt className='userPhoto' />
                            <select>
                                <option value="" className={width <1000 ? 'hidden' : ''} >David</option >
                            </select>
                        </div>

                    </section>

                </div>

            </header>
            <strong>
                Dashboard/
            </strong>

            <div className='home__graphics'>
                <section className='home__graphics__left'>

                    <figure className='home__graphics__left__top'>
                        <img src={bestSelling} alt="bestSelling" />
                    </figure>
                    <figure className='home__graphics__left__bottom'>
                        <img src={progressBar} alt="progressBar" />
                        <img src={waveChart} alt="waveChart" />
                        <img src={waveLineChart} alt="waveLineChart" />
                        <img src={pieChart} alt="pieChart" />
                        
                    </figure>
                    

                </section>
                <section className='home__graphics__right'>
                    <figure className={width <1000 ? 'hidden' : ''}>
                        <img src={barChart} alt="chart" />
                    </figure>
                    <h3>
                        Event Galleries
                    </h3>

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        className='swiper'>
                        {data ? data.map((element, index) =>
                            <SwiperSlide key={index}>
                                <img src={element.download_url
                                } alt="image" />
                            </SwiperSlide>

                        ) : ''}

                    </Swiper>

                </section>

            </div>

        </article>
    )
}

export default Home