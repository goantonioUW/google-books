import React, {useState} from 'react';
import {Card, CardTitle, CardImg, CardBody, Button, Modal} from "reactstrap";



const BookCard = ({thumbnail}) => {

    // states
    const [modal, SetModal] = useState(false);
    const toggle = () => SetModal(!modal);

    return (
        <Card style={{width: "250px"}} className="m-auto">
            <CardImg top style={{width: "100%", height: "250px" }} src={thumbnail} alt="Book image"></CardImg>
        </Card>
    );
};

export default BookCard