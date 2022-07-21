import styled from 'styled-components';
import { Form } from 'formik';

export const FormikForm = styled(Form)`
  border: 1px dashed ${p => p.theme.colors.primary};
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  width: 250px;
`;
export const ErrorText = styled.p`
  color: red;
  font-size: ${p => p.theme.fontSizes.xs};
  font-style: italic;
`;
export const ButtonSubmit = styled.button`
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  padding: ${p => p.theme.space[3]}px;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;
