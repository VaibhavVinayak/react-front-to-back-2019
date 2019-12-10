import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/Users";

const Home = () => (
  <div>
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  </div>
);
export default Home;
