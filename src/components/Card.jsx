import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export default React.memo(function Card({movieData}){

    const [onHovered, setOnHovered] = useState(false);
    const navigate = useNavigate();
  return (
    <CardContainer onMouseEnter={()=>setOnHovered(true)} onMouseLeave={()=> setOnHovered(false)}>
        <img src={`https://image.tmdb.org/t/p/w500${movieData.image}
        `} alt="poster" onClick={()=>navigate('/player')} />
        {
            onHovered && (
                <div className="hover">
                    <div className="imageVideoWrapper">
                    <img src={`https://image.tmdb.org/t/p/w500${movieData.image}
        `} alt="poster" onClick={()=>navigate('/player')} />
                    <video src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4" autoPlay loop controls ></video>
                    </div>
                    <div className="infoContainer">
                        <h3 className="movieName" onClick={()=>navigate('/player')}>{movieData.name}</h3>
                      <div className="icons">
                      <div className="controls">
                            <IoPlayCircleSharp title='play' onClick={()=> navigate('/')}/>
                            <RiThumbUpFill title='like'/>
                            <RiThumbDownFill title='DisLike'/>
                            <BsCheck  title='Remove from List'/>
                            <AiOutlinePlus  title='Add to my List'/>
                        </div>
                        <div className="info">
                            <BiChevronDown title='More Info'/>
                        </div>
                      </div>
                      <div className="genre">
                        <ul>
                          {movieData.genres.map((genre)=>{
                            <li>{genre}</li>
                          })}
                        </ul>
                      </div>
                    </div>
                </div>
              
            )
        }
    </CardContainer>
  )
})
const CardContainer = styled.div`
    margin-top:1rem;
    max-width: 230px;
    width: 230px;
    height: 100%;
    cursor: pointer;
    position: relative;
    
    img{
        border-radius: 0.2rem;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
    .hover{
        z-index: 99;
        height: max-content;
        width: 20rem;
        position: absolute;
        top: -18vh;
        left: 0;
        border-radius: 0.2rem;
        border: 0.1rem solid gray;
        background-color: #181818;
        transition:  .3s ease-out;
        .imageVideoWrapper{
            position: relative;
            height: 140px;
            img{
                width: 100%;
                height: 150px;
                object-fit: cover;
                border-radius: 0.3rem;
                top: 0;
                z-index: 4;
                position: absolute;
            }
            video{
                width: 100%;
                height: 150px;
                object-fit: cover;
                border-radius: 0.3rem;
                top: 0;
                z-index: 4;
                position: absolute;
            }
        }
        .infoContainer{
            display: flex;
            flex-direction: column;
            padding: 1rem;
            gap: .5rem;
            .movieName{
                color: white;
            }
        }
        .icons{
            display: flex;
            justify-content: space-between;
            .controls{
                display: flex;
                gap: .5rem;
            }
            svg{
                color: white;
                border: .1rem solid white;
                font-size: 1.5rem;
                cursor: pointer;
                transition: .3s ease-in-out;
                &:hover{
                    color: #b8b8b8;
                }
            }
        }
        .genre{
            display: flex;
            color: white;
            ul{
                display: flex;
                gap: 1rem;
                li{
                    padding-right: 0.7rem;
                    &:first-of-type{
                        list-style-type: none;
                    }
                }
            }
        }
    }
`
