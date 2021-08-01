import styled from 'styled-components';

const Search = () =>{
    return(
        <StyledSearch>
            <form action="">
                <input type="text" placeholder="Search here.." />
            </form>
        </StyledSearch>
    )
}

const StyledSearch = styled.div`
       
    form{   
        position: fixed;
        bottom: 5%;
        left: 50%;
        transform: translate(-50%, -5%);
        z-index: 1;
    }
    input{
        padding: 1rem 2rem;
        border-radius: 50px;
        background: rgba(0, 0, 0, 0.6);
        color: white;
        border: 4px solid #696969;
        outline: none;
        width: 50rem;
        font-size: 2rem;
    }
`;

export default Search;