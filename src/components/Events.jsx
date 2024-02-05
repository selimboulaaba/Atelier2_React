import Event from './Event';
import Data from '../assets/data/events.json';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function Events() {

    const listItems = Data.map((d) => <Event name={d.name} price={d.price} nbTickets={d.nbTickets} nbParticipants={d.nbParticipants} img={d.img} like={d.like} />);

    const [show, setShow] = useState(true)
    useEffect(() => {
        const timeId = setTimeout(() => {
            setShow(false)
        }, 3000)
    })

    return (
        <>
            <Container>
                <Alert show={show} variant='success'>Hey welcome to Esprit Events</Alert>
                <Row>
                    {listItems}
                </Row>
            </Container>
        </>
    )
}

export default Events
