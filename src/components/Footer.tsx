import { EnvelopeIcon } from "@heroicons/react/24/solid";

export function Footer() {
  return (
    <footer className="md:container bg-black text-white py-8 px-8 md:px-0 flex items-center justify-end">
      <div className="flex items-center justify-between w-full">
        <p>© 2023 All Rights Reserved.</p>
        <div className="flex items-center gap-2">
          <EnvelopeIcon className="h-6 w-6" />
          <p> willianleman@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
