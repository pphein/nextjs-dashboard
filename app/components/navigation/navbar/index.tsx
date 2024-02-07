import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import AcmeLogo from "@/app/ui/acme-logo";

const Navbar = ({
    toggle
}: {toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <AcmeLogo />
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/blogs">
                  <p>Blogs</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            <Button toggle={toggle}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;