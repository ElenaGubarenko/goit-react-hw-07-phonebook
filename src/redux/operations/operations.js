import actions from '../actions/actions';
import axios from 'axios';

const getAllContacts = () => dispatch => {
  dispatch(actions.getAllContactsRequest());
  axios
    .get('http://localhost:3000/contacts')
    .then(answer => dispatch(actions.getAllContactsSuccess(answer.data)))
    .catch(error => dispatch(actions.getAllContactsError(error)));
};

const addContact = contact => dispatch => {
  dispatch(actions.addContactRequest());
  axios
    .post('http://localhost:3000/contacts', contact)
    .then(answer => dispatch(actions.addContactSuccess(answer.data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`http://localhost:3000/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};

export default {
  getAllContacts,
  addContact,
  deleteContact,
};
