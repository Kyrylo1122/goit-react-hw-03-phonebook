import * as yup from 'yup';

export const scheme = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
  id: yup.string(),
});
