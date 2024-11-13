import Link from "next/link";
import { ReactNode } from "react";

export default function GDSButton({children, href}: {children: ReactNode, href?: string}) {
    if (href) {
        return <Link className="govuk-button" href={href}>{children}</Link>
    }
    else {
        return <button className="govuk-button">{children}</button>
    }
}