import React, { Component } from "react";
import {
    Breadcrumb,
    BreadcrumbItem  
  } from "reactstrap";
  import { Link } from "react-router-dom";

class Kidslessons extends Component{
    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>The page is under Construction</h2>
                    <hr />
                </div>
            </div>
           
        </div>
            
        );
    }
}

export default Kidslessons;