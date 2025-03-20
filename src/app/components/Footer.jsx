"use client";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full flex flex-row items-center justify-between">
            <p className="text-sm">&copy; {new Date().getFullYear()} Pranj Patel.</p>
            <p className="text-gray-400 text-xs text-right">
              All product names, logos, and brands are property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}