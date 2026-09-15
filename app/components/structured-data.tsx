import JsonLd from "./json-ld";
import { siteGraph } from "../lib/schema";

export default function StructuredData() {
  return <JsonLd data={siteGraph} />;
}
