import { useSelector } from 'react-redux';
import ContactList from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import { selectIsLoading, selectError } from 'redux/selectors';
import CircularProgress from '@mui/material/CircularProgress';

export const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <ContactForm />
      <Filter />
      {isLoading && !error && (
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
          }}
          size={40}
          thickness={4}
        />
      )}
      <ContactList />
    </>
  );
};
