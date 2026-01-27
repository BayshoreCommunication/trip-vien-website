export default function PracticeBanner() {
  const items = [
    // "Criminal Case",
    "Personal Injury Cases",
    "DUI Defense",
    "Immigration",
  ];

  return (
    <section className="w-full">
      {/* TOP WHITE BAR */}
      <div className="bg-white">
        <div className="max-w-[1640px] mx-auto px-4 md:px-6 lg:px-8 ">
          <div
            className="
              flex flex-col md:flex-row
              divide-y md:divide-y-0 md:divide-x
              divide-gray-300 pb-4 
            "
          >
            {items.map((item) => (
              <div
                key={item}
                className="flex-1 text-center py-4 md:py-6 text-sm md:text-lg font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HORIZONTAL GRAY BORDER */}
      <div className="w-full h-px bg-gray-300" />

      {/* BLACK SECTION */}
      <div className="bg-black">
        <div className="max-w-[1640px] mx-auto px-4 md:px-6 lg:px-8 py-8">
          <h2
            className="
              text-white text-center
              text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              tracking-widest
            "
          >
            JUSTICE, ELEVATED.
          </h2>
        </div>
      </div>
    </section>
  );
}
