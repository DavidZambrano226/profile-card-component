import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { Card, Button } from 'react-bootstrap';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Card>
        <Card.Header>
          <Card.Img variant="top" src="../public/assets/images/bg-pattern-top.svg" />
        </Card.Header>
        <Card.Body>
          <Card.Title>Victor Crest </Card.Title>
          <Card.Text>
            London
          </Card.Text>

        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Go somewhere</Button>
          <Button variant="secondary">Go somewhere</Button>
          <Button variant="warning">Go somewhere</Button>
        </Card.Footer>
      </Card>

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">David Zambrano</a>.
      </div>
    </main>
  );
}

export default App;
