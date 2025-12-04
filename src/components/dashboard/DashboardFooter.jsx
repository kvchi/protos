
import { Link } from 'react-router-dom'

export default function DashboardFooter() {
  return (
     <footer className="w-full bg-primary py-4 flex items-center justify-start px-4 md:px-20 text-white gap-6">

      <h2 className="text-lg font-bold cursor-pointer">
        Protos
      </h2>

      <div className="md:ml-auto flex items-center gap-1.5 md:gap-4 text-xs md:text-sm md:pr-40">
        <Link to="/privacy" className="hover:underline">
          Privacy Policy
        </Link>

        <span className="text-gray-300">|</span>

        <Link to="/terms" className="hover:underline">
          Terms & Conditions
        </Link>

        <span className="text-gray-300">|</span>

        <Link to="/" className="hover:underline">
          Home
        </Link>
      </div>
    </footer>
  )
}
