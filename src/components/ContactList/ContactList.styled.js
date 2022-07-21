import styled from 'styled-components';
export const BtnDelete = styled.button`
  display: inline-flex;
  margin-left: auto;
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  padding: ${p => p.theme.space[3]}px;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;
export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  list-style-type: square;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
