import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default ErrorPage;
