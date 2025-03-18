import { ApiService } from "../../axios/api";

export class GetPokemonClass {
  public static instance = new GetPokemonClass();
  constructor(private readonly apiService = ApiService.instance) {}

  async getPokemon(pokeName: string) {
      const response = await this.apiService.get(`/pokemon/${pokeName}`);

      if (response.status === 204) {
        throw new Error(`Pokemon ${pokeName} not found`);
      }
      return response.data.data;
  }
}
