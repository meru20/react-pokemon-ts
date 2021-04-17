type Pokemon = {
    id: number;
    num: string;
    name: string;
    img: string;
    type: string[];
    height: string;
    weight: string;
    candy: string;
     candy_count?: number;
    egg: string;
    spawn_chance: number;
    avg_spawns: numbe;
    spawn_time:string;
    multipliers:number[] | null;
    weaknesses: string[];
    prev_evolution?: Evolution[]
    next_evolution?: Evolution[];// object inised looks like {num: string, name: string}-->{num: string, name: string}[]

}
type Evolution = {
    num: string;
    name: string;
}
type PokemonCard = {
    name: string,
    img: string,
    type: string[],
    
    candy: string,
     egg: string,
    
    weaknesses: string[],
}