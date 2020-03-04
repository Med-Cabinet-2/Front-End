import React from 'react';
import styled from 'styled-components';

//Jana Scheuble

const Card = styled.div`
    border: 2px solid white;
    width: 25%;
    margin-bottom: 3%;
`;


export default function PrefCard(props) {
    return(
        <Card>
            <p>Strain: {props.name}</p>
            <p>Type: {props.type}</p>
            <p>Description: {props.description}</p>
        </Card>
    );
}