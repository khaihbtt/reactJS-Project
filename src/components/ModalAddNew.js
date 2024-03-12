import { useState } from "react";
import { Modal, Button } from "react-bootstrap"



const ModalAddNew = (props) =>{
    const {show, handleClose} = props;
    const [name, setName] = useState("");
    const [jod, setJod] = useState("")

    const hardleSaveUser = () =>{
        console.log("<<<< check", "name = ",name , "jod = ", jod)
    }
    return (
    <>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add New User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="body-add-new">
                
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input 
                            type="text"
                            className="form-control" 
                            value={name}
                            onChange={(event) =>setName(event.target.value)}
                            
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Jod</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={jod}
                            onChange={(event) =>setJod(event.target.value)}
                            />
                        </div>
                    
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={() => hardleSaveUser() }>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}

export default ModalAddNew;