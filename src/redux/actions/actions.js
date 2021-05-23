import { createAction } from '@reduxjs/toolkit';

const getAllContactsRequest = createAction('getAllContactsRequest');
const getAllContactsSuccess = createAction('getAllContactsSuccess');
const getAllContactsError = createAction('getAllContactsError');

const addContactRequest = createAction('addContactRequest');
const addContactSuccess = createAction('addContactSuccess');
const addContactError = createAction('addContactError');

const deleteContactRequest = createAction('deleteContactRequest');
const deleteContactSuccess = createAction('deleteContactSuccess');
const deleteContactError = createAction('deleteContactError');

const filterContacts = createAction('filterContacts');
const setFilteredContactsEmpty = createAction(
  'setFilteredContactsEmpty',
  () => ({
    payload: [],
  }),
);
const updateState = createAction('updateState');
const handleFilter = createAction('handleFilter');

export default {
  getAllContactsRequest,
  getAllContactsSuccess,
  getAllContactsError,

  addContactRequest,
  addContactSuccess,
  addContactError,

  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,

  filterContacts,
  setFilteredContactsEmpty,
  updateState,
  handleFilter,
};
