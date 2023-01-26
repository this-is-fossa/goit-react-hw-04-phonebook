import PropTypes from 'prop-types';
import { CardList, Card, DeleteBtn } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <CardList>
    {contacts.map(({ id, name, number }) =>
      <Card key={id}>
        <p>{name}: {number}</p>
        <DeleteBtn type='button' onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
      </Card>,
    )}</CardList>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
