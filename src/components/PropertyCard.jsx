import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export default function PropertyCard({ name, type, location }) {
  return (
    <Card className="property-card col-md-8 mx-2 my-2">
    
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{type}</Card.Text>
        <Badge variant="info">{location}</Badge>
      </Card.Body>

      <style jsx>{`
        .property-card {
          width: 18rem;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border: none;
        }

        .property-card .card-body {
          padding: 1.5rem;
        }

        .property-card .card-text {
          margin-bottom: 1rem;
        }

      `}</style>
    </Card>
  );
}
