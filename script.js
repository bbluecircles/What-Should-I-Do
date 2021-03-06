// DEFAULT ACTIVITIES LIST

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

/* ============================================================ */

// SELECT RANDOM VALUE FUNCTION ~ Select Random Value from Array. 

const selectRandomValue = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const value = arr[randomIndex];

    return value;
}

/* ============================================================ */

let custom = false; // True when custom activities is created.

// CUSTOM ACTIVITIES

const customActivites = {
    activities: { // Activities object
        list: [], // List of activities
        // setter function
        set activity(activity) {
            if (typeof activity === "string") {
                this.list.push(activity);
            }
        },
        removeActivity(activity) {
            this.list = this.list.filter(item => item !== activity);
        }
    },
    friends: { // Friends Object
        list: [], // List of friends

        set friend(friend) { // Setter
            if (typeof friend === "string") {
                this.list.push(friend);
            }
        },
        removeFriend(friend) {
            this.list = this.list.filter(item => item !== friend);
        }
    }, 
    withPeople: false, // Add a friend boolean (if true will pick a friend from friends list)
    set setWithPeople(bool) { // Setter
        if (typeof bool === "boolean") {
            this.withPeople = bool;
        }
    }
}

/* ====================================================== */

// SELECT RANDOM ACTIVITY

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
            activity: selectRandomValue(customActivites.activities.list),
            friend: selectRandomValue(customActivites.friends.list)
        }
    }

    // Return a object with a random activity from customActivites - no friend selected
    return {
        activity: selectRandomValue(customActivites.activities.list),
        friend: null
    }
}
