import SiteHeader from "./components/SiteHeader.js";
import Snacks from "./components/Snacks.js";
import Rides from "./components/Rides.js";
import Welcome from "./components/Welcome.js";

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Welcome />
      <Rides />
      <Snacks />
    </main>
  );
}
