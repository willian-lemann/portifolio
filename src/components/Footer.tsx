import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Navigation } from "./Navigation";

export function Footer() {
  return (
    <footer className="container fixed bottom-0 bg-black left-1/2 -translate-x-1/2 text-white py-8 flex items-center justify-end">
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
