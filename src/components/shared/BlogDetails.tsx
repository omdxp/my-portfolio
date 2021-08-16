import { useParams } from "react-router-dom";
import useFetch from "../../utils/useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams<any>();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    })
      .then(() => {
        history.push("/");
      })
      .catch(() => {});
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
