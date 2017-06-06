const Like = ({post_id, count, incrementLikeCount}) => (
  <div className='count'>
    <p>Like: {count}</p>
    <button onClick={() => incrementLikeCount(post_id)}>+</button>
  </div>
)

Like.propTypes = {
  count: PropTypes.number
}

Like.defaultProps = {
  count: 0
}
