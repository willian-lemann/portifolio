"use client";

import { EnvelopeIcon } from "@heroicons/react/24/solid";

export function ContactMe() {
  function handleOpenEmail() {
    const mailTo = process.env.NEXT_PUBLIC_CONTACT_EMAIL_TO;
    const subject = "I want to request a service";
    const body = "Hi I want to request a service...";

    const url = `mailto:${mailTo}?subject=${subject}&body=${body}`;
    window.location.href = url;
  }

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={handleOpenEmail}
    >
      <EnvelopeIcon className="h-6 w-6" />
      <span>Contact me</span>
    </div>
  );
}
