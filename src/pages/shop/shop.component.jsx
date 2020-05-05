import React, { useEffect, lazy, Suspense } from "react";

// import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

import { Route } from "react-router-dom";

// import CollectionPageContainer from "../collection/collection.container";

// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";

import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import Spinner from "../../components/spinner/spinner.component";

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);
const CollectionPageContainer = lazy(() =>
  import("../collection/collection.container")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner></Spinner>}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        ></Route>
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
