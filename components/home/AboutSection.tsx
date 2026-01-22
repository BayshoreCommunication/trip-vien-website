// "use client";

// import Image from "next/image";
// import Button from "components/shared/Button";
// import { useRef } from "react";

// export default function AboutSection() {
//   const rightScrollRef = useRef<HTMLDivElement>(null);

//   /* 🔑 ONLY redirect wheel when scrolling on IMAGE */
//   const handleImageWheel = (e: React.WheelEvent) => {
//     if (!rightScrollRef.current) return;

//     const el = rightScrollRef.current;

//     const atTop = el.scrollTop === 0;
//     const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

//     // content শুরু বা শেষ হলে → page scroll allow
//     if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
//       return;
//     }

//     // 🔒 page scroll বন্ধ
//     e.preventDefault();

//     // ✅ smooth scroll
//     el.scrollBy({
//       top: e.deltaY,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="relative h-[220vh] px-4 md:px-6 lg:px-8 py-8">
//       <div className="max-w-[1640px] mx-auto h-full">
//         {/* STICKY AREA */}
//         <div className="sticky top-48  flex items-center">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
//             {/* LEFT IMAGE (ONLY THIS CAPTURES WHEEL) */}
//             <div
//               className="relative h-[520px] rounded-[20px] overflow-hidden"
//               onWheel={handleImageWheel}
//             >
//               <Image
//                 src="/images/home/about/img.png"
//                 alt="About"
//                 width={1000}
//                 height={800}
//                 priority
//                 className="object-cover object-top w-full h-full"
//               />
//             </div>

//             {/* RIGHT CONTENT (SCROLL TARGET) */}
//             <div
//               ref={rightScrollRef}
//               className="
//                 h-[720px]
//                 overflow-y-auto
//                 pr-4
//                 space-y-32
//                 no-scrollbar
//               "
//             >
//               {/* BLOCK 1 */}
//               <div>
//                 <span className="inline-block mb-4 border border-gray-400 rounded-full px-4 py-1">
//                   About Us
//                 </span>

//                 <h2 className="text-3xl md:text-4xl xl:text-6xl mb-6">
//                   Dedicated to <br /> Making a Difference
//                 </h2>

//                 <p className="text-gray-700 mb-4">
//                   At Trip Vien Law we set out to create a unique law firm where
//                   outstanding representation and humanity go hand in hand.
//                 </p>

//                 <p className="text-gray-700 mb-6">
//                   Our attorneys believe in integrity, compassion, and results.
//                 </p>

//                 <Button title="Read More" href="/about" />
//               </div>

//               {/* BLOCK 2 */}
//               <div className="pb-[400px]">
//                 <h2 className="text-3xl md:text-4xl xl:text-6xl mb-6">
//                   Your advocate in <br /> injury & criminal cases
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700">
//                   <div className="border-l pl-6 space-y-2">
//                     <p>Citizenship</p>
//                     <p>Naturalization</p>
//                     <p>Family Immigration</p>
//                   </div>
//                   <div className="border-l pl-6 space-y-2">
//                     <p>Removal Defense</p>
//                     <p>Consular Processing</p>
//                     <p>Criminal Defense</p>
//                   </div>
//                 </div>

//                 <div className="mt-10">
//                   <Button title="Get Started Today" href="/contact" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import Button from "components/shared/Button";
import { useRef } from "react";

export default function AboutSection() {
  const rightScrollRef = useRef<HTMLDivElement>(null);

  /* 🔑 Redirect wheel ONLY when hovering IMAGE */
  const handleImageWheel = (e: React.WheelEvent) => {
    if (!rightScrollRef.current) return;

    const el = rightScrollRef.current;

    const atTop = el.scrollTop === 0;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

    // ⬆️⬇️ allow page scroll if content start/end
    if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
      return;
    }

    // 🔒 lock page scroll
    e.preventDefault();

    // ✅ smooth internal scroll
    el.scrollBy({
      top: e.deltaY,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-[220vh] px-4 md:px-6 lg:px-8 py-8">
      <div className="max-w-[1640px] mx-auto h-full">
        {/* STICKY WRAPPER */}
        <div className="sticky top-48  flex items-start">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
            {/* LEFT IMAGE (SCROLL CAPTURE ZONE) */}
            <div
              className="relative  rounded-[20px] overflow-hidden"
              onWheel={handleImageWheel}
              onWheelCapture={handleImageWheel}
            >
              <Image
                src="/images/home/about/img.png"
                alt="About"
                width={1000}
                height={800}
                priority
                className="object-cover object-top w-full h-full"
              />
            </div>

            {/* RIGHT CONTENT (INTERNAL SCROLL) */}
            <div
              ref={rightScrollRef}
              className="
                h-[450px]
                overflow-y-auto
                pr-4
                space-y-40
                no-scrollbar
              "
            >
              {/* BLOCK 1 */}
              <div>
                <span className="inline-block mb-4 border border-gray-400 rounded-full px-4 py-1">
                  About Us
                </span>

                <h2 className="text-3xl md:text-4xl xl:text-6xl mb-6">
                  Dedicated to <br /> Making a Difference
                </h2>

                <p className="text-gray-700 mb-4">
                  At Trip Vien Law we set out to create a unique law firm where
                  outstanding representation and humanity go hand in hand.
                </p>

                <p className="text-gray-700 mb-6">
                  Our attorneys believe in integrity, compassion, and results.
                </p>

                <Button title="Read More" href="/about" />
              </div>

              {/* BLOCK 2 */}
              <div className="pb-[100px]">
                <h2 className="text-3xl md:text-4xl xl:text-6xl mb-6">
                  Your advocate in <br /> injury & criminal cases
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700">
                  <div className="border-l pl-6 space-y-2">
                    <p>Citizenship</p>
                    <p>Naturalization</p>
                    <p>Family Immigration</p>
                  </div>
                  <div className="border-l pl-6 space-y-2">
                    <p>Removal Defense</p>
                    <p>Consular Processing</p>
                    <p>Criminal Defense</p>
                  </div>
                </div>

                <div className="mt-10">
                  <Button title="Get Started Today" href="/contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
