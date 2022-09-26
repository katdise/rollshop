import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="-1" y="280" rx="10" ry="10" width="280" height="35" />
    <rect x="-1" y="332" rx="10" ry="10" width="280" height="88" />
    <rect x="5" y="442" rx="10" ry="10" width="95" height="30" />
    <rect x="122" y="435" rx="25" ry="25" width="155" height="45" />
    <circle cx="82" cy="87" r="57" />
    <circle cx="195" cy="87" r="57" />
    <circle cx="82" cy="201" r="57" />
    <circle cx="195" cy="201" r="57" />
  </ContentLoader>
);

export default Skeleton;
