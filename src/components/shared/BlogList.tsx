import { memo } from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }: any) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((item: any) => (
        <div key={item.id} className="blog-preview">
          <Link to={`/blogs/${item.id}`}>
            <h2>{item.title}</h2>
            <p>Written by {item.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default memo(BlogList);
