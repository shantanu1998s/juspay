import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";
import { capitalizeWords } from "../../utils/utils.ts";

interface BreadcrumbComponentProps {
  divider?: string;
}

const BreadcrumbNavigation: React.FC<BreadcrumbComponentProps> = ({ divider = ">" }) => {
  const currentLocation = useLocation();
  const pathSegments = currentLocation.pathname.split("/").filter((segment) => segment);

  useEffect(() => {
    console.log("Breadcrumb Navigation rendered");
  }, []);

  return (
    <nav aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <Link to="/" className="breadcrumb-link breadcrumb-home">
            Home
          </Link>
          {pathSegments.length > 0 && (
            <span className="breadcrumb-divider">{divider}</span>
          )}
        </li>
        {pathSegments.map((segment, idx) => {
          const currentPath = `/${pathSegments.slice(0, idx + 1).join("/")}`;
          const isFinalSegment = idx === pathSegments.length - 1;

          return (
            <li key={currentPath} className="breadcrumb-item">
              {!isFinalSegment ? (
                <Link to={currentPath} className="breadcrumb-link">
                  {capitalizeWords(decodeURIComponent(segment))}
                </Link>
              ) : (
                <span aria-current="page" className="breadcrumb-current">
                  {capitalizeWords(decodeURIComponent(segment))}
                </span>
              )}
              {!isFinalSegment && (
                <span className="breadcrumb-divider">{divider}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadcrumbNavigation;
