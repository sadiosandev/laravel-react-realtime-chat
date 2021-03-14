import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

const UserProfileModal = (props) => {
  const {
    className,
    user,
    currUser
  } = props;

  const [modal, setModal] = useState(false);
  const [isEditOpen, setEdit] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleEdit = () => setEdit(!isEditOpen);


  return (
    <div>
      <div onClick={toggle} id="userProfile" className="userDetails" > {
                  user.avatar ? 
                  <img src={"storage/"+user.avatar} className="dmAvatar"></img> : 
                  <img src="/assets/images/defaultuser.png" className="dmAvatar"></img>
                }
                <span>{user.name}</span>
        </div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Your User Profile</ModalHeader>
        <ModalBody className="profileModal" >
        <img src={"storage/"+user.avatar} ></img>
        <span>{user.name}</span>
        <div>
        <h2>About</h2>
        { user.id === currUser.id && <Button onClick={toggleEdit} color="success"><i class="fas fa-edit"></i> { isEditOpen ? "Save Edit" : "Edit This" }</Button> }
        </div>
        <p>
        { isEditOpen === true ? <Input type="textarea" name="text" defaultValue={user.desc ? user.desc : "Write something...."} id="exampleText" /> :
            (user.desc ? user.desc : "This user prefers to keep an air of mystery about themselves...") }
        </p>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default UserProfileModal;