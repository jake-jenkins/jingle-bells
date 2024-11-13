import { getJourney } from "@/lib/getJourney";
import BackLink from "@/lib/BackLink";
import JingleBells from "@/components/JingleBells";

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
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {content.stage?.components.map((component: any) => (
          <JingleBells key={component.id} type={component.type} props={component.props} />
        ))}
    </>
  );
}
