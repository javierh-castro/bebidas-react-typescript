import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";

export default function IndexPage() {
  // useAppStore((state) => state.categories)
  const drinks = useAppStore((state) => state.drinks);

  const hasDrinks = useMemo(() => drinks.drinks.length, [drinks]);

  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>

      {hasDrinks ? (
        <>
          {drinks.drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </>
      ) : (
        <p>No hay resultados aun, utiliza el formulario para buscar recetas</p>
      )}
    </>
  );
}
