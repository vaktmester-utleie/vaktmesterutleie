import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import Logo from '../header/logo'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-3">
            <div>
              <Logo variant="small" />
            </div>
          </div>
          <div>
            <p className="font-medium">Tenester</p>
            <ul className="flex flex-col gap-1 mt-3">
              <li>
                <Link
                  className="text-sm text-gray-600 hover:text-gray-900"
                  href="/"
                >
                  Heim
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-600 hover:text-gray-900"
                  href="/utleige"
                >
                  Utleige
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-600 hover:text-gray-900"
                  href="/prosjekt"
                >
                  Prosjekt
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-600 hover:text-gray-900"
                  href="/om-oss"
                >
                  Om oss
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-600 hover:text-gray-900"
                  href="/kontakt"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-medium">Kontakt</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5  shrink-0" />
                <span>
                  Vevleheiane 3<br />
                  5281 Valestrandfossen
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4  shrink-0" />
                <span>+47 471 77 466</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4  shrink-0" />
                <span>post@vaktmesterutleie.no</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-medium">Følg oss</p>
            <div className="flex gap-2">
              <a
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=100075706164014"
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="w-5 h-5"
                >
                  <circle
                    cx="128"
                    cy="128"
                    r="96"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                  <path
                    d="M168,88H152a24,24,0,0,0-24,24V224"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                  <line
                    x1="96"
                    y1="144"
                    x2="160"
                    y2="144"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                </svg>
              </a>
              <a
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/vaktmesterutleie/"
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="w-5 h-5"
                >
                  <circle
                    cx="128"
                    cy="128"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="16"
                  />
                  <rect
                    x="32"
                    y="32"
                    width="192"
                    height="192"
                    rx="48"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                  <circle cx="180" cy="76" r="12" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-gray-400">Org.nr: 922 629 102</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-400">
            © 2026 Sørås Vaktmesterutleie. Alle rettar reserverte.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              className="text-xs text-gray-400 hover:text-gray-600"
              href="/personvern"
            >
              Personvern
            </Link>
            <Link
              href="/om-oss"
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              Om oss
            </Link>
            <Link
              href="/kontakt"
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
