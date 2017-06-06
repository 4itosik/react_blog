const posts = [
  {
    id: 1,
    text: "1 запись",
    image: {
      src: "https://lh3.googleusercontent.com/nYhPnY2I-e9rpqnid9u9aAODz4C04OycEGxqHG5vxFnA35OGmLMrrUmhM9eaHKJ7liB-=w300",
      alt: "1 запись"
    },
    meta: {
      author: "Иван",
      createdAt: "2013-05-12",
      updatedAt: "2013-05-12",
      like_count: 40
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
    },
    meta: {
      author: "Иван",
      createdAt: "2013-05-12",
      updatedAt: "2013-05-12",
      like_count: 30
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
    },
    meta: {
      author: "Иван",
      createdAt: "2013-05-12",
      updatedAt: "2013-05-12",
      like_count: 20
    }
  }
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: posts };
    this.incrementLikeCount = this.incrementLikeCount.bind(this);
  }

  incrementLikeCount(post_id) {
    const { posts } = this.state;

    const index = _.findIndex(posts, {id: post_id});

    if (index != -1) {
      posts[index].meta.like_count = posts[index].meta.like_count + 1;

      this.setState({
       posts: posts
      });
    }
  }

  render() {
    return(
      <div>
        <BlogList posts={this.state.posts} incrementLikeCount={this.incrementLikeCount}/>
        <Chart columns={[...this.state.posts.map( (post) => [post.text, post.meta.like_count]) ]}/>
      </div>
    )
  }
}
