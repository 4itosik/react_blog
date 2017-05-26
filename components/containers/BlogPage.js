const posts = [
  {
    id: 1,
    text: "1 запись",
    image: {
      src: "https://lh3.googleusercontent.com/nYhPnY2I-e9rpqnid9u9aAODz4C04OycEGxqHG5vxFnA35OGmLMrrUmhM9eaHKJ7liB-=w300",
      alt: "1 запись"
    }
  },
  {
    id: 2,
    text: "2 запись",
    image: {
      src: "https://lh3.googleusercontent.com/nYhPnY2I-e9rpqnid9u9aAODz4C04OycEGxqHG5vxFnA35OGmLMrrUmhM9eaHKJ7liB-=w300",
      alt: "2 запись",
      width: 100,
      height: 100
    }
  },
  {
    id: 3,
    text: "3 запись",
    image: {
      src: "https://lh3.googleusercontent.com/nYhPnY2I-e9rpqnid9u9aAODz4C04OycEGxqHG5vxFnA35OGmLMrrUmhM9eaHKJ7liB-=w300",
      alt: "3 запись",
      width: 100,
      height: 100
    }
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