const BlogItem = ({post, incrementLikeCount}) => (
  DOM.div(
    {},
    React.createElement(Image, post.image),
    React.createElement(TextBox, {}, post.text),
    React.createElement(Meta, post.meta),
    React.createElement(Like,
 { post_id: post.id, count: post.meta.like_count, incrementLikeCount: incrementLikeCount })
  )
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    meta: PropTypes.shape({
      author: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
      likes: PropTypes.number
    }),
    image: PropTypes.shape(Image.propTypes)
  })
}
