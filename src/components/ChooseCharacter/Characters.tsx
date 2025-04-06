

import img1 from "../../../src/assets/characters/easy/character-1/1-18343-256b.png";
import img2 from "../../../src/assets/characters/easy/character-2/1-68442-256b.png";
import img3 from "../../../src/assets/characters/easy/character-3/1-60018-256b.png";

import img4 from "../../../src/assets/characters/medium/character-1/1-11012-256b.png";
import img5 from "../../../src/assets/characters/medium/character-2/1-10412-256b.png";
import img6 from "../../../src/assets/characters/medium/character-3/1-9108-256b.png";

import img7 from "../../../src/assets/characters/hard/character-1/1-58918-256b.png";
import img8 from "../../../src/assets/characters/hard/character-2/1-69618-256b.png";
import img9 from "../../../src/assets/characters/hard/character-3/1-58229-256b.png";

interface Characters {
    [key: string]: Record<`character-${number}`, string>;
}


export const characters: Characters = {
    easy: {
        "character-1": img1,
        "character-2": img2,
        "character-3": img3,
    },
    medium: {
        "character-1": img4,
        "character-2": img5,
        "character-3": img6,
    },
    hard: {
        "character-1": img7,
        "character-2": img8,
        "character-3": img9,
    },
};
