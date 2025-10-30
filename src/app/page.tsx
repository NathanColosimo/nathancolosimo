import { Dock } from "@/components/dock";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-center h-screen w-full">
        <Dock />
      </header>
      <main className="flex items-center justify-center h-screen w-full">
        <h1 className="text-4xl font-bold">Nathan Colosimo</h1>
      </main>
    </>
  );
}
