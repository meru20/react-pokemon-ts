type Pokemon = {
    id: number;
    num: string;
    name: string;
    img: string;
    type: string[];
    height: string;
    weight: string;
    candy: string;
    // candy_count: number;
    egg: string;
    spawn_chance: number | string;
    avg_spawns: number | string;
    spawn_time:string;
    multipliers:number[] | null;
    weaknesses: string[];
   
    // next_evolution: string[{}];

}
type PokemonCard = {
    name: string,
    img: string,
    type: string[],
    
    candy: string,
     egg: string,
    
    weaknesses: string[],
}