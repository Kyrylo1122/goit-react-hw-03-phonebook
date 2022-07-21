import { FilterInput } from './Filter.style';
import PropTypes from 'prop-types';
export const Filter = ({ changeFilter }) => {
  return (
    <>
      <p>Find contact by name</p>
      <FilterInput onChange={changeFilter}></FilterInput>
    </>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
