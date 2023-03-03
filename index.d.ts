export interface UserType {
    id: number;
    name: string;
    age: number;
    hairColor: string;
    hobbies: string[];
}

export interface onBoardingData {
    name?: string;
    age?: number;
    hairColor?: string;
}

// export interface ResourceType {
//     id: number;
//     name: string;
//     age: number;
//     hairColor:  string;
//     hobbies: string[];
// }

// export type StepProps = {
//     goToNext: (stepData: onBoardingData) => void
// }