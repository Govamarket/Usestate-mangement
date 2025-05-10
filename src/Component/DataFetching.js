import { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({}); // changing from array to an empty object, change the auctal state and state function
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromBttonClick] = useState(1);

  const handleClick = () => {
    setIdFromBttonClick(id);
  };

  // Method of fetching data using axios and useEffect to update the API
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`) //changing to backtik to pass an expression
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]); // empty dependent list (data fetching the data only once on component)
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}
// How to fetch individual post by passsing the post to the get requesrt
export default DataFetching;
