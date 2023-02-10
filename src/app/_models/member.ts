import { Photo } from "./photo";

export interface Member {
    id: number;
    userName: string;
    name: string;
    gender: string;
    dateOfBirth: Date;
    photoUrl: string;
    introduction: string;
    city: string;
    country: string;
    created: Date;
    lastActive: Date;
    photos: Photo[];
    age: number;
}
