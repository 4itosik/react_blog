const BlogItem = ({post}) => (
  DOM.div(
    {},
    React.createElement(Image, post.image),
    React.createElement(TextBox, {}, post.text)
  )
);