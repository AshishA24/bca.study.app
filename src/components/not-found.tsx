import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-4xl italic tracking-tight">Lost the page</p>
      <p className="mt-3 max-w-sm text-sm text-muted">
        That path is not in the syllabus. Return to the subjects.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex h-11 items-center rounded-md bg-accent px-4 text-sm font-medium text-bg"
      >
        Liquid Study
      </Link>
    </div>
  );
}
