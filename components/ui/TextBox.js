const TextBox = ({children}) => (
  DOM.span(
    {},
    children
  )
);

TextBox.propTypes = {
  children: PropTypes.string.isRequired
}

TextBox.defaultProps = {
  children: "Default post text"
}
