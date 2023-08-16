import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  // Hooks to deal with the route params and query string
  const params = useParams(); //to get the route params
  const [searchParams, setSearchParams] = useSearchParams(); //to get the query string(has side effects)
  const location = useLocation(); //to get the location object

  return <p>User {params.id}</p>;
};

export default UserDetail;
