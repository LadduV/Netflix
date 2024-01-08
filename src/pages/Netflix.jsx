import React, { useState, useEffect } from 'react';
import TopNav from '../components/TopNav';
import styled from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import SliderContainer from '../components/SliderContainer';




const Netflix = () => {

const [isScrolled, setIsScrolled] = useState(false);
window.onscroll = () => {
  setIsScrolled(window.pageYOffset === 0 ? false : true)
  return ()=>{window.onscroll = null}
}

const navigate = useNavigate();

const movies = useSelector((state) => state.netflix.movies)

const genresLoaded = useSelector((state)=>state.netflix.genresLoaded)

const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getGenres())
},[]);

useEffect(()=>{
  if(genresLoaded){
    dispatch(fetchMovies({type:"all"}))
  }
},[]);

// console.log(movies);


  return (
    <HeroContainer>
      <div className='hero'>
      <TopNav isScrolled={isScrolled}/>
      <img className='background-image' src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg" alt="hero" />
    <div className="container">
      <div className="title">
        <h1>Super Man</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente, dignissimos tenetur accusantium rerum provident ea. Consectetur vero quae neque eveniet recusandae. Obcaecati repellendus reiciendis quod, consectetur ab molestiae quia?</p>
      </div>
      <div className="buttons">
        <button className='playBtn' onClick={()=>navigate('/player')}>Play</button>
        <button className='moreBtn'>More</button>
      </div>
    </div>
    </div>
    <SliderContainer movies={movies}/>
    </HeroContainer>
  )
}
const HeroContainer = styled.div`
  .hero{
    position: relative;
    .background-image{
      filter: brightness(40%);
    }
    img{
      height: 70vh;
      width: 100%;
    }
    .container{
      position: absolute;
      bottom: 1rem;
      .title{
        h1{
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 73px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;;
        }
        p{
          margin-bottom: -70px;
          margin-left: 78px;
          width: 640px;
          font-family: 'lexend Deca', sans-serif;
          color: white;
        }
      }
      .buttons{
        display: flex;
        margin: 5rem;
        gap: 2rem;
      }
      .playBtn{
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        border-radius: 1rem;
        font-size: 1.4rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: none;
        cursor: pointer;
      }
      .moreBtn{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color:black;
        border-radius: 1rem;
        font-size: 1.4rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: .1rem solid white;
        cursor: pointer;
      }
    }
  }

`
export default Netflix