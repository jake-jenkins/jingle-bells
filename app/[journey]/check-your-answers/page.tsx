import Link from "next/link";

export default async function CheckYourAnswersPage({
  params,
}: {
  params: Promise<{ journey: string }>;
}) {
  const journeySlug = (await params).journey;
  return (
    <>
      <h1 className="govuk-heading-l">Check your answers ({journeySlug})</h1>
      <p className="govuk-body">
        This page is a bit special, it needs to return and iterate over the blob
        object.
      </p>
      <Link href="/" className="govuk-button govuk-button--secondary">
        Go home
      </Link>
    </>
  );
}
