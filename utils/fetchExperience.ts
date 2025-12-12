
import { Experience } from "../typings";

export const fetchExperiences = async() => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/getExperience`);

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    // console.log('fetching', experiences);

    return experiences;
}