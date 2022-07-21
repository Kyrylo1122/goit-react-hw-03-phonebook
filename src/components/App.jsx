import { Component } from 'react';
import { ContactForm } from './ContactForm/Contactform';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Box } from './Box/Box';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  onSubmitForm = data => {
    const isExist = this.isExistedName(data.name);
    if (isExist) {
      alert('Name already exist');
      return;
    }
    const newCon = this.state.contacts;
    newCon.push(data);
    this.setState({ contacts: newCon });
    // this.setState(p => p.contacts.push(data));
  };
  isExistedName = name => this.state.contacts.map(e => e.name).includes(name);

  deleteContact = id => {
    this.setState(p => ({ contacts: p.contacts.filter(e => e.id !== id) }));
  };
  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = contacts.filter(e =>
      e.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Box display="flex">
        <Box ml="auto" mr="auto" textAlign="center">
          <h1>Phonebook</h1>
          <ContactForm onSubmitForm={this.onSubmitForm} />
          <h2>Contacts</h2>
          <Filter changeFilter={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            deleteCon={this.deleteContact}
          />
        </Box>
      </Box>
    );
  }
}
export default App;
