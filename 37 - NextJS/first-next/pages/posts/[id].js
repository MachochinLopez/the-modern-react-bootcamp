import { useRouter } from 'next/router';
import axios from "axios";

const Post = ({ comments }) => {
  const router = useRouter();
  const { id } = router.query;
  
  return (
    <div>
      <h1>Post: {id}</h1>
      <h2>Comments:</h2>
      {comments.map(comment => {
        const { id, email, body } = comment;
        
        return (
          <div key={id}>
            <p style={{ fontWeight: "bold" }}>{email}</p>
            <p>{body}</p>
          </div>
        )
      })}
    </div>
  );
}

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);
  const { data } = res;
  console.log(data)
  return { comments: data };
};

export default Post;