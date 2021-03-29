import React, {useState} from 'react';
import {Card, CardTitle, CardImg, CardBody, Button, Modal} from "reactstrap";



const BookCard = ({
    thumbnail,
    title,
    authors,
    description,
    buyLink,
    categories,
    pageCount,
    canonicalVolumeLink
}) => {

    // states
    const [modal, SetModal] = useState(false);
    const toggle = () => SetModal(!modal);

    return (
        <Card style={{width: "250px"}} className="m-auto mb-3">
            <CardImg 
                top style={{width: "100%", height: "250px" }} 
                src={thumbnail} 
                alt={title} 
                />

                <CardBody>
                    <CardTitle className="card-title">{title}</CardTitle>
                    <Button className="mt-3" top style={{width: "100%", height: "30px" }} onClick={toggle}>View More Info</Button>
                    <hr />
                    <Button top style={{width: "100%", height: "30px" }}>Save Book</Button>
                </CardBody>
                <Modal isOpen={modal} toggle={toggle}>
                    <div className="modal-header d-flex justify-content-center">
                        <h3 className="modal-title text-center">{title}</h3>
                        <button aria-label="Close" className="close" type="button" onClick={toggle}>
                            <span aria-hidden={true}>close</span>
                        </button>
                    </div>
                    <div className="modal-body">
                            <div className="d-flex justify-content-bettween">
                                <img 
                                src={thumbnail} 
                                alt={title} 
                                style={{height: "150px"}}
                                />
                                <div>
                                    <p>Authors: {authors}</p>
                                    <p>Page Count: {pageCount} </p>
                                    <p>Category: {categories} </p>

                                </div>
                            </div>
                            <div className="mt-3">{description}</div>
                            <div className="modal-footer">
                                <a href={canonicalVolumeLink}>Click to view</a>
                                <a href={buyLink}>Click for purchase info</a>
                            </div>
                    </div>
                </Modal>
        </Card>
    );
};

export default BookCard