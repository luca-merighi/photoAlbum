import React from 'react'

import Main from '../Main/Main'

import reactImg from '../../img/reactJS.svg'
import sassImg  from '../../img/sass.svg'
import bootstrapImg  from '../../img/bootstrap.svg'
import swiperImg  from '../../img/swiperJS.svg'

import './Home.scss'

const headerProps = {
    title: 'Home',
    icon: 'home'
}

export default function Home() {
    return (
        <Main {...headerProps}>
            <div className="homeContainer animation-left">
                <header className="homeHeader mb-4">
                    <div className="display-6">
                        Bem <span>Vindo!</span>
                    </div>
                    <div className="divider"></div>
                    <p className="text-muted">
                        Sistema construído para exemplificar um carrossel de imagens.
                    </p>
                </header>
                <div className="homeContent">
                    <h3>Este site foi construído com:</h3>
                    <ul className="d-flex align-items-center justify-content-start gap-2 p-0">
                        <li>
                            <img src={reactImg} alt="ReactJS Icon" title="ReactJS" />
                        </li>
                        <li>
                            <img src={sassImg} alt="Sass Icon" title="Sass" />
                        </li>
                        <li>
                            <img src={bootstrapImg} alt="Bootstrap Icon" title="Bootstrap" />
                        </li>
                        <li>
                            <img src={swiperImg} alt="SwiperJS Icon" title="SwiperJS" />
                        </li>
                    </ul>
                </div>
            </div>
        </Main>
    )
}