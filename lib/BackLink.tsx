"use client";

import { useRouter } from "next/navigation";

export default function BackLink() {
  const router = useRouter();
  return <span onClick={() => router.back()} className="govuk-back-link">Back</span>;
}
