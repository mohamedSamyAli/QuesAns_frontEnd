import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

export default function question(props) {
    return (
        <Card body>
<CardTitle>{props.header}</CardTitle>
    <CardText>{props.body}</CardText>
        <Button>Go somewhere</Button>
      </Card>
    )
}
