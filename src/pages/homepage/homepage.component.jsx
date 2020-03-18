import React from "react";
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
const HomePage = (props) => (
  
  <div className="homepage">
    <Directory />
    {console.log(props)}
  </div>
);

export default HomePage;