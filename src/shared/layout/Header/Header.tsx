import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { assets } from "@/shared/assets/assets";

const menuItems = [
  { title: "Destinations", path: "/" },
  { title: "Activities", path: "/list" },
  { title: "USD", path: "/services" },
  { title: "Sign up", path: "/signup" },
  { title: "Log in", path: "/login" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <span className="text-2xl font-bold text-primary">
                <img src={assets.logo} alt="notFound" />
              </span>
            </Link>
          </div>

          {/* desktop menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-6">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title} >
                    <NavigationMenuLink asChild >
                      <Link to={item.path} className={`font-semibold text-base ${item.path === "/login" ? "bg-secondaryDesign flex justify-center items-center text-white w-[83px] h-[44px] rounded-[200px] hover:bg-[#eb662be0]" : "text-primaryDesign hover:text-[#000000fa]"}`}>{item.title}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* mobile menu  */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px]">
                <div className="flex flex-col gap-4 mt-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="text-lg font-medium hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}