import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Formik, Field, ErrorMessage } from 'formik';
import { FormikForm, ErrorText, ButtonSubmit } from './Contactform.styled';
import { scheme } from 'components/const/Scheme';
import { initialValue } from 'components/const/InitialValue';

export class ContactForm extends Component {
  state = { ...initialValue };
  handleSetContacts = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (value, { resetForm }) => {
    const id = nanoid();
    value.id = id;
    this.props.onSubmitForm(value);
    resetForm();
  };
  validateName = value =>
    !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(value)
      ? "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      : '';
  validateTel = value =>
    !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
      value
    )
      ? 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      : '';
  render() {
    const nameId = nanoid();
    const telId = nanoid();

    const FormError = ({ name }) => {
      return (
        <ErrorMessage
          name={name}
          render={message => <ErrorText>{message}</ErrorText>}
        />
      );
    };
    return (
      <Formik
        onSubmit={this.handleSubmit}
        initialValues={initialValue}
        validationSchema={scheme}
      >
        <FormikForm>
          <label htmlFor={nameId}>Name</label>
          <Field
            type="text"
            validate={this.validateName}
            name="name"
            id={nameId}
          />
          <FormError name="name" />
          <label htmlFor={telId}>Phone number</label>
          <Field
            type="tel"
            validate={this.validateTel}
            name="number"
            id={telId}
          />
          <FormError name="number" />

          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </FormikForm>
      </Formik>
    );
  }
}
