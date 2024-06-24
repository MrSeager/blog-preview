import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Image, Badge} from 'react-bootstrap';
//Images
import ImgMain from './assets/images/illustration-article.svg';
import ImgAva from './assets/images/image-avatar.webp';

const BlogPrev = () => {
    AOS.init({
        anchorPlacement: "top-center"
    });

    return (
        <Container data-aos="zoom-in" className='cs-h d-flex flex-column align-items-center justify-content-center py-5 py-lg-0'>
            <Container className='cs-border cs-border-radius cs-w cs-shadow p-3 d-flex flex-column align-items-start justify-content-around bg-white gap-3 my-5 my-lg-0'>
                <Image data-aos="fade-down" data-aos-delay="200" fluid src={ImgMain} alt='illustration' className='cs-border-radius w-100' />
                <Badge data-aos="fade-right" data-aos-delay="300" bg="custom" className='cs-badge fs-6'>Learning</Badge>
                <h1 data-aos="fade-left" data-aos-delay="400" className='h5 cs-f m-0'>Published 21 Dec 2023</h1>
                <a data-aos="fade-right" data-aos-delay="500" href="#" className='cs-link h4 m-0'>HTML & CSS foundations</a>
                <p data-aos="fade-left" data-aos-delay="600" className='cs-fc-2 fs-6 m-0'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
                <Container className='d-flex flex-row align-items-center gap-3'>
                    <Image data-aos="fade-right" data-aos-delay="700" fluid src={ImgAva} alt='avatar' className='cs-img-w' />
                    <h2 data-aos="fade-left" data-aos-delay="700" className='h6 cs-fw m-0'>Greg Hooper</h2>
                </Container>
            </Container>
        </Container>
    );
};

export default BlogPrev;