import { FC } from "react";
import BlogList from "./BlogList";
import useFetch from "../../utils/useFetch";

const Home: FC = (): JSX.Element => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={"All blogs"} />}
    </div>
  );
};

export default Home;
