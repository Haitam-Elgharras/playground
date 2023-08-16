import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  // Hooks to deal with the route params and query string
  const params = useParams(); //to get the route params
  const [searchParams, setSearchParams] = useSearchParams(); //to get the query string(has side effects)
  const location = useLocation(); //to get the location object
  console.log(params);

  return <p>User</p>;
};

export default UserDetailPage;
