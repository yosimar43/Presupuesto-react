import PropTypes from 'prop-types';

export const Error = ({ message }) => (
 <p className="alert alert-danger error">{message}</p>
);

Error.prototype = {
  message: PropTypes.string.isRequired
}