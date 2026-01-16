export default function Rides() {
  return (
    <section className="py-8 px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Best Rides at Each Park
      </h2>

      {/* Walt Disney World */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Walt Disney World</h3>
        <p className="mb-2 text-gray-600">
          Here are some of the most beloved rides across Disney’s parks:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Space Mountain</strong> — Classic high-speed indoor roller
            coaster
          </li>
          <li>
            <strong>Avatar Flight of Passage</strong> — Stunning 3D flying
            experience
          </li>
          <li>
            <strong>Seven Dwarfs Mine Train</strong> — Family-friendly coaster
            with great storytelling
          </li>
          <li>
            <strong>Haunted Mansion</strong> — Spooky and fun for all ages
          </li>
          <li>
            <strong>Slinky Dog Dash</strong> — Smooth and playful coaster in Toy
            Story Land
          </li>
        </ul>
      </div>

      {/* Universal Studios Florida */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Universal Studios Florida
        </h3>
        <p className="mb-2 text-gray-600">
          Universal is all about blockbuster thrills:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Harry Potter and the Escape from Gringotts</strong> —
            Multi-dimensional dark ride
          </li>
          <li>
            <strong>The Amazing Adventures of Spider-Man</strong> — Innovative
            motion ride
          </li>
          <li>
            <strong>Hagrid’s Magical Creatures Motorbike Adventure</strong> —
            Exciting storytelling coaster
          </li>
          <li>
            <strong>Transformers: The Ride-3D</strong> — Immersive action ride
          </li>
          <li>
            <strong>The Incredible Hulk Coaster</strong> — High-speed thrill
            ride
          </li>
        </ul>
      </div>
    </section>
  );
}
