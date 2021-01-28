import { Button, Modal } from 'react-bootstrap';

import { ReactComponent as MessageSent } from '../../illustrations/undraw_message_sent_1030.svg';

import "./ContactModal.css";


function ContactModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className ="ContactModal"
        >
            <Modal.Body>
                <MessageSent />
                <h4>Thank you for your Message!</h4>
                <p> We will get in touch with you as soon as possible.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ContactModal;