import { useEffect, useState } from 'react'
import { Alert, Button, Card, Col } from 'react-bootstrap'

function Event(props) {

    const [nbTickets, setNbTickets] = useState(props.nbTickets);
    const [nbParticipants, setNbParticipants] = useState(props.nbParticipants);
    const [img, setImg] = useState(props.img);
    const [disableButton, setDisableButton] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [liked, setLiked] = useState(props.like)

    const buy = () => {
        setShowAlert(true)
        setNbTickets(prev => prev - 1)
        setNbParticipants(prev => prev + 1)
    }

    useEffect(() => {
        if (nbTickets == 0) {
            setImg("sold_out.png")
            setDisableButton(true)
        }
    }, [nbTickets])

    useEffect(() => {
        if (showAlert == true) {
            const timeId = setTimeout(() => {
                setShowAlert(false)
            }, 2000)
        }
    }, [showAlert])

    return (
        <>
            <Col>
                <Card>
                    <Card.Img src={'./src/assets/images/' + img} />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>Price: {props.price}</Card.Text>
                        <Card.Text>Number of tickets: {nbTickets}</Card.Text>
                        <Card.Text>Number of participants: {nbParticipants}</Card.Text>
                        <Button onClick={() => setLiked(!liked)}>{liked ? "dislike" : "like"}</Button>
                        <Button onClick={() => buy()} disabled={disableButton}>Book an Event</Button>
                    </Card.Body>
                </Card>
                <Alert show={showAlert} dismissible >Purchase Completed</Alert>
            </Col>
        </>
    )
}

export default Event
