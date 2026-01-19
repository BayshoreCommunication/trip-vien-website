export default function PracticeBanner() {
  const items = [
    "Criminal Case",
    "Personal Injury Cases",
    "DUI Defense",
    "Immigration",
    "Criminal Case",
    "Personal Injury Cases",
    "DUI Defense",
    "Immigration",
  ];

  return (
    <section className="w-full overflow-hidden">
      {/* TOP WHITE MARQUEE BAR */}
      <div className="bg-white">
        <div className="max-w-[1640px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative overflow-hidden pb-4">

            {/* Marquee Track */}
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {[...items, ...items].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex items-center justify-center
                    min-w-[200px] md:min-w-[260px]
                    px-6
                    py-4 md:py-6
                    text-sm md:text-lg
                    font-medium
                    border-r border-gray-300
                    last:border-none
                  "
                >
                  {item}
                </div>
              ))}
            </div>

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
