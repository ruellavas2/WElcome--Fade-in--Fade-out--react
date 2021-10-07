import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import '../App.css'
import { Container, Row, Col } from "react-bootstrap";

const Fader = ({ text }) => {

    const [fadeProp, setFadeProp] = useState({
      fade: 'fade-in' , 

    });

    
        useEffect(() => {
            const timeout = setInterval(() => {
                if (fadeProp.fade === 'fade-in') {
                    setFadeProp({
                        fade: 'fade-out'
                    })
                } else {
                    setFadeProp({
                        fade: 'fade-in'
                    })
                }
            }, 4000);
    
            return () => clearInterval(timeout)
        }, [fadeProp])

    return (
        <>
        <div  className={fadeProp.fade}  xs={3} sm={5}> {text}</div>
        </>
    )
}

Fader.defaultProps ={
    text: 'WELCOME, JOHN'
}

Fader.propTypes = {
   text: PropTypes.string,
}

export default Fader
