import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>This is welcome page</h1>
      <Route path="/welcome/new-user">
        <p>Linked the path for welcoming new user to demonstrate nested routes</p>
      </Route>
    </section>
  );
}; 

export default Welcome;
