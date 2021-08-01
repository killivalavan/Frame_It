import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const Card = ({ image }) => {

    const [loading, setLoading] = useState(true);
    const [modalImage, setModalImage] = useState([]);
    const [modal, setModal] = useState(false);

    const closeRef = useRef();

    setTimeout(()=> setLoading(false), 300);

    const onclickHandler = (e) =>{
        setModal(true);
        setModalImage(e.target.src);
    }

    //Close when cliked outside
    const closeHandler = (e) =>{
        if (closeRef.current === e.target){
            setModal(false);
        }
    };
    

    return (
        <StyledCard>
           {!loading ? 
            <img className="image" onClick={onclickHandler} src={image.urls.regular} alt="" /> :
            <Skeleton className="skeleton" variant="rect" annimation="wave" width={310} height={190} />}
            
            <Modal>
                <div onClick={closeHandler} ref={closeRef} className={`modal-bg ${modal ? "active" : "" }`}>
                    <div className="modal">
                        <FontAwesomeIcon onClick={()=>setModal(false)} className="closeIcon" size="3x" icon={faTimes} />
                        <img src={modalImage} alt="" />
                    </div>
                </div>
            </Modal>
        </StyledCard>
    )
};

const StyledCard = styled.div`
    transition: all .5s ease;
    overflow: hidden;
    margin: .3rem;
   .image{
       height: 20rem;
       transition: all .4s ease;
       &:hover{
           transform: scale(1.1);
           cursor: pointer;
       }
   }
   .skeleton{
       margin: .2rem;
       border-radius: 2px;
   }
   @media screen and (max-width: 680px){
        .image{
            height: 10rem;
        }
   }
`;

const Modal = styled.div`
.modal-bg{
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,.5);
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s opacity 0.5s;
    z-index: 1;
    .modal{
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .closeIcon{
            position: absolute;
            bottom: 99%;
            left: 105%;
            //right: 10%;
            //transform: translate(-105%, -99%);
            opacity: 1;
            color: rgba(255,255,255,.5);
            transition: color .5s ease;
            &:hover{
                opacity: 1;
                cursor: pointer;
                color: white;
            }
        }
        img{
            height: 100%;
            //width: 90%; 
            object-fit: contain;
            background: white;
            padding: 2rem;
            &:hover{

            }
        }
    }
}
.modal-bg.active{
    visibility: visible;
    opacity: 1;
}


@media screen and (max-width: 912px){
    .modal-bg .modal{
        height: 65%;
        img{
            padding: 1rem;

        }
    }
}

@media screen and (max-width: 680px){
    .modal-bg .modal{
        height: 25%;
        img{
            padding: 1rem;

        }
    }
}

`;


export default Card
