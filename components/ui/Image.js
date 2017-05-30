const Image = ({src, width, height, alt}) => (
  React.createElement(
    'img',
    { src, width, height, alt }
  )
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}

Image.defaultProps = {
  src: "https://lh3.googleusercontent.com/nYhPnY2I-e9rpqnid9u9aAODz4C04OycEGxqHG5vxFnA35OGmLMrrUmhM9eaHKJ7liB-=w300",
  alt: "Default Alt",
  width: 100,
  height: 100
}
