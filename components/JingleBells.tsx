import { ReactNode } from "react";
import GDSLink from "./GDSLink";
import GDSButton from "./GDSButton";
import GDSErrorSummary from "./GDSErrorSummary";
import GDSTextarea from "./GDSTextarea";
import GDSHeading from "./GDSHeading";

export default function JingleBells({
  type,
  props,
}: {
  type: string;
  props: any;
}): ReactNode {
  switch (type) {
    case "link":
      return <GDSLink href={props.href}>{props.content.en}</GDSLink>;
    case "button":
      return <GDSButton href={props.href}>{props.content.en}</GDSButton>;
    case "paragraph":
      return <p className="govuk-body">{props.content.en}</p>;
    case "error-summary":
      return <GDSErrorSummary props={props} />;
    case "textarea":
      return <GDSTextarea props={props} />;
    case "heading":
      return <GDSHeading props={props} />;
    default:
      console.log(type);
      return null;
  }
}
