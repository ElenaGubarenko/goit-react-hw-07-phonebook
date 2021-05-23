import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';
import { connect } from 'react-redux';
// import actions from '../redux/actions/actions';
import operations from '../redux/operations/operations';
import selectors from '../redux/selectors/selectors';

class ContactsList extends Component {
  render() {
    return (
      <ul className={styles.ContactsList}>
        {(this.props.filter !== ''
          ? this.props.filteredContacts
          : this.props.contacts
        ).map(contact => {
          // console.log(contact.id);
          // console.log(this.props.contacts);
          return (
            <li className={styles.ContactListItem} key={uuidv4()}>
              {contact.name}: {contact.number}
              <button
                className={styles.Delete}
                onClick={() => this.props.deleteContact(contact.id)}
                type="button"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

// ContactsList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   deleteContact: PropTypes.func,
// };

const mapStateToProps = state => ({
  contacts: selectors.getContacts(state),
  // contacts: state.contactsReducer,
  filter: selectors.getFilter(state),
  filteredContacts: selectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
