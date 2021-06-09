import React from "react";
import Table from "./Table";

class PostClass extends React.Component {
  state = {
    posts: [],
    loading: true,
  };

  componentDidMount() {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const fetchedPosts = await response.json();
        this.setState({ posts: fetchedPosts, loading: false });
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }

  render() {
    const column = [
      { header: "id", attribute: "id" },
      { header: "userID", attribute: "userId" },
      { header: "title", attribute: "title" },
      { header: "body", attribute: "body" },
    ];

    const { posts, loading } = this.state;
    return (
      <div>
        {loading ? <p>Loading...</p> : <Table column={column} data={posts} />}
      </div>
    );
  }
}
export default PostClass;
