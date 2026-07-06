import { Suspense } from "react";
import GateForm from "./GateForm";

export const metadata = {
  title: "Gated | Human OS",
};

export default function GatePage() {
  return (
    <Suspense>
      <GateForm />
    </Suspense>
  );
}
