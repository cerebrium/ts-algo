export type Diet = 'herbivore' | 'omnivore' | 'carnivore';
export type Stance = 'quadrupedal' | 'bipedal';
export type Dinosaur = {
    name: string;
    legLength?: number;
    strideLength?: number;
    stance?: Stance;
    diet?: Diet;
    speed?: number;
};
export declare function dino(): Promise<string[]>;
