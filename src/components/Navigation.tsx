import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // TODO: Replace with actual auth check
  const isLoggedIn = false;

  return (
    <nav className="fixed w-full bg-dark/95 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-gold font-poppins text-2xl font-bold">
            MarketAI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {!isLoggedIn ? (
              <>
                <Link to="/" className="text-white hover:text-gold transition-colors">
                  Home
                </Link>
                <Link to="/features" className="text-white hover:text-gold transition-colors">
                  Features
                </Link>
                <Link to="/pricing" className="text-white hover:text-gold transition-colors">
                  Pricing
                </Link>
                <Link to="/get-started">
                  <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-dark">
                    Get Started
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="text-white hover:text-gold transition-colors">
                  Dashboard
                </Link>
                <Link to="/campaign-builder" className="text-white hover:text-gold transition-colors">
                  Campaign Builder
                </Link>
                <Link to="/revenue-tracking" className="text-white hover:text-gold transition-colors">
                  Revenue Tracking
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-gold transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/"
                    className="text-white hover:text-gold transition-colors"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                  <Link
                    to="/features"
                    className="text-white hover:text-gold transition-colors"
                    onClick={toggleMenu}
                  >
                    Features
                  </Link>
                  <Link
                    to="/pricing"
                    className="text-white hover:text-gold transition-colors"
                    onClick={toggleMenu}
                  >
                    Pricing
                  </Link>
                  <Link to="/get-started" onClick={toggleMenu}>
                    <Button
                      variant="outline"
                      className="border-gold text-gold hover:bg-gold hover:text-dark w-full"
                    >
                      Get Started
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/dashboard"
                    className="text-white hover:text-gold transition-colors"
                    onClick={toggleMenu}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/campaign-builder"
                    className="text-white hover:text-gold transition-colors"
                    onClick={toggleMenu}
                  >
                    Campaign Builder
                  </Link>
                  <Link
                    to="/revenue-tracking"
                    className="text-white hover:text-gold transition-colors"
                    onClick={toggleMenu}
                  >
                    Revenue Tracking
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};