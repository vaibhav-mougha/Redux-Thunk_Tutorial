import React, { useEffect } from "react";
import { getFeeds } from "../Redux/Feeds/Feeds.action";
import { useSelector, useDispatch } from "react-redux";
import NavbarReduxThunk from "../Components/NavbarReduxThunk";

const Feeds = () => {
  const dispatch = useDispatch();
  const Feeds = useSelector((store) => store.Feed.Feeds);

  useEffect(() => {
    dispatch(getFeeds());
  }, []);
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
        Feeds
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
        {Feeds.map((post) => (
          <ul key={post.id}>
            <li>{post.message}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Feeds;
