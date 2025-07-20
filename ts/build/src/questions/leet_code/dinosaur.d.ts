export type Stance = 'quadrupedal' | 'bipedal';
export type Dinosaur = {
    name: string;
    legLength?: number;
    strideLength?: number;
    stance?: Stance;
    speed?: number;
};
export declare function dino(): Promise<string[]>;
