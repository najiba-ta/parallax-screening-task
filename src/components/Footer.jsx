import {Code2, Heart, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 md:flex-row">

        {/* Left */}
        <p>
          © {new Date().getFullYear()} Item Calculator · Built for Parallax Labs Screening
        </p>

        {/* Right */}
        <div className="flex items-center gap-6">

          <div className="flex items-center gap-1">
            <Code2 className="h-4 w-4 text-gray-600" />
            <span className="text-gray-600">Next.js</span>
          </div>

          <div className="flex items-center gap-1">
            <Heart className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">Tailwind</span>
          </div>

          <a
            href="https://github.com/najiba-ta/parallax-screening-task"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-600 transition hover:text-gray-900"
          >
            <Globe className="h-4 w-4" />
            <span>GitHub</span>
          </a>

        </div>
      </div>
    </footer>
  );
}