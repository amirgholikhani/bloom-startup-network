
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-platform-blue mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">صفحه مورد نظر یافت نشد</p>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            صفحه‌ای که به دنبال آن هستید وجود ندارد یا تغییر مکان داده است.
          </p>
          <Link to="/">
            <Button className="bg-platform-blue hover:bg-platform-blue/90">
              بازگشت به صفحه اصلی
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
