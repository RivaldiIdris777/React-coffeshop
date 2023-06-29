import React from "react";
import { Link } from 'react-router-dom'

const BreadCrumb = () => {
  return (    
    <nav className="text-align-center" aria-label="breadcrumb">
        <ol className="breadcrumb arr-right ">
            <li className="breadcrumb-item">
                <Link href="">Home</Link>
            </li>        
            <li className="breadcrumb-item active" aria-current="page">
                Data
            </li>
        </ol>
    </nav>
    
  );
};

export default BreadCrumb;
