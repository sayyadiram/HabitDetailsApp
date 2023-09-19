import Header from './components/Header'
import Overview from './components/Overview'
import HabitDisplay from './components/HabitDisplay'

import { Row, Col, Container } from 'react-bootstrap'
import { useEffect } from 'react'

import Typed from 'typed.js'

function App() {
  // code for typed.js library
  useEffect(() => {
    const typed = new Typed('.tag', {
      strings: [
        'The secret to success is found in your daily routine.— John C. Maxwell',
        'Your net worth to the world is usually determined by what remains after your bad habits are subtracted from your good ones. — Benjamin Franklin',
        'We are what we repeatedly do. Excellence, then, is not an act, but a habit. — Will Durant',
        'The only way to do great work is to love what you do and cultivate good habits along the way. — Steve Jobs',
        'Success is the sum of small efforts, repeated day in and day out. — Robert Collier',
        'You will never change your life until you change something you do daily. The secret of your success is found in your daily routine.— Darren Hardy',
        'Habits change into character. — Ovid',
        'Your habits can be your greatest allies or your heaviest burdens. It all depends on how you use them. — Unknown',
        'Small changes eventually add up to huge results. — Unknown',
        ' Its easier to prevent bad habits than to break them. — Benjamin Franklin',
        'Make each day your masterpiece. — John Wooden,'
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 2000,
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 5000,
      loop: true,
    })

    // Destroying
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Row className='mt-5'>
          <Col md={3}>
            {/* Overview component */}
            <Overview />
          </Col>
          <Col md={9}>
            {/*  HabitDetails Component*/}
            <HabitDisplay />
          </Col>
        </Row>
        <h4 className='text-light d-flex  mt-5  justify-content-center'>
          <span className='tag'></span>
        </h4>
      </Container>
    </>
  )
}

export default App
