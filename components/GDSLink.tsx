import Link from "next/link";
import { ReactNode } from "react";

export default function GDSLink({href, children}: {href: string, children: ReactNode}) {
    return (
        <Link className="govuk-body govuk-link" href={href}>{children}</Link>
    )
}