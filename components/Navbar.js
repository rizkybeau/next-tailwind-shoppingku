import React from 'react';
import Link from 'next/link';
export default function Navbar() {
  //header reusable component
  return (
    <div>
      <header>
        <nav className="flex h-12 items-center px-4 justify-between shadow-md">
          <Link href="/">
            <a className="text-lg font-bold">Shoppingku</a>
          </Link>
          <div>
            <Link href="/cart">
              <a className="p-2">Cart</a>
            </Link>
            <Link href="/login">
              <a className="p-2">Login</a>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
