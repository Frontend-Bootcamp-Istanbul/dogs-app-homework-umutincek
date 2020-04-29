import React, { useState } from 'react';
import FavoriteActions from "./FavoriteActions";
import {Button,Col,Row} from "reactstrap";
import {Link} from "react-router-dom";


const Dog = ({id, name, toggle, getStatus,clickFavorites}) => {

    return (
    <Row>
        <Col xs="3">
            <span key={id}> 
                <Link to={"detail/"+id}>
                    {name}
                </Link>                 
                <FavoriteActions clickFavorites={clickFavorites} toggle={toggle} id={id} getStatus={getStatus}/>
            </span>
        </Col>
    </Row>

    );
};

export default Dog;