import React from "react";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";

import { Route } from "react-router-dom";

import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
    <Route
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
    ></Route>
  </div>
);

export default ShopPage;
