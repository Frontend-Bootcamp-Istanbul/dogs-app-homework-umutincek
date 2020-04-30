import React from 'react';
import dogs from "../dogsdata";
import {Container,Row,Col} from "reactstrap";
import {Link} from "react-router-dom";

const DogInfo = (props) => {
    const dogId = props.match.params.dogId;
    const info = dogs.filter((dog) => dog.id === dogId);
    return (
        info.map((dog) => {
        return <div key={dog.id}>
            
            <Container>
                <Link to="/">
                    Geri Dön
                </Link>
                <Row>
                    <Col xs="3">
                        <img src={dog.image} width="250" height="250"/>
                    </Col>
                    <Col xs="6">
                        <h1>
                            {dog.name}
                        </h1>
                        <p>
                            <b>Açıklama: </b> {dog.description}
                        </p>
                        <p>
                            <b>Yaş: </b> {dog.age}
                        </p>
                        <p>
                            <b>Cinsi: </b> {dog.breed}
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
        })
    );
};

export default DogInfo;
