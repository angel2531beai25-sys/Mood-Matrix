const appName = "MoodMatrix";

let waterIntake = 0;
let calories = 0;

const waterGoal = 3000;
const calorieLimit = 2500;

let streak = 0;

let xp = 0;
let level = 1;

const xpGoal = 100;

const xpText = document.getElementById("xp-text");

const levelText = document.getElementById("level-text");

const xpProgress = document.getElementById("xp-progress");

    document.getElementById("xp-progress");

const streakBox = document.getElementById("streak-box");

const smartSuggestion = document.getElementById("smart-suggestion");

const leaderboardList =
    document.getElementById(
        "leaderboard-list"
    );

const userData = {
    username: "Angel",
    streak: 5,
    mood: "Happy"
};


const waterText = document.getElementById("water-text");
const calorieText = document.getElementById("calorie-text");

const addWaterBtn = document.getElementById("add-water");
const addCaloriesBtn = document.getElementById("add-calories");

const resetBtn = document.getElementById("reset-btn");

const tipBox = document.getElementById("tip-box");

function updateWater(amount) {

    waterIntake += amount;

    if (waterText) {
        waterText.innerText =
            `Water Intake: ${waterIntake} ml`;
    }

    const waterProgress =
        document.getElementById("water-progress");

    let percent =
        (waterIntake / waterGoal) * 100;

    if (percent > 100) {
        percent = 100;
    }

    waterProgress.style.width =
        `${percent}%`;

    checkWaterGoal();
}

function updateCalories(amount) {

    calories += amount;

    if (calorieText) {
        calorieText.innerText =
            `Calories: ${calories}`;
    }

    const calorieProgress =
        document.getElementById("calorie-progress");

    let percent =
        (calories / calorieLimit) * 100;

    if (percent > 100) {
        percent = 100;
    }

    calorieProgress.style.width =
        `${percent}%`;

    checkCalories();
}
const showTip = () => {

    const randomTip =
        healthyTips[
            Math.floor(Math.random() * healthyTips.length)
        ];

    if (tipBox) {
        tipBox.innerText = randomTip;
    }
};

function checkWaterGoal() {

    if (waterIntake >= waterGoal) {

        alert("Daily Water Goal Completed 🎉");

        document.body.classList.add("glow");
    }
}

function checkCalories() {

    if (calories > calorieLimit) {

        alert("📈 Calories Limit Exceeded 📈");

        document.body.classList.add("shake");
    }
}

if (addWaterBtn) {

    addWaterBtn.addEventListener("click", function () {

        updateWater(250);

        updateXP(10);

        updateStreak();

        updateSuggestion();

        updateLeaderboard();

        showTip();
    });
}

if (addCaloriesBtn) {

    addCaloriesBtn.addEventListener("click", function () {

        updateCalories(100);

        if (calories > calorieLimit) {

            updateXP(-15);
        }
        else {

            updateXP(5);
        }

        updateStreak();

        updateSuggestion();

        updateLeaderboard();

        showTip();
    });
}

if (resetBtn) {

    resetBtn.addEventListener("click", () => {

        waterIntake = 0;
        calories = 0;

        if (waterText) {
            waterText.innerText =
                "Water Intake: 0 ml";
        }

        if (calorieText) {
            calorieText.innerText =
                "Calories: 0";
        }

        document.getElementById(
            "water-progress"
        ).style.width = "0%";

        document.getElementById(
            "calorie-progress"
        ).style.width = "0%";

        document.body.classList.remove("glow");
        document.body.classList.remove("shake");

        xp = 0;
        level = 1;

        xpText.innerText = "XP: 0 / 100";

        levelText.innerText = "Level: 1";

        xpProgress.style.width = "0%";

        streak = 0;

        streakBox.innerText = "Streak: 0 Days";

        smartSuggestion.innerText = "Start your healthy journey today!";

        updateLeaderboard();

        alert("Tracker Reset Successfully");
    });
}

const jsonData = JSON.stringify(userData);

console.log(jsonData);

const parsedData = JSON.parse(jsonData);

console.log(parsedData);

const numbers = [100, 200, 300];

const doubled =
    numbers.map(num => num * 2);

console.log(doubled);

const filtered =
    numbers.filter(num => num >= 200);

console.log(filtered);

const total =
    numbers.reduce((acc, curr) => acc + curr, 0);

console.log(total);

const { username, streak: userStreak } = userData;

console.log(username);
console.log(userStreak);

const copiedUser = { ...userData };

console.log(copiedUser);

console.log(window.innerWidth);

console.log(navigator.userAgent);

console.log(location.href);

setTimeout(() => {

    console.log("MoodMatrix Loaded");

}, 1000);

window.addEventListener("load", () => {

    console.log(`${appName} Initialized`);

    showTip();
});

function updateXP(amount) {

    xp += amount;

    if (xp >= xpGoal) {

        xp = 0;

        level++;

        alert(`Level Up! You reached Level ${level} 🎉`);
    }

    if (xpText) {
        xpText.innerText =
            `XP: ${xp} / ${xpGoal}`;
    }

    if (levelText) {
        levelText.innerText =
            `Level: ${level}`;
    }

    let percent =
        (xp / xpGoal) * 100;

    xpProgress.style.width =
        `${percent}%`;
}

function updateStreak() {

    streak++;

    if (streakBox) {

        streakBox.innerText =
            `Streak: ${streak} Days`;
    }


    if (streak >= 5) {

        streakBox.classList.add("fire");
    }
}

function updateSuggestion() {

    if (!smartSuggestion) {
        return;
    }


    if (waterIntake < 1000) {

        smartSuggestion.innerText =
            " Drink more water to stay hydrated.";
    }


    else if (calories > calorieLimit) {

        smartSuggestion.innerText =
            " Calories are high. Try exercise or a walk.";
    }


    else if (xp >= 70) {

        smartSuggestion.innerText =
            " Excellent progress today. Keep it up!";
    }


    else {

        smartSuggestion.innerText =
            " You are maintaining a healthy balance.";
    }
}

function updateLeaderboard() {

    if (!leaderboardList) {
        return;
    }

    leaderboardList.innerHTML = `
    
        <li>Angel — Level ${level}</li>
        <li>Hydration XP —  ${xp}</li>
        <li>Current Streak — ${streak} Days</li>

    `;
}