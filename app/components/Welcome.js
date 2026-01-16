/* Jenna's Component */

export default function Welcome() {
  return (
    <section>
      {/* Page Title */}
      <header>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Welcome to Walt Disney World vs Universal Studios!
        </h2>
      </header>

      {/* Text Content Section */}
      <section className="max-w-4xl mx-auto mb-10 text-center">
        <p className="mb-4">
          Your ultimate guide to comparing Walt Disney World and Universal
          Studios.
        </p>
        <p>
          Welcome to the ultimate showdown between two of Florida’s most iconic
          theme park destinations!
        </p>
        <p>
          If you’re planning a vacation and wondering which park experience is
          the best fit for you — you’re in the right place.
        </p>
        <br></br>
        <p>
          Below, we’ll compare both parks by highlighting standout rides,
          snacks, and entertainment you won’t want to miss.
        </p>
      </section>

      {/* Image Section */}
      <section className="flex flex-col md:flex-row gap-4 w-full px-4">
        <img
          src="/CinderellaCastle.jpg"
          alt="Cinderella's castle"
          className="w-full md:w-1/2 h-100 object-cover rounded-lg shadow-md"
        />
        <img
          src="/HogwartsCastle.jpg"
          alt="Hogwarts castle"
          className="w-full md:w-1/2 h-100 object-cover rounded-lg shadow-md"
        />
      </section>
    </section>
  );
}
