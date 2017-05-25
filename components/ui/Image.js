const Image = ({src, width, height, alt}) => (
  React.createElement(
    'img',
    { src: src, width: width, height: height, alt: alt }
  )
);
