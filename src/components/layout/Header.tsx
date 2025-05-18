
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserPlus, DollarSign, Users } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-platform-blue to-platform-teal p-2 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-platform-blue">InvestConnect</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/startups" className="text-gray-700 hover:text-platform-blue transition-colors">
            Startups
          </Link>
          <Link to="/investors" className="text-gray-700 hover:text-platform-blue transition-colors">
            Investors
          </Link>
          <Link to="/pricing" className="text-gray-700 hover:text-platform-blue transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-platform-blue transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="outline" className="hidden sm:flex">
            Sign In
          </Button>
          <Button className="bg-platform-blue hover:bg-platform-blue/90 flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            <span className="hidden sm:inline">Sign Up</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
