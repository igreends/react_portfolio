import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem  
  } from "reactstrap";
  import { Link } from "react-router-dom";

function Adultslessons(props){
    return <div className="container">
    <div className="row">
        <div className="col">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Adult Lessons</BreadcrumbItem>
            </Breadcrumb>
            <h2>The page is under Construction</h2>
            <hr />
        </div>
    </div>
   
</div>
}

export default Adultslessons;