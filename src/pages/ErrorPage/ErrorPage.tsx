import { ErrorResponse, useRouteError } from "react-router-dom";
import classes from "./ErrorPage.module.css";

function ErrorPage() {
  const error = useRouteError() as ErrorResponse;

  return (
    <div id={classes.errorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.statusText}</p>
    </div>
  );
}

export default ErrorPage;
