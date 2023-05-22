import { EnvelopeIcon } from "@heroicons/react/24/solid";

export function Footer() {
  return (
    <footer className="md:container bg-black text-white py-8 px-8 flex items-center justify-end">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 w-full">
        <div className="flex items-center gap-2">
          <EnvelopeIcon className="h-6 w-6" />
          <p> willianleman@gmail.com</p>
        </div>
        <p>© 2023 All Rights Reserved.</p>
      </div>
    </footer>
  );
}
