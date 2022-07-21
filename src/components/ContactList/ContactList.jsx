import { Box } from 'components/Box/Box';
import { nanoid } from 'nanoid';
import { BtnDelete, ContactItem } from './ContactList.styled';
import PropTypes from 'prop-types';
export const ContactList = ({ contacts, deleteCon }) => {
  return (
    <Box as="ul" width="250px" textAlign="left" p={0}>
      {contacts.map(e => {
        const keyId = nanoid();
        return (
          <ContactItem key={keyId} id={e.id}>
            {e.name}: {e.number}
            <BtnDelete
              type="button"
              onClick={() => {
                deleteCon(e.id);
              }}
            >
              Delete
            </BtnDelete>
          </ContactItem>
        );
      })}
    </Box>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteCon: PropTypes.func.isRequired,
};
