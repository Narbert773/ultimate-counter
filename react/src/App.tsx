import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

function App(): JSX.Element {
  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  useEffect(() => {
    getPosts();
  }, []);

  const [count, setCount] = useState(0);
  const doubleCount = useMemo(() => count * 2, [count]);

  const [posts, setPosts] = useState<Post[]>([]);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  async function getPosts() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const postData = response.data;
      setPosts(postData.slice(0, 10));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>hello</h1>
      <p>{count}</p>
      <p>{doubleCount}</p>
      <button type="button" onClick={incrementCount}>
        +
      </button>
      <button type="button" onClick={decrementCount}>
        -
      </button>
      <div>
        <ul>
          {posts?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
