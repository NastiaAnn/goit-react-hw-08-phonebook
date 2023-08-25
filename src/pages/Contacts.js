import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'components/Form';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { Oval } from 'react-loader-spinner';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1
        style={{
          fontSize: '25px',
          fontWeight: 600,
          marginTop: '0px',
          marginBottom: '15px',
          color: 'red',
        }}
      >
        Phonebook
      </h1>
      <Form />
      <h2
        style={{
          fontSize: '25px',
          fontWeight: 600,
          marginTop: '30px',
          marginBottom: '10px',
        }}
      >
        Contacts
      </h2>
      <Filter />
      {isLoading && !error && (
        <Oval
          height={40}
          width={40}
          color="#ff4500"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#808080"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      )}
      <ContactList />
    </div>
  );
}
