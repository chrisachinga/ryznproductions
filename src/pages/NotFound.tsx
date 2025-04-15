
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout title="Page Not Found">
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
