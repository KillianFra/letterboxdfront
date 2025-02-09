import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter();
    const { id } = router.query;
    console.log(id);
  return (
    <div>
      <h1>Page {id}</h1>
    </div>
  );
}