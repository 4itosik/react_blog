const Image = ({src, width = 100, height = 100, alt}) => (
  React.createElement(
    'img',
    { src, width, height, alt }
  )
);