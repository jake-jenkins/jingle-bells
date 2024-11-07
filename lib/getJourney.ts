import path from "path";
import { promises as fs } from "fs";

type Content = {
  en: string,
  cy: string
}

export type Component = {
  id: string,
  type: string,
  href?: string,
  target?: string,
  validation?: string,
  label?: Content,
  title?: Content,
  content?: Content
}

type Stage = {
  name: string,
  title: Content,
  isForm: boolean,
  nextPage: string,
  components: Component[]
}

export type Journey = {
  name: string,
  stages: Stage[]
}

export async function getJourney(name: string, stageName: string) {

  const getData = await fs.readFile(
    path.join(process.cwd(), "journeys", `${name}.json`),
    "utf-8"
  );

  const data: Journey = JSON.parse(getData);

  const stageData = data.stages.filter(function (stage: Stage) {
    return stage.name === stageName
  })

  return {
    name: data.name,
    stage: stageData[0]
  }

}

async function getJourneySummary(name: string) {

  const getData = await fs.readFile(
    path.join(process.cwd(), "journeys", `${name}.json`),
    "utf-8"
  );

  const data = JSON.parse(getData);

  return {
    name: data.name,
    description: data.description,
    startPage: data.stages[0].name
  }

}

export async function getJourneys() {
  const filenames = await fs.readdir(path.join(process.cwd(), 'journeys'));
  const journeys = await Promise.all(filenames.map(async (filename) => {
    const journeyFilename = filename.replace('.json', '');
    const journeyDetails = await getJourneySummary(journeyFilename);
    return {
      slug: `${journeyFilename}/${journeyDetails.startPage}`,
      name: journeyDetails.name,
      description: journeyDetails.description
    }
  }))
  return journeys
}