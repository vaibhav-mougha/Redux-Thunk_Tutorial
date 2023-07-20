import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavbarReduxThunk from "../Components/NavbarReduxThunk";
import { getPosts } from "../Redux/Post/Post.action";

const Posts = () => {
  const Post = useSelector((store) => store.Post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  // console.log('Post:', Post)

  return (
    <div>
      <div>
        <NavbarReduxThunk />
      </div>
      <h1
        style={{
          textDecoration: "underline",
        }}
      >
        Posts
      </h1>
      <div
        style={{
          border: "2px solid gray",
          width: "7%",
          margin: "auto",
          borderRadius: "2rem",
          padding: "1rem",
        }}
      >
        {Post.map((post) => (
          <ol style={{ listStyleType: "square" }} key={post.id}>
            <li>
              {" "}
              {post.id}. {post.message}
            </li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default Posts;
