import "./styles.css";
import { useState, useEffect } from "react";

function App() {
  const [id, setID] = useState(1);
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  });

  const { title, body } = post;
  return (
    <div className="App">
      <h2>{title} </h2>
      <p>{body}</p>
      <input type="button" value={`Prev ${id}`} onClick={() => setID(id - 1)} />
      <input type="button" value={`Next ${id}`} onClick={() => setID(id + 1)} />
    </div>
  );
}

export default App;
