import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GetPokemonClass } from "../domain/service/GetPokemonService";
import { Pokemon } from "../domain/entities/pokemon";
import { CardImage } from "./components/CardImage";
import { CardInfo } from "./components/CardInfo";
import { Header } from "./components/Header";
import { useState } from "react";
import { Toast, ToastData } from "./components/toast";

function App() {
  const [data, setData] = useState<Pokemon>();
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [toastData, setToastData] = useState<ToastData>({
    isHidden: true,
    text: "",
    type: "warning",
  });

  const schema = z.object({
    pokeName: z
      .string()
      .trim()
      .min(3, "the name of pokemon must contains at least 3 characters"),
  });
  type schemaType = z.infer<typeof schema>;

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      pokeName: "",
    },
  });

  async function handleGetPokemon() {
    try {
      setIsDataLoading(true);
      const fetchedData = await GetPokemonClass.instance.getPokemon(
        getValues("pokeName")
      );
      setData(fetchedData);
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
        setToastData({
          isHidden: false,
          text: e.message,
          type: "error",
        });
      }
    } finally {
      setIsDataLoading(false);
    }
  }

  return (
    <>
      <Header />
      <Toast
        data={toastData} setData={setToastData}
      />
      <div className="flex flex-col px-6 md:px-4">
        <div className="flex flex-col mt-20 w-fit m-auto">
          <h1>Search a pokemon</h1>
          <form onSubmit={handleSubmit(handleGetPokemon)}>
            <div className={`flex flex-col mt-10`}>
              <label className="mb-4" htmlFor="pokeName">
                Name of the pokemon
              </label>
              <input
                className="w-full bg-white/80 p-4 rounded-xl placeholder:text-black/30 hover:ring-1 hover:ring-blue-300 transition-all duration-150 border-[0.5px] border-black/10"
                type="text"
                placeholder="pikachu"
                {...register("pokeName")}
              />
              <span>{errors.pokeName?.message}</span>
              <button
                type="submit"
                className="!bg-blue-300 text-zinc-700 hover:!bg-blue-700 hover:!text-white transition-all duration-200 mx-auto min-w-40 font-xl mt-10 "
              >
                {isDataLoading ? "loading..." : "search"}
              </button>
            </div>
          </form>
        </div>

        {data && (
          <div className="grid grid-cols-2 *:col-span-2 *:md:col-span-1 mt-30 transition-all duration-75">
            <CardImage url={data.imagePath} />
            <CardInfo data={data} name={getValues("pokeName")} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
