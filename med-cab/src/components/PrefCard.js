import React from 'react';
import styled from 'styled-components';

//Jana Scheuble

const Card = styled.div`
    border: 2px solid #03630c;
    width: 25%;
    margin-bottom: 3%;
    padding: 1%;

    @media (max-width: 800px) {
        width: 40%;

        @media (max-width: 500px) {
            width: 90%;
        }
    }
`;


export default function PrefCard(props) {
    return(
        <Card>
            <p className='kw-name'>Strain: {props.name}</p>
            <p>Type: {props.type}</p>
            <p>Description: {props.description}</p>
            <p>Rating: {props.rating}</p>
        </Card>
    );
}