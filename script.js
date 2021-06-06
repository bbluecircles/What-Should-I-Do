// Default Activities List

const Activities = [
    "Go for a walk",
    "Find a recipe to cook",
    "Watch your favorite TV show",
    "Read a book",
    "Eat out at a resturant",
    "Go for a run",
    "Search for new music to listen to",
    "Draw",
    "Go bowling",
    "Write a journal",
    "Go to the park",
    "Go to the gym",
    "Ask someone out",
    "Visit a family member",
    "Try a boxing class",
    "Go to a bar",
    "Go on a hike",
    "Try a yoga class",
    "Get a massage",
    "Try a dance class",
    "Watch a movie",
    "Watch a Youtube video",
    "Watch a documentary",
    "Go to the zoo",
    "Practice my favorite sport",
    "Try a jiu jitsui class",
    "Go to a museum",
    "Go to a amusement park"
];

let custom = true; // True when custom activities is created.

// Custom activites 
const customActivites = {
    activities: [], // activites list
    people: [], // friends/family list 
    withPeople: false
}

// Select Random Value ~ Select Random Value from Array. 
const selectRandomValue = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const value = arr[randomIndex];

    return value;
}

// Select Random Activity
const selectRandomActivity = () => {
    // Return a object with a random activity from default Activites if there are no custom lists - no friend selected by default
    if (!custom) {
        return {
            activity: selectRandomValue(Activities),
            friend: null
        }
    }

    // Return a object with a random activity from customActivites and a random friend from customActivities
    if (customActivites.withPeople) {
        return {
            activity: selectRandomValue(customActivites.activities),
            friend: selectRandomValue(customActivites.people)
        }
    }

    // Return a object with a random activity from customActivites - no friend selected
    return {
        activity: selectRandomValue(customActivites.activities),
        friend: null
    }
}
