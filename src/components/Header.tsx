function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">My App</h1>
          <div className="space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
