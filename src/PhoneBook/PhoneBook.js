// import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import Filter from '../Filter';
import ContactsList from '../ContactsList';
import ContactForm from '../ContactForm';
import Container from '../Container';
import { connect } from 'react-redux';
import actions from '../redux/actions/actions';
import operations from '../redux/operations/operations';
import selectors from '../redux/selectors/selectors';

class PhoneBook extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <ContactForm />
        <h1>Contacts</h1>
        {this.props.loader ? <h2>Loading...</h2> : null}
        <Filter />
        <ContactsList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  contacts: selectors.getContacts(state),
  filter: selectors.getFilter(state),
  filteredContacts: selectors.getFilteredContacts(state),
  loader: selectors.getLoader(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.getAllContacts()),
  filterContacts: value => dispatch(actions.filterContacts(value)),
  setFilteredContactsEmpty: () => dispatch(actions.setFilteredContactsEmpty()),
  handleFilter: value => dispatch(actions.handleFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
