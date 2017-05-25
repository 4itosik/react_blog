const posts = [
  {
    text: "1 запись",
    src: "https://lh3.googleusercontent.com/nYhPnY2I-e9rpqnid9u9aAODz4C04OycEGxqHG5vxFnA35OGmLMrrUmhM9eaHKJ7liB-=w300"
  },
  {
    text: "2 запись",
    src: "https://lh3.googleusercontent.com/nYhPnY2I-e9rpqnid9u9aAODz4C04OycEGxqHG5vxFnA35OGmLMrrUmhM9eaHKJ7liB-=w300"
  },
  {
    text: "3 запись",
    src: "https://lh3.googleusercontent.com/nYhPnY2I-e9rpqnid9u9aAODz4C04OycEGxqHG5vxFnA35OGmLMrrUmhM9eaHKJ7liB-=w300"
  }
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts };
  }

  render() {
    const { posts } = this.state;

    return React.createElement(BlogList, { posts: posts })
  }
}
