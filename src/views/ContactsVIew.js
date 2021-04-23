import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

import { contactsOperations, contactsSelectors } from '../redux/contacts';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <div className={barStyles}>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          {this.props.isLoadingContacts && <h1>Loading...</h1>}
          <Filter />

          <ContactList />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
