const images = import.meta.glob(`../../../src/assets/characters/**/*.{png,jpg,jpeg,gif,svg}`, { eager: true });
 
 
interface GroupedImages {
    easy: {
        [key: string]: string[];
    };
    medium: {
        [key: string]: string[];
    };
    hard: {
        [key: string]: string[];
    };
}


export const groupedImages: GroupedImages = {
    easy: {
        "character-1": [],
        "character-2": [],
        "character-3": []
    },
    medium: {
        "character-1": [],
        "character-2": [],
        "character-3": []
    },
    hard: {
        "character-1": [],
        "character-2": [],
        "character-3": []
    },
};

Object.entries(images as Record<string, { default: string }>).forEach(
    ([path, img]) => {
        const parts = path.split('/');
        const subfolder = parts[parts.length - 2];
        if (path.includes('easy')) {
            groupedImages.easy[subfolder].push(img.default);
        } else if (path.includes('medium')) {
            groupedImages.medium[subfolder].push(img.default);
        } else if (path.includes('hard')) {
            groupedImages.hard[subfolder].push(img.default);
        }
    }
);



console.log(groupedImages)


 