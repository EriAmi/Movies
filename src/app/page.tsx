import { redirect } from "next/navigation";

export default function Home() {
  redirect("/movies");
  return <main></main>;
}
