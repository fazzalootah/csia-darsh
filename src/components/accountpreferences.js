import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './firebase';


function accountPreferences() {
  function deleteAccount() {
    const user = firebase.auth().currentUser;

    user.delete().then(() => {
      // User deleted.
    }).catch((error) => {
      // An error ocurred
      // ...
    });
    
  }
  return (
    <div>
        <h4>Account Preferences</h4>
        <form onSubmit={deleteAccount} className='border p-3'>
        <h5>Danger Zone</h5>
        <Form>
        <Button variant="primary" type="submit">
        Delete Account
        </Button>
        </Form>
        </form>
    </div>
  )
}

export default accountPreferences