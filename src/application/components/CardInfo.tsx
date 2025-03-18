import { Pokemon } from "../../domain/entities/pokemon";

interface CardInfoProps {
  data: Pokemon | undefined;
  name: string;
}

export function CardInfo({ data, name }: CardInfoProps) {
  const colors = [
    "#FFC8DD", // pastel pink
    "#FFDDE4", // pastel peach
    "#FBE7C6", // pastel cream
    "#FAF9C6", // pastel yellow
    "#C3FBD8", // pastel green
    "#B5EAD7", // pastel mint
    "#CDF0EA", // pastel teal
    "#D7E3FC", // pastel periwinkle
    "#E2D1F9", // pastel lavender
    "#F5D0FE", // pastel lilac
  ];

  if (data) {
    return (
      <div className="bg-emerald-500 rounded-3xl p-6 *:text-white">
        <div className="mb-4">
          <h2 className="font-bold text-2xl mb-1">{name}</h2>
          <ul className="ml-4 flex gap-3">
            {data.types.map((el, i) => {
              const currentColor =
                colors[Math.trunc((Math.random() * 10) % 10)];
              return (
                <li
                  className="p-1 px-3 rounded w-fit text-black"
                  style={{ background: currentColor }}
                  key={`${el}-${i}`}
                >
                  #{el}
                </li>
              );
            })}
          </ul>
        </div>
        <h3 className="font-bold text-2xl">Abilities</h3>
        <span className="font-bold text-xl">the {name} has this abilites</span>
        <ul className="ml-4 flex gap-3 mt-2">
          {data.abilities.map((el, i) => {
            const currentColor = colors[Math.trunc((Math.random() * 10) % 10)];
            return (
              <li
                className="p-1 px-3 rounded w-fit text-black"
                style={{ background: currentColor }}
                key={`${el}-${i}`}
              >
                #{el}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return null;
}
