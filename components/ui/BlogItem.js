const BlogItem = (props) => (
  DOM.div(
    {},
    React.createElement(Image, {src: props.src, width: 100, width: 100, alt: "foo"}),
    React.createElement(TextBox, {}, props.text)
  )
);
