// // src/pages/index.tsx
// import React, { useState } from "react";
// import Layout from "@theme/Layout";
// import { motion, AnimatePresence } from "framer-motion";
// import Tilt from "react-parallax-tilt";

// type CardData = {
//   name: string;
//   subtitle: string;
//   image: string;
//   color: string;
//   lore: string;
//   difficulty: number; // 1–5
// };

// function CardDeck({ data }: { data: CardData[] }) {
//   const [cards, setCards] = useState(data);

//   const cycleCard = () => {
//     setCards((prev) => {
//       const [first, ...rest] = prev;
//       return [...rest, first];
//     });
//   };

//   return (
//     <div className="flex justify-center items-center w-full h-[600px]">
//       <AnimatePresence>
//         {cards.length > 0 && (
//           <motion.div
//             key={cards[0].name}
//             initial={{ opacity: 0, scale: 0.9, y: 30 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: -30 }}
//             transition={{ duration: 0.4 }}
//             onClick={cycleCard}
//             className="cursor-pointer"
//           >
//             <Tilt
//               tiltMaxAngleX={10}
//               tiltMaxAngleY={10}
//               glareEnable={true}
//               glareBorderRadius="16px"
//             >
//               <div
//                 className="relative w-[350px] h-[500px] rounded-2xl shadow-xl overflow-hidden border-4"
//                 style={{ borderColor: cards[0].color }}
//               >
//                 {/* Image */}
//                 <img
//                   src={cards[0].image}
//                   alt={cards[0].name}
//                   className="w-full h-1/2 object-cover"
//                 />

//                 {/* Card body */}
//                 <div className="p-4 flex flex-col justify-between h-1/2 bg-white">
//                   <div>
//                     <h2
//                       className="text-xl font-bold"
//                       style={{ color: cards[0].color }}
//                     >
//                       {cards[0].name}
//                     </h2>
//                     <h3 className="text-md italic text-gray-600">
//                       {cards[0].subtitle}
//                     </h3>
//                   </div>

//                   <p className="text-sm text-gray-800">{cards[0].lore}</p>

//                   {/* Difficulty */}
//                   <div className="flex mt-2">
//                     {[...Array(5)].map((_, i) => (
//                       <span
//                         key={i}
//                         className={`w-4 h-4 mr-1 rounded-full ${
//                           i < cards[0].difficulty
//                             ? "bg-red-500"
//                             : "bg-gray-300"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Tilt>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// const cardData: CardData[] = [
//   {
//     name: "Dracula's Entrance",
//     subtitle: "Try to enter the castle",
//     image: "/img/enterance.jpg",
//     color: "black",
//     lore: "This is the beginning of the adventure.",
//     difficulty: 3,
//   },
//   {
//     name: "Dining Hall",
//     subtitle: "Escape or become dinner",
//     image: "/img/hall.jpg",
//     color: "gray",
//     lore: "Legends say this is the hall where the Count dines every night.",
//     difficulty: 4,
//   },
//   {
//     name: "Crypt",
//     subtitle: "Kill or be killed",
//     image: "/img/crypt.jpg",
//     color: "red",
//     lore: "The Count's crypt is eerie and cold. Like his heart.",
//     difficulty: 5,
//   },
// ];

export default function Home(): JSX.Element {
  return (
    <Layout title="Card Deck Demo">
      <main className="flex justify-center items-center py-12">
        <CardDeck data={cardData} />
      </main>
    </Layout>
  );
}

