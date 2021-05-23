import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contactsReducer;
const getFilter = state => state.filterReducer;
const getFilteredContacts = state => state.filteredContactsReducer;
const getLoader = state => state.loader;

// const filteredContacts = (state, value) => {
//   return getContacts(state).filter(
//     contact => contact.name.toLowerCase() === value.toLowerCase(),
//   );
// };

// const filterStateContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   return contacts.filter(contact => {
//     return contact.name.toLowerCase().includes(filter.toLowerCase());
//   });
// };

const filterStateContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  },
);

export default {
  getContacts,
  getFilter,
  getFilteredContacts,
  filterStateContacts,
  getLoader,
};
