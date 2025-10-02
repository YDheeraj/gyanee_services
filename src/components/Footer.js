export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>© {new Date().getFullYear()} Ariska Services. All Rights Reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="#" className="hover:text-yellow-500">Facebook</a>
        <a href="#" className="hover:text-yellow-500">Instagram</a>
        <a href="#" className="hover:text-yellow-500">LinkedIn</a>
        <a href="#" className="hover:text-yellow-500">YouTube</a>
      </div>
    </footer>
  );
}
