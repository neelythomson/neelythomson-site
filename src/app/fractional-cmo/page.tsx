import { permanentRedirect } from "next/navigation";

/**
 * The offer now lives on the homepage in full, so this route exists only to
 * keep previously shared links working. 308 preserves the fragment, so
 * /fractional-cmo#start still lands on the enquiry form.
 */
export default function FractionalCMOPage() {
  permanentRedirect("/");
}
