class BlogList extends React.Component {
  render() {
    const { posts } = this.props;

    return DOM.div(
      null,
      _.map(
        posts,
        (post, key) => (
          React.createElement(BlogItem, { text: post.text, src: post.src, key: key })
        )
      )
    )
  }
}
