import { getJourneys, Journey } from "@/lib/getJourney";
import Link from "next/link";

export default async function Home() {
  const journeys = await getJourneys()
  return (
   <>
   <h1 className="govuk-heading-xl">Journey List</h1>
   <div id="journey-tiles">
   {journeys.map((journey: Journey) => (
    <Link key={journey.name} href={journey.slug}>
      <span className="govuk-heading-s">{journey.name}</span>
      <p className="govuk-body">{journey.description}</p>
    </Link>
   ))}
   </div>
   </>
  );
}
