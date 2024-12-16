// src/pages/NotFound.jsx
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import { useEffect } from 'react';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page after a brief delay
    const timeout = setTimeout(() => {
      navigate('/', { replace: true });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <h2 className="mt-2 text-3xl font-bold text-gray-900">Page not found</h2>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-8">
          <Link to="/">
            <Button variant="primary" size="lg">
              Go back home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}