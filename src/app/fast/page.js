import SlowComponent from "@/components/SlowComponent";
import Loading from "@/components/Loading";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <p>This is the fast page</p>
      <p>
        This will load the entire page quickly except for the slow component
      </p>
      <p>We`ll put our slow component in something called suspense</p>
      <Suspense fallback={<Loading />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
