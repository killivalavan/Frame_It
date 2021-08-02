import React from 'react';
import Card from '../Components/Card';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Gallery = ({ images, setPageNumber, isLoading }) => {

    const NextPage = () =>{
        setPageNumber(currentPage => currentPage + 1);
      }
    const PrevPage = () =>{
        setPageNumber(currentPage => currentPage - 1)
    }  
    

    return (
        <StyledGallery>
            {images.map((image)=> <Card key={image.id} image={image} /> )}
            <StyledButtons>
                <button onClick={PrevPage} name="Prev Page" className="prevPage">
                    <FontAwesomeIcon className="icon" size="3x" icon={faChevronLeft} />
                </button>
                <button onClick={NextPage} name="Next Page" className="nextPage">
                    <FontAwesomeIcon className="icon" size="3x" icon={faChevronRight} />
                </button>
            </StyledButtons>
        </StyledGallery>
    )
};

const StyledGallery = styled.div `
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 680px){
        margin: .5rem;
    }
`;

const StyledButtons = styled.div `
    top: 50%;
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .prevPage{
        position: fixed;
        left: 1%;
        background: transparent;
        border: none;
    }
    .nextPage{
        position: fixed;
        right: 1%;
        background: transparent;
        border: none;
    }
    .icon{
        border: none;
        color: rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        &:hover{
            transform: scale(1.5);
            color: rgba(0, 0, 0, 0.6);
        }
    }
`;

export default Gallery
