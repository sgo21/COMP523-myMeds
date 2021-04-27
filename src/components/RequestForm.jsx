import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext"
import {db, timeNow} from '../firebase'
import { Form, Button, Alert, Modal } from "react-bootstrap"
import '../css/Home.css';
import '../css/MedPage.css';

export default function RequestForm() {
    const { currentUser } = useAuth()

    const [alert, setAlert] = useState("")
    const [name, setName] = useState("");
    const [genericName, setGenericName] = useState("");
    const [brandName, setBrandName] = useState("");
    const [indication, setIndication] = useState("");
    const [medicationClass, setMedicationClass] = useState("");  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    useEffect(() => {
      async function getUserData() {
        const userDoc = await db.collection('User').doc(currentUser.email).get();
        setName(userDoc.data().name);
      }
        getUserData();
    }, []);  
  
    const handleSubmit =(e) => {
      e.preventDefault();
      setAlert("")

      db.collection('Requests').add({
        name: name,
        createdAt: timeNow,
        genericName: genericName,
        brandName: brandName,
        indication: indication,
        medicationClass: medicationClass,
      })
      .then(() => {
        setAlert("Your request has been submitted for approval, thanks! You can close out, or edit your request and re-submit.")
      })
      .catch(error => {
        setAlert("Invalid request.")
      })
    };
      
    return (
      <>
        <Button onClick={handleShow} className="mt-3 " variant="link"> 
          Request a Medication
        </Button>

        <Modal 
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <strong className="text-center">Request a Medication</strong>
          </Modal.Header>
          <Modal.Body>
            <p className="text-center">Don't see your medication? 
            Fill out this form to request a medication to be included onto My Meds.</p>
            <hr/>
            {alert && <Alert className="text-center" variant="primary">{alert}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group id="genericName">
                <Form.Label>What is the generic name of the requested medication?</Form.Label>
                <Form.Control 
                  value={genericName} 
                  onChange={(e) => setGenericName(e.target.value)}/>
              </Form.Group>

              <Form.Group id="brandName">
                <Form.Label>What is the brand name(s) of the requested medication?</Form.Label>
                  <Form.Control
                    value={brandName} 
                    onChange={(e) => setBrandName(e.target.value)}/>
              </Form.Group>

              <Form.Group id="indication">
                  <Form.Label>What symptom(s) does the requested medication treat?</Form.Label>
                  <Form.Control
                    value={indication} 
                    onChange={(e) => setIndication(e.target.value)}/>
              </Form.Group>

              <Form.Group id="medicationClass">
                <Form.Label>What is the medication class of the requested medication?</Form.Label>
                <Form.Control
                  value={medicationClass} 
                  onChange={(e) => setMedicationClass(e.target.value)}/>
              </Form.Group>

              <Button onClick={handleSubmit} type="submit" className="my-3 w-100" style={{borderRadius:20}}>
                Send Request
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
}