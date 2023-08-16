import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>
      {/* to prevent the default behaviour or loading an entire page */}
      <Link to="/users">Users</Link>
    </>
  );
};

export default HomePage;
