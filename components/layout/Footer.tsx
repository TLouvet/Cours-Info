import Link from 'next/link';
import { FiMail, FiGlobe, FiGithub } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Instructor Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Instructeur
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              Thomas Louvet
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Lead Dev Fullstack chez Akkodis
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:t.louvet@iut.univ-paris8.fr"
                className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                <FiMail className="w-4 h-4" />
                t.louvet@iut.univ-paris8.fr
              </a>
              <a
                href="https://tlouvet.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                <FiGlobe className="w-4 h-4" />
                tlouvet.com
              </a>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Technologies
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Frontend: React / NextJS</li>
              <li>Backend: NodeJS / NestJS</li>
              <li>Langage: TypeScript</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Liens utiles
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400"
                >
                  Ressources
                </Link>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400"
                >
                  MDN Web Docs
                </a>
              </li>
              <li>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400"
                >
                  React Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://moodle.iut.univ-paris8.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400"
                >
                  Moodle IUT Paris 8
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} IUT Paris 8 - R4A10 Compléments Web
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Usage éducatif uniquement
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
