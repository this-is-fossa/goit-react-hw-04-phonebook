import React, {Component} from 'react';
import {nanoid} from 'nanoid';
import {Section} from '../Section/Section';
import {ContactForm} from '../ContactForm/ContactForm';
import {ContactList} from '../ContactList/ContactList';
import {FilterContacts} from '../FilterContacts/FilterContacts';
import {ContainerApp} from './App.styled';


export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({contacts: parsedContacts});

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFiltered = (e) => {
    this.setState({filter: e.currentTarget.value});
  };

  getVisibleContacts = () => {
    const {contacts, filter} = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const {filter, contacts} = this.state;

    return (
      <ContainerApp>
        <Section title='Phonebook'>
          <ContactForm contacts={contacts} onSubmit={this.addContact}/>
        </Section>
        <Section title='Contacts'>
          <FilterContacts value={filter} onChange={this.changeFiltered}/>
          <ContactList contacts={this.getVisibleContacts()} onDeleteContact={this.deleteContact}/>
        </Section>
      </ContainerApp>
    );
  }
}
