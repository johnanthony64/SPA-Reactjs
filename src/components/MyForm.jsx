import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Form, Row, Button, Alert } from 'react-bootstrap';

export default function MyForm() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const searchVal = event.target.search.value;
    if (!searchVal) {
      setCheck(true);
      navigate('/');
      return;
    }
    navigate(`/search/${searchParams.get('q')}`);
  }

  return (
    <div className="form-container w-50 my-5 mx-auto shadow-sm p-4 rounded">
      {check && <Alert variant="warning">enter a search field</Alert>}
      <Form onSubmit={handleSubmit}>
        <Row className="d-flex flex-column align-items-end">
          <Form.Group>
            <Form.Control
              className="mb-3"
              type="text"
              name="search"
              placeholder="enter search field"
              defaultValue={!searchParams.get('q') ? '' : searchParams.get('q')}
              onChange={(e) => setSearchParams({ q: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Button type="submit" variant="dark" className="btn-hover">
              search
            </Button>
          </Form.Group>
        </Row>
      </Form>

      <style jsx>{`
        .form-container {
          background-color: #f8f9fa;
        }

        .btn-hover:hover {
          background-color: #343a40;
        }

        .btn-hover:focus {
          box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
        }
      `}</style>
    </div>
  );
}
