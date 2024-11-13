export default function GDSHeading({ props }: { props: any }) {
  switch (props.level) {
    case "h1":
      return <h1 className="govuk-heading-l">{props.content.en}</h1>;
    case "h2":
      return <h2 className="govuk-heading-m">{props.content.en}</h2>;
    case "h3":
      return <h3 className="govuk-heading-s">{props.content.en}</h3>;
    case "h4":
      return <h4 className="govuk-heading-s">{props.content.en}</h4>;
    case "h5":
      return <h5 className="govuk-heading-s">{props.content.en}</h5>;
  }
  return (
    <>
      <p>not implemented</p>
    </>
  );
}
