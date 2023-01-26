import PropTypes from 'prop-types';
import { Title, Input } from './FilterContacts.styled';

export const FilterContacts = ({ value, onChange }) => {
  return (
    <Title>Find contacts by name
      <Input
        type='text'
        value={value}
        onChange={onChange} />
    </Title>
  );
};

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
