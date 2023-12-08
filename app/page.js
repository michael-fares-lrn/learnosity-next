
import { getMessage, getAssessment } from "./lib/data"
import { SomeComponent } from "./ui/some-component";

export default async function Home() {
  const message = await getMessage();
  const assessment = await getAssessment();
  console.log(message)
  console.log(assessment)

  return (
    <main className="flex flex-col items-center justify-between p-3 gap-3">
      <h1 className="text-xl">Learnosity Next JS App (Server Side React) Example</h1>

      <p className="p-20 bg-gray-300 rounded-lg">
        Click on the API you would like to see
      </p>

      {/* <SomeComponent message={message}/> */}
    </main>
  )
}
