import { getJourney } from "@/lib/getJourney";
import type { Component } from "@/lib/getJourney";
import Link from "next/link";
import BackLink from "@/lib/BackLink";

export default async function JourneyPage({
  params,
}: {
  params: Promise<{ journey: string; stage: string }>;
}) {
  const journeySlug = (await params).journey;
  const stageName = (await params).stage;
  const content = await getJourney(journeySlug, stageName);

  return (
    <>
      <BackLink />
      <h1 className="govuk-heading-l">
        {content.name} &gt; {content.stage?.name}
      </h1>
      <ul className="govuk-list govuk-list--bullet">
        {content.stage?.components.map((component: Component) => (
          <li key={component.id}>{component.type}</li>
        ))}
      </ul>
      <Link href={content.stage?.nextPage || "#"} className="govuk-button">
        Continue
      </Link>
    </>
  );
}
