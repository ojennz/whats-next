// ========================================
// DEV MENU
// ========================================

function toggleDevMenu() {

    const menu = document.querySelector("#devMenu");

    menu.classList.toggle("show");
}

// ========================================
// ACT 0 — START
// ========================================

function startGame() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `
        <div class="act-screen">

            <p class="eyebrow">
                MAY 2026
            </p>

            <h2 class="story-title">
                CONGRATULATIONS.
            </h2>

            <p class="story-text">
                You graduated.
            </p>

            <button class="file-button" onclick="showFirstChoice()">
                <span class="folder-tab"></span>
                CONTINUE
            </button>

        </div>
    `;
}


// ========================================
// FIRST CHOICE
// ========================================

function showFirstChoice() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `
        <div class="act-screen">

            <p class="eyebrow">
                ONE QUESTION
            </p>

            <h2 class="story-title">
                WHAT DO YOU WANT?
            </h2>

            <p class="story-text">
                After graduation, ideally.
            </p>

            <div class="choice-container">

                <button class="choice-button" onclick="startJobRoute()">
    FIND A JOB
</button>

                <button class="choice-button" onclick="startHomeRoute()">
                    GO HOME
                </button>

                <button class="choice-button" onclick="dontKnow(1)">
                    I DON'T KNOW
                </button>

            </div>

        </div>
    `;
}





// ========================================
// I DON'T KNOW — FIRST TIME
// ========================================

function dontKnow(count) {

    const screen = document.querySelector(".start-screen");


    // FIRST TIME

    if (count === 1) {

        screen.innerHTML = `
            <div class="act-screen">

                <h2 class="story-title">
                    THAT'S OKAY.
                </h2>

                <p class="story-text">
                    You still have time.
                </p>

                <button class="file-button" onclick="threeMonthsLater(2)">
                    <span class="folder-tab"></span>
                    CONTINUE
                </button>

            </div>
        `;
    }


    // SECOND TIME

    else if (count === 2) {

        screen.innerHTML = `
            <div class="act-screen">

                <h2 class="story-title pressure-title pressure-1">
    STILL NOT SURE?
</h2>

               <p class="story-text pressure-text">
    That's okay.<br>
    You still have some time.
</p>
                </p>

                <button class="file-button" onclick="threeMonthsLater(3)">
                    <span class="folder-tab"></span>
                    CONTINUE
                </button>

            </div>
        `;
    }


    // THIRD TIME

    else {

        screen.innerHTML = `
            <div class="act-screen">

                <h2 class="story-title pressure-title pressure-2">
    YOU STILL<br>
    DON'T KNOW.
</h2>
                <p class="story-text pressure-text pressure-text-2">
    But time kept moving.
</p>

                <button class="file-button" onclick="timeIsUp()">
                    <span class="folder-tab"></span>
                    CONTINUE
                </button>

            </div>
        `;
    }
}


// ========================================
// THREE MONTHS LATER
// ========================================

function threeMonthsLater(nextCount) {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `
        <div class="act-screen">

            <p class="eyebrow">
                THREE MONTHS LATER
            </p>

            <h2 class="story-title">
                WHAT'S NEXT?
            </h2>

            <p class="story-text">
                Do you know now?
            </p>

            <div class="choice-container">

                <button class="choice-button" onclick="startJobRoute()">
    FIND A JOB
</button>

                <button class="choice-button" onclick="startHomeRoute()">
                    GO HOME
                </button>

                <button class="choice-button" onclick="dontKnow(${nextCount})">
                    I STILL DON'T KNOW
                </button>

            </div>

        </div>
    `;
}


// ========================================
// NINE MONTHS — TIME IS UP
// ========================================

function timeIsUp() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `
        <div class="act-screen">

            <p class="eyebrow">
                NINE MONTHS LATER
            </p>

            <h2 class="story-title pressure-title pressure-3">
    TIME'S<br>UP.
</h2>

            <p class="story-text">
                You have to go home.
            </p>

            <button class="file-button" onclick="startHomeRoute()">
                <span class="folder-tab"></span>
                GO HOME
            </button>

        </div>
    `;
}


// ========================================
// GO HOME — BEGIN
// ========================================

function startHomeRoute() {

    const screen = document.querySelector(".start-screen");

    screen.classList.remove("black-hole");

    screen.innerHTML = `
        <div class="act-screen home-intro">

            <p class="eyebrow">
                HOME
            </p>

            <h2 class="story-title">
                WELCOME BACK.
            </h2>

            <p class="story-text">
                Everything should feel familiar.
            </p>

            <button class="file-button" onclick="homeDayOne()">
                <span class="folder-tab"></span>
                CONTINUE
            </button>

        </div>
    `;
}


// ========================================
// HOME — SOMETHING FEELS DIFFERENT
// ========================================

function homeDayOne() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `
        <div class="act-screen">

            <p class="eyebrow">
                DAY 01
            </p>

            <h2 class="story-title">
                WHERE DO YOU START?
            </h2>

            <p class="story-text">
                You've been away for a long time.
            </p>

            <button class="file-button" onclick="startFlood()">
                <span class="folder-tab"></span>
                LOOK AROUND
            </button>

        </div>
    `;
}


// ========================================
// HOME — INFORMATION FLOOD
// ========================================


    // ========================================
// HOME — FLOOD START
// ========================================

function startFlood() {

    const screen = document.querySelector(".start-screen");

    // 开始进入黑暗
    screen.classList.add("flood-dark");

    screen.innerHTML = `
        <div class="home-center flood-center">

            <p class="eyebrow">
                WELCOME HOME
            </p>

            <h2 class="story-title">
                START AGAIN.
            </h2>

        </div>

        <button class="lost-button first-lost-button" onclick="whereShouldIStart()">
            WHERE SHOULD I START???
        </button>
    `;


    // 第一波信息
    const firstWave = [

        "you should go to shanghai. there are more opportunities.",

        "beijing might be better for your career.",

        "where are you going to find a job?",

        "why move again? just stay close to your family.",

        "you might have to start over.",

        "some companies rank employees and let the lowest performers go.",

        "how far is too far from work?",

        "so... what are you doing next?"

    ];


    // 一个一个出现
    firstWave.forEach(function(message, index) {

        setTimeout(function() {

            addFloodCard(
                message,
                index + 1
            );

            // 每出现一个，画面再暗一点
            screen.style.setProperty(
                "--darkness",
                0.08 + (index * 0.045)
            );

        }, 300 + (index * 550));

    });


    // 3.5 秒以后按钮开始变得紧张
    setTimeout(function() {

        const button = document.querySelector(".first-lost-button");

        if (button) {
            button.classList.add("urgent");
        }

    }, 3500);


    // 5 秒后如果玩家还没点
    // 系统直接替玩家进入第二波
    window.homeFloodTimer = setTimeout(function() {

        const button = document.querySelector(".first-lost-button");

        if (button) {
            moreFlood(false);
        }

    }, 5000);
}



// ========================================
// CREATE FLOOD CARD
// ========================================

function addFloodCard(message, number) {

    const screen = document.querySelector(".start-screen");

    const card = document.createElement("div");

    card.className = `flood-card flood-${number}`;

    card.innerHTML = `
        <div class="window-bar">

            <span>
                MESSAGE
            </span>

            <span>
                ×
            </span>

        </div>

        <div class="window-message">
            ${message}
        </div>
    `;

    screen.appendChild(card);
}



// ========================================
// PLAYER CLICKS:
// WHERE SHOULD I START???
// ========================================

function whereShouldIStart() {

    // 停掉 5 秒自动进入的 timer
    clearTimeout(window.homeFloodTimer);

    const button = document.querySelector(".first-lost-button");

    if (button) {
        button.remove();
    }

    moreFlood(true);
}



// ========================================
// HOME — SECOND FLOOD
// ========================================

function moreFlood(playerClicked) {

    const screen = document.querySelector(".start-screen");


    // 防止第二波被执行两次
    if (screen.classList.contains("second-flood")) {
        return;
    }


    screen.classList.add("second-flood");


    // 画面继续变暗
    screen.style.setProperty(
        "--darkness",
        0.58
    );


    // 第一波的中心文字开始消失
    const center = document.querySelector(".flood-center");

    if (center) {

        center.innerHTML = `

            <p class="eyebrow">
                ${playerClicked ? "YOU TRIED." : "TOO SLOW."}
            </p>

            <h2 class="story-title">
                WHERE?
            </h2>

        `;
    }


    // 如果按钮还存在，删除
    const oldButton = document.querySelector(".first-lost-button");

    if (oldButton) {
        oldButton.remove();
    }


    // 第二波信息
    const secondWave = [

        "what exactly do you want to do?",

        "i thought i knew.",

        "start again.",

        "???",

        "at least you're home now.",

        "why does everything still feel unfamiliar?"

    ];


    // 第二波出现得更快
    secondWave.forEach(function(message, index) {

        setTimeout(function() {

            addFloodCard(
                message,
                index + 9
            );

            // 第二波继续变暗
            screen.style.setProperty(
                "--darkness",
                0.58 + (index * 0.055)
            );

        }, 200 + (index * 400));

    });


    // 第二波结束之后出现 GET OUT
    setTimeout(function() {

        const escapeButton = document.createElement("button");

        escapeButton.className = "lost-button escape-button";

        escapeButton.innerText = "GET OUT";

        escapeButton.onclick = collapseHome;

        screen.appendChild(escapeButton);

    }, 3000);
}


function collapseHome() {

    const screen = document.querySelector(".start-screen");

    // 清掉 flood 状态
    screen.classList.remove("flood-dark");
    screen.classList.remove("second-flood");

    // 进入真正的 black hole
    screen.classList.add("black-hole");

    // 清掉 flood 时 JS 加进去的 darkness
    screen.style.removeProperty("--darkness");

    screen.innerHTML = `
        <div class="black-hole-content">

            <p class="glitch-text">
                UNKNOWN
            </p>

            <p class="small-unknown">
                You thought going home would answer the question.
            </p>

        </div>
    `;


    // 3.5 秒后进入最终画面
  setTimeout(function() {

    screen.innerHTML = `
        <div class="black-hole-content final-unknown">

            <p class="eyebrow final-eyebrow">
                AND YET...
            </p>

            <h2>
                WHAT'S NEXT?
            </h2>

            <p class="final-text">
                Home was supposed to be the answer.<br>
                Somehow, it became another question.
            </p>

            <button class="restart-button" onclick="restartGame()">
                START OVER
            </button>

        </div>
    `;

}, 3500);
}

// ========================================
// START OVER
// ========================================

function restartGame() {

    const screen = document.querySelector(".start-screen");

    // 清除所有 route 状态
    screen.classList.remove(
        "black-hole",
        "flood-dark",
        "second-flood"
    );

    screen.style.removeProperty("--darkness");


    // 回到最开始的 homepage
    screen.innerHTML = `

        <img class="floating-object object-1" src="images/1.png">
        <img class="floating-object object-2" src="images/2.png">
        <img class="floating-object object-3" src="images/3.png">
        <img class="floating-object object-4" src="images/4.png">
        <img class="floating-object object-5" src="images/5.png">
        <img class="floating-object object-6" src="images/6.png">


        <div class="center-content">

            <p class="eyebrow">
                AN INTERACTIVE STORY
            </p>

            <h1>
                WHAT'S<br>
                NEXT?
            </h1>

            <p class="intro">
                You graduated.<br>
                Everyone seems to want an answer.
            </p>

            <button class="file-button" onclick="startGame()">

                <span class="folder-tab"></span>

                START

            </button>

        </div>
    `;
}

// ========================================
// FIND A JOB ROUTE
// SECTION 1 — GET READY
// ========================================


// ----------------------------------------
// GLOBAL VARIABLES
// ----------------------------------------

let prepCount = 0;


// ========================================
// 01 — START JOB ROUTE
// ========================================

function startJobRoute() {

    const screen = document.querySelector(".start-screen");

    // clear other route styles
    screen.classList.remove(
        "black-hole",
        "flood-dark",
        "second-flood"
    );

    screen.style.removeProperty("--darkness");


    screen.innerHTML = `

        <div class="act-screen job-start">

            <p class="eyebrow">
                MAY 2026
            </p>


            <h2 class="story-title">
                OPT APPROVED.
            </h2>


            <p class="story-text">
                You can stay.<br>
                For now.
            </p>


            <div class="opt-counter">

                <span>
                    UNEMPLOYMENT DAYS
                </span>

                <strong>
                    90
                </strong>

            </div>


            <button
                class="file-button"
                onclick="jobPreparation()"
            >

                <span class="folder-tab"></span>

                START LOOKING FOR A JOB

            </button>

        </div>

    `;
}


// ========================================
// 02 — PREPARATION
// ========================================

function jobPreparation() {

    prepCount = 0;

    const screen = document.querySelector(".start-screen");


    screen.innerHTML = `

        <div class="act-screen">

            <p class="eyebrow">
                BEFORE YOU START
            </p>


            <h2 class="story-title">
                GET READY.
            </h2>


            <p class="story-text">
                You just need a few things.
            </p>


            <div class="prep-list">


                <button
                    class="prep-item"
                    onclick="completePrep(this)"
                >

                    RESUME

                    <span>
                        ○
                    </span>

                </button>


                <button
                    class="prep-item"
                    onclick="completePrep(this)"
                >

                    PORTFOLIO

                    <span>
                        ○
                    </span>

                </button>


                <button
                    class="prep-item"
                    onclick="completePrep(this)"
                >

                    LINKEDIN

                    <span>
                        ○
                    </span>

                </button>


                <button
                    class="prep-item"
                    onclick="completePrep(this)"
                >

                    JOB LIST

                    <span>
                        ○
                    </span>

                </button>


            </div>


            <p class="prep-counter">

                <span id="prep-number">
                    0
                </span>

                / 4 COMPLETE

            </p>


            <div id="prep-next"></div>


        </div>

    `;
}


// ========================================
// 03 — COMPLETE PREPARATION ITEMS
// ========================================

function completePrep(button) {

    // prevent clicking same item twice
    if (button.classList.contains("completed")) {
        return;
    }


    // mark item completed
    button.classList.add("completed");


    // change circle to check
    button.querySelector("span").innerText = "✓";


    // increase counter
    prepCount++;


    // update number
    document.querySelector("#prep-number").innerText = prepCount;


    // if all 4 are completed
    if (prepCount === 4) {

        document.querySelector("#prep-next").innerHTML = `

            <button
                class="file-button"
                onclick="jobReady()"
            >

                <span class="folder-tab"></span>

                CONTINUE

            </button>

        `;
    }
}


// ========================================
// 04 — READY
// ========================================

function jobReady() {

    const screen = document.querySelector(".start-screen");


    screen.innerHTML = `

        <div class="act-screen">

            <p class="eyebrow">
                4 / 4 COMPLETE
            </p>


            <h2 class="story-title">
                YOU'RE READY.
            </h2>


            <p class="story-text">
                Now you just need someone to say yes.
            </p>


            <button
                class="file-button"
                onclick="firstJob()"
            >

                <span class="folder-tab"></span>

                START APPLYING

            </button>


        </div>

    `;
}


// ========================================
// 05 — FIRST JOB
// ========================================

function firstJob() {

    const screen = document.querySelector(".start-screen");


    screen.innerHTML = `

        <div class="job-browser">


            <div class="browser-bar">

                <span>
                    JOBS
                </span>

                <span>
                    ×
                </span>

            </div>


            <div class="job-page">


                <p class="job-company">
                    STUDIO 01
                </p>


                <h2 class="job-title">
                    JUNIOR DESIGNER
                </h2>


                <p class="job-info">
                    New York, NY · Full-time
                </p>


                <div class="job-description">

                    <p>
                        We're looking for a motivated designer
                        to join our growing creative team.
                    </p>


                    <p>
                        1–2 years experience preferred.
                    </p>

                </div>


                <button
                    class="apply-button"
                    onclick="firstApplication()"
                >

                    APPLY

                </button>


            </div>


        </div>

    `;
}


// ========================================
// 06 — FIRST APPLICATION
// PLACEHOLDER FOR NEXT SECTION
// ========================================

// ========================================
// 06 — FIRST APPLICATION
// ========================================

function firstApplication() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="application-window">

            <div class="browser-bar">

                <span>
                    APPLICATION — 1 OF 5
                </span>

                <span>
                    ×
                </span>

            </div>


            <div class="application-page">

                <p class="application-label">
                    JUNIOR DESIGNER
                </p>


                <h2 class="application-title">
                    Upload your resume.
                </h2>


                <p class="application-help">
                    Let's make this quick.
                </p>


                <div class="fake-upload-box">

                    <span>
                        RESUME_JENNIE_ZHOU.PDF
                    </span>

                    <span>
                        2.4 MB
                    </span>

                </div>


                <button
                    class="apply-button"
                    onclick="uploadResume()"
                >
                    UPLOAD RESUME
                </button>

            </div>

        </div>

    `;
}
// ========================================
// 07 — RESUME UPLOADED
// ========================================

function uploadResume() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="application-window">

            <div class="browser-bar">

                <span>
                    APPLICATION — 2 OF 5
                </span>

                <span>
                    ✓
                </span>

            </div>


            <div class="application-page application-success">

                <p class="application-check">
                    ✓
                </p>


                <h2 class="application-title">
                    Resume uploaded.
                </h2>


                <p class="application-help">
                    Great! Now tell us about your experience.
                </p>


                <button
                    class="apply-button"
                    onclick="manualExperience()"
                >
                    CONTINUE
                </button>

            </div>

        </div>

    `;
}

// ========================================
// 08 — ENTER EXPERIENCE AGAIN
// ========================================

function manualExperience() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="application-window">

            <div class="browser-bar">

                <span>
                    APPLICATION — 3 OF 5
                </span>

                <span>
                    ×
                </span>

            </div>


            <div class="application-page">

                <p class="application-label">
                    WORK EXPERIENCE
                </p>


                <h2 class="application-title">
                    Enter your experience.
                </h2>


                <p class="application-help">
                    Please enter your work history manually.
                </p>


                <div class="fake-form">


                    <label>
                        COMPANY
                    </label>

                    <input
                        type="text"
                        placeholder="Company name"
                    >


                    <label>
                        JOB TITLE
                    </label>

                    <input
                        type="text"
                        placeholder="Job title"
                    >


                    <label>
                        START DATE
                    </label>

                    <input
                        type="text"
                        placeholder="MM / YYYY"
                    >


                    <label>
                        END DATE
                    </label>

                    <input
                        type="text"
                        placeholder="MM / YYYY"
                    >


                    <label>
                        DESCRIPTION
                    </label>

                    <textarea
                        placeholder="Describe your responsibilities..."
                    ></textarea>


                </div>


                <button
                    class="apply-button"
                    onclick="workAuthorization()"
                >
                    SAVE & CONTINUE
                </button>

            </div>

        </div>

    `;
}

// ========================================
// 09 — WORK AUTHORIZATION
// ========================================

function workAuthorization() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="application-window">

            <div class="browser-bar">

                <span>
                    APPLICATION — 4 OF 5
                </span>

                <span>
                    ×
                </span>

            </div>


            <div class="application-page">

                <p class="application-label">
                    WORK AUTHORIZATION
                </p>


                <h2 class="application-title">
                    Are you legally authorized to work in the United States?
                </h2>


                <div class="application-choices">

                    <button
                        class="form-choice"
                        onclick="sponsorshipQuestion()"
                    >
                        YES
                    </button>


                    <button
                        class="form-choice"
                        onclick="authorizationNo()"
                    >
                        NO
                    </button>

                </div>

            </div>

        </div>

    `;
}
function authorizationNo() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="application-window">

            <div class="browser-bar">

                <span>
                    APPLICATION
                </span>

                <span>
                    !
                </span>

            </div>


            <div class="application-page application-success">

                <p class="application-check">
                    !
                </p>


                <h2 class="application-title">
                    You may not be eligible.
                </h2>


                <p class="application-help">
                    Please review your answer.
                </p>


                <button
                    class="apply-button"
                    onclick="workAuthorization()"
                >
                    GO BACK
                </button>

            </div>

        </div>

    `;
}
// ========================================
// 10 — SPONSORSHIP
// ========================================

function sponsorshipQuestion() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="application-window">

            <div class="browser-bar">

                <span>
                    APPLICATION — 5 OF 5
                </span>

                <span>
                    ×
                </span>

            </div>


            <div class="application-page">

                <p class="application-label">
                    WORK AUTHORIZATION
                </p>


                <h2 class="application-title">
                    Will you now or in the future require sponsorship for employment?
                </h2>


                <div class="application-choices">

                    <button
                        class="form-choice"
                        onclick="reviewApplication('yes')"
                    >
                        YES
                    </button>


                    <button
                        class="form-choice"
                        onclick="reviewApplication('no')"
                    >
                        NO
                    </button>

                </div>

            </div>

        </div>

    `;
}

// ========================================
// 11 — REVIEW
// ========================================

function reviewApplication(sponsorshipAnswer) {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="application-window">

            <div class="browser-bar">

                <span>
                    REVIEW APPLICATION
                </span>

                <span>
                    ✓
                </span>

            </div>


            <div class="application-page">

                <p class="application-label">
                    ALMOST DONE
                </p>


                <h2 class="application-title">
                    Review your application.
                </h2>


                <div class="review-list">

                    <div>
                        <span>RESUME</span>
                        <strong>✓</strong>
                    </div>


                    <div>
                        <span>WORK EXPERIENCE</span>
                        <strong>✓</strong>
                    </div>


                    <div>
                        <span>WORK AUTHORIZATION</span>
                        <strong>YES</strong>
                    </div>


                    <div>
                        <span>SPONSORSHIP</span>
                        <strong>
                            ${sponsorshipAnswer.toUpperCase()}
                        </strong>
                    </div>

                </div>


                <button
                    class="apply-button"
                    onclick="submitFirstApplication()"
                >
                    SUBMIT APPLICATION
                </button>

            </div>

        </div>

    `;
}

// ========================================
// 12 — APPLICATION SUBMITTED
// ========================================

function submitFirstApplication() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="act-screen">


            <p class="eyebrow">
                APPLICATION SUBMITTED
            </p>


            <h2 class="story-title">
                DONE.
            </h2>


            <p class="story-text">
                Your application has been submitted.
            </p>


            <div class="application-counter">

                <span>
                    APPLICATIONS
                </span>

                <strong>
                    1
                </strong>

            </div>


            <button
                class="file-button"
                onclick="findAnotherJob()"
            >

                <span class="folder-tab"></span>

                FIND ANOTHER JOB

            </button>


        </div>

    `;
}

// ========================================
// 13 — NEXT JOB
// TEMP CHECKPOINT
// ========================================

// ========================================
// 13 — KEEP GOING
// ========================================

function findAnotherJob() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="act-screen">

            <p class="eyebrow">
                DAY 04
            </p>

            <h2 class="story-title">
                KEEP GOING.
            </h2>

            <div class="job-stats">

                <div>
                    <span>APPLICATIONS</span>
                    <strong>1</strong>
                </div>

                <div>
                    <span>INTERVIEWS</span>
                    <strong>0</strong>
                </div>

                <div>
                    <span>OPT DAYS LEFT</span>
                    <strong>86</strong>
                </div>

            </div>

            <button
                class="file-button"
                onclick="grindApplications(1)"
            >
                <span class="folder-tab"></span>
                KEEP APPLYING
            </button>

        </div>

    `;
}


// ========================================
// 14 — APPLICATION GRIND
// ========================================

function grindApplications(stage) {

    const screen = document.querySelector(".start-screen");


    // -------- ROUND 1 --------

    if (stage === 1) {

        screen.innerHTML = `

            <div class="grind-screen">

                <p class="eyebrow">
                    DAY 07
                </p>

                <h2 class="grind-title">
                    ANOTHER ONE.
                </h2>

                <p class="grind-job">
                    JUNIOR VISUAL DESIGNER
                </p>

                <p class="grind-company">
                    CREATIVE STUDIO · NEW YORK
                </p>

                <button
                    class="grind-apply"
                    onclick="grindApplications(2)"
                >
                    APPLY
                </button>

                <div class="mini-stats">
                    APPLICATIONS: 1
                </div>

            </div>

        `;

    }


    // -------- ROUND 2 --------

    else if (stage === 2) {

        screen.innerHTML = `

            <div class="grind-screen">

                <p class="eyebrow">
                    DAY 10
                </p>

                <h2 class="grind-title">
                    NEXT.
                </h2>

                <p class="grind-job">
                    GRAPHIC DESIGNER
                </p>

                <p class="grind-company">
                    BRAND AGENCY · BROOKLYN
                </p>

                <button
                    class="grind-apply"
                    onclick="grindApplications(3)"
                >
                    APPLY
                </button>

                <div class="mini-stats">
                    APPLICATIONS: 7
                </div>

            </div>

        `;

    }


    // -------- ROUND 3 --------

    else if (stage === 3) {

        screen.innerHTML = `

            <div class="grind-screen">

                <p class="eyebrow">
                    DAY 14
                </p>

                <h2 class="grind-title">
                    NEXT.
                </h2>

                <p class="grind-job">
                    DESIGN ASSISTANT
                </p>

                <p class="grind-company">
                    RETAIL BRAND · NEW YORK
                </p>

                <button
                    class="grind-apply"
                    onclick="grindApplications(4)"
                >
                    APPLY
                </button>

                <div class="mini-stats">
                    APPLICATIONS: 13
                </div>

            </div>

        `;

    }


    // -------- ROUND 4 --------

    else {

        screen.innerHTML = `

            <div class="grind-screen">

                <p class="eyebrow">
                    DAY 18
                </p>

                <h2 class="grind-title">
                    KEEP GOING.
                </h2>

                <p class="grind-job">
                    JUNIOR BRAND DESIGNER
                </p>

                <p class="grind-company">
                    DESIGN STUDIO · MANHATTAN
                </p>

                <button
                    class="grind-apply"
                    onclick="firstRejection()"
                >
                    APPLY
                </button>

                <div class="mini-stats">
                    APPLICATIONS: 21
                </div>

            </div>

        `;
    }
}


// ========================================
// 15 — FIRST REJECTION
// ========================================

function firstRejection() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="email-window">

            <div class="browser-bar">

                <span>
                    INBOX
                </span>

                <span>
                    1 NEW MESSAGE
                </span>

            </div>


            <div class="email-page">

                <p class="email-from">
                    FROM: careers@studio01.com
                </p>

                <p class="email-subject">
                    Re: Junior Designer Application
                </p>


                <div class="email-body">

                    <p>
                        Hi Jennie,
                    </p>

                    <p>
                        Thank you for your interest in the
                        Junior Designer position.
                    </p>

                    <p>
                        After careful consideration, we've decided
                        to move forward with other candidates.
                    </p>

                    <p>
                        We appreciate the time you took to apply
                        and wish you the best in your job search.
                    </p>

                </div>


                <button
                    class="email-button"
                    onclick="afterFirstRejection()"
                >
                    DELETE
                </button>

            </div>

        </div>

    `;
}


// ========================================
// 16 — DASHBOARD
// ========================================

function afterFirstRejection() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="act-screen">

            <p class="eyebrow">
                DAY 18
            </p>

            <h2 class="story-title">
                KEEP GOING.
            </h2>


            <div class="job-stats">

                <div>
                    <span>APPLICATIONS</span>
                    <strong>21</strong>
                </div>

                <div>
                    <span>INTERVIEWS</span>
                    <strong>0</strong>
                </div>

                <div>
                    <span>OPT DAYS LEFT</span>
                    <strong>72</strong>
                </div>

            </div>


            <button
                class="file-button"
                onclick="momJobPopup()"
            >
                <span class="folder-tab"></span>
                KEEP APPLYING
            </button>

        </div>

    `;
}


// ========================================
// 17 — MOM INTERRUPTION
// ========================================

function momJobPopup() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML += `

        <div class="message-popup">

    <div class="mom-header">

    <div class="mom-avatar">
    <img src="images/mom.jpg" alt="Mom">
</div>

    <div class="mom-info">
        <strong>MOM</strong>
        <span>now</span>
    </div>

</div>


            <div class="message-body">

                <p>
                    How is the job search going?
                </p>


                <div class="message-choices">

                    <button onclick="replyToMom('good')">
                        GOOD
                    </button>

                    <button onclick="replyToMom('bad')">
                        NOT GREAT
                    </button>

                    <button onclick="replyToMom('avoid')">
                        I DON'T WANT TO TALK ABOUT IT
                    </button>

                </div>

            </div>

        </div>

    `;
}


// ========================================
// 18 — MOM RESPONSE
// ========================================

function replyToMom(answer) {

    const popup = document.querySelector(".message-popup");

    let response = "";


    if (answer === "good") {

        response = `
            That's good.<br>
            Keep trying. Something will work out.
        `;

    }


    else if (answer === "bad") {

        response = `
            Don't put too much pressure on yourself.<br>
            Have you thought about coming home?
        `;

    }


    else {

        response = `
            Okay.<br>
            I just worry about you.
        `;

    }


    popup.innerHTML = `

        <div class="message-header">

            <span>
                MOM
            </span>

            <span>
                NOW
            </span>

        </div>


        <div class="message-body">

            <p>
                ${response}
            </p>


            <button
                class="message-close"
                onclick="afterMomMessage()"
            >
                CLOSE
            </button>

        </div>

    `;
}


// ========================================
// 19 — AFTER MOM
// ========================================

function afterMomMessage() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="act-screen">

            <p class="eyebrow">
                TWO WEEKS LATER
            </p>

            <h2 class="story-title">
                STILL APPLYING.
            </h2>


            <div class="job-stats">

                <div>
                    <span>APPLICATIONS</span>
                    <strong>37</strong>
                </div>

                <div>
                    <span>INTERVIEWS</span>
                    <strong>0</strong>
                </div>

                <div>
                    <span>OPT DAYS LEFT</span>
                    <strong>58</strong>
                </div>

            </div>


            <button
                class="file-button"
                onclick="firstInterview()"
            >
                <span class="folder-tab"></span>
                CHECK INBOX
            </button>

        </div>

    `;
}


// ========================================
// 20 — FIRST INTERVIEW
// ========================================

function firstInterview() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="email-window interview-email">

            <div class="browser-bar">

                <span>
                    INBOX
                </span>

                <span>
                    1 NEW MESSAGE
                </span>

            </div>


            <div class="email-page">

                <p class="email-from">
                    FROM: hiring@northstudio.com
                </p>


                <p class="email-subject">
                    Interview Invitation
                </p>


                <div class="email-body">

                    <p>
                        Hi Jennie,
                    </p>

                    <p>
                        Thank you for applying.
                    </p>

                    <p>
                        We'd love to schedule a first-round
                        interview with you.
                    </p>

                </div>


                <button
                    class="email-button interview-button"
                    onclick="interviewAccepted()"
                >
                    ACCEPT INTERVIEW
                </button>

            </div>

        </div>

    `;
}


// ========================================
// 21 — INTERVIEW ACCEPTED
// CHECKPOINT
// ========================================

// ========================================
// 21 — INTERVIEW ACCEPTED
// ========================================

function interviewAccepted() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="act-screen">

            <p class="eyebrow">
                FINALLY
            </p>

            <h2 class="story-title">
                AN INTERVIEW.
            </h2>

            <p class="story-text">
                Applications: 37<br>
                Interviews: 1
            </p>

            <button
                class="file-button"
                onclick="interviewPrep()"
            >
                <span class="folder-tab"></span>
                PREPARE
            </button>

        </div>

    `;
}


// ========================================
// 22 — INTERVIEW PREPARATION
// ========================================

function interviewPrep() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="act-screen">

            <p class="eyebrow">
                INTERVIEW TOMORROW
            </p>

            <h2 class="story-title">
                BE READY.
            </h2>

            <div class="interview-checklist">

                <div>
                    <span>RESEARCH COMPANY</span>
                    <span>✓</span>
                </div>

                <div>
                    <span>REVIEW PORTFOLIO</span>
                    <span>✓</span>
                </div>

                <div>
                    <span>PRACTICE ANSWERS</span>
                    <span>✓</span>
                </div>

                <div>
                    <span>PREPARE QUESTIONS</span>
                    <span>✓</span>
                </div>

            </div>

            <button
                class="file-button"
                onclick="interviewQuestionOne()"
            >
                <span class="folder-tab"></span>
                JOIN INTERVIEW
            </button>

        </div>

    `;
}


// ========================================
// 23 — INTERVIEW QUESTION 1
// ========================================

function interviewQuestionOne() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="interview-screen">

            <p class="eyebrow">
                INTERVIEW
            </p>

            <p class="interviewer">
                INTERVIEWER
            </p>

            <h2 class="interview-question">
                Tell me about yourself.
            </h2>

            <div class="interview-answer">

                <button onclick="interviewQuestionTwo()">
                    TALK ABOUT MY EXPERIENCE
                </button>

                <button onclick="interviewQuestionTwo()">
                    TALK ABOUT MY DESIGN WORK
                </button>

                <button onclick="interviewQuestionTwo()">
                    TALK ABOUT WHY I WANT THIS ROLE
                </button>

            </div>

        </div>

    `;
}


// ========================================
// 24 — INTERVIEW QUESTION 2
// ========================================

function interviewQuestionTwo() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="interview-screen">

            <p class="eyebrow">
                INTERVIEW
            </p>

            <p class="interviewer">
                INTERVIEWER
            </p>

            <h2 class="interview-question">
                Why do you want to work here?
            </h2>

            <div class="interview-answer">

                <button onclick="interviewQuestionThree()">
                    I LIKE THE WORK YOU'RE DOING.
                </button>

                <button onclick="interviewQuestionThree()">
                    I WANT TO GROW WITH THE TEAM.
                </button>

                <button onclick="interviewQuestionThree()">
                    THIS ROLE FITS MY EXPERIENCE.
                </button>

            </div>

        </div>

    `;
}


// ========================================
// 25 — INTERVIEW QUESTION 3
// ========================================

function interviewQuestionThree() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="interview-screen">

            <p class="eyebrow">
                INTERVIEW
            </p>

            <p class="interviewer">
                INTERVIEWER
            </p>

            <h2 class="interview-question">
                Where do you see yourself in five years?
            </h2>

            <div class="interview-answer">

                <button onclick="interviewSponsorship()">
                    GROWING AS A DESIGNER.
                </button>

                <button onclick="interviewSponsorship()">
                    TAKING ON MORE RESPONSIBILITY.
                </button>

                <button onclick="interviewSponsorship()">
                    I'M STILL FIGURING THAT OUT.
                </button>

            </div>

        </div>

    `;
}


// ========================================
// 26 — SPONSORSHIP QUESTION
// ========================================

function interviewSponsorship() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="interview-screen sponsorship-interview">

            <p class="eyebrow">
                ONE MORE QUESTION
            </p>

            <p class="interviewer">
                INTERVIEWER
            </p>

            <h2 class="interview-question sponsorship-question">
                Will you require sponsorship in the future?
            </h2>

            <div class="interview-answer">

                <button onclick="afterInterview()">
                    YES
                </button>

                <button onclick="afterInterview()">
                    NOT RIGHT NOW
                </button>

            </div>

        </div>

    `;
}


// ========================================
// 27 — INTERVIEW FINISHED
// ========================================

function afterInterview() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="act-screen">

            <p class="eyebrow">
                INTERVIEW COMPLETE
            </p>

            <h2 class="story-title">
                THAT WENT WELL.
            </h2>

            <p class="story-text">
                They said they'd be in touch soon.
            </p>

            <button
                class="file-button"
                onclick="threeDaysLater()"
            >
                <span class="folder-tab"></span>
                WAIT
            </button>

        </div>

    `;
}


// ========================================
// 28 — THREE DAYS LATER
// ========================================

function threeDaysLater() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="act-screen">

            <p class="eyebrow">
                THREE DAYS LATER
            </p>

            <h2 class="story-title">
                NOTHING YET.
            </h2>

            <p class="story-text">
                Maybe they haven't decided.
            </p>

            <button
                class="file-button"
                onclick="checkInbox(1)"
            >
                <span class="folder-tab"></span>
                CHECK INBOX
            </button>

        </div>

    `;
}


// ========================================
// 29 — REFRESH LOOP
// ========================================

function checkInbox(count) {

    const screen = document.querySelector(".start-screen");


    if (count === 1) {

        screen.innerHTML = `

            <div class="empty-inbox">

                <p class="eyebrow">
                    INBOX
                </p>

                <h2 class="empty-number">
                    0
                </h2>

                <p class="story-text">
                    New messages.
                </p>

                <button
                    class="refresh-button"
                    onclick="checkInbox(2)"
                >
                    REFRESH
                </button>

            </div>

        `;

    }


    else if (count === 2) {

        screen.innerHTML = `

            <div class="empty-inbox">

                <p class="eyebrow">
                    INBOX
                </p>

                <h2 class="empty-number">
                    0
                </h2>

                <p class="story-text">
                    Still nothing.
                </p>

                <button
                    class="refresh-button"
                    onclick="checkInbox(3)"
                >
                    REFRESH AGAIN
                </button>

            </div>

        `;

    }


    else {

        screen.innerHTML = `

            <div class="empty-inbox">

                <p class="eyebrow">
                    INBOX
                </p>

                <h2 class="empty-number">
                    0
                </h2>

                <p class="story-text">
                    No new messages.
                </p>

                <button
                    class="refresh-button"
                    onclick="waitingMomPopup()"
                >
                    REFRESH
                </button>

            </div>

        `;
    }
}


// ========================================
// 30 — MOM INTERRUPTS WAITING
// ========================================

function waitingMomPopup() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML += `

        <div class="message-popup">

            <div class="mom-header">

    <div class="mom-avatar">
    <img src="images/mom.jpg" alt="Mom">
</div>

    <div class="mom-info">
        <strong>MOM</strong>
        <span>now</span>
    </div>

</div>

            <div class="message-body">

                <p>
                    Did you hear back from the interview?
                </p>

                <div class="message-choices">

                    <button onclick="closeWaitingMom()">
                        NOT YET
                    </button>

                    <button onclick="closeWaitingMom()">
                        THEY SAID THEY'D LET ME KNOW
                    </button>

                    <button onclick="closeWaitingMom()">
                        I DON'T KNOW
                    </button>

                </div>

            </div>

        </div>

    `;
}


// ========================================
// 31 — CLOSE MOM
// ========================================

function closeWaitingMom() {

    const popup = document.querySelector(".message-popup");

    popup.innerHTML = `

        <div class="message-header">

            <span>
                MOM
            </span>

            <span>
                NOW
            </span>

        </div>

        <div class="message-body">

            <p>
                Okay.<br>
                I'm sure you'll hear something soon.
            </p>

            <button
                class="message-close"
                onclick="rejectionArrives()"
            >
                CLOSE
            </button>

        </div>

    `;
}


// ========================================
// 32 — REJECTION ARRIVES
// ========================================

function rejectionArrives() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="email-window rejection-two">

            <div class="browser-bar">

                <span>
                    INBOX
                </span>

                <span>
                    1 NEW MESSAGE
                </span>

            </div>


            <div class="email-page">

                <p class="email-from">
                    FROM: hiring@northstudio.com
                </p>

                <p class="email-subject">
                    Re: Interview
                </p>

                <div class="email-body">

                    <p>
                        Hi Jennie,
                    </p>

                    <p>
                        Thank you again for taking the time
                        to speak with our team.
                    </p>

                    <p>
                        We enjoyed learning more about your
                        experience and background.
                    </p>

                    <p>
                        Unfortunately, we've decided to move
                        forward with another candidate.
                    </p>

                    <p>
                        We wish you the best.
                    </p>

                </div>

                <button
                    class="email-button"
                    onclick="afterInterviewRejection()"
                >
                    CLOSE
                </button>

            </div>

        </div>

    `;
}


// ========================================
// 33 — AFTER REJECTION
// ========================================

function afterInterviewRejection() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="act-screen rejection-dashboard">

            <p class="eyebrow">
                DAY 32
            </p>

            <h2 class="story-title">
                KEEP GOING.
            </h2>

            <div class="job-stats">

                <div>
                    <span>APPLICATIONS</span>
                    <strong>37</strong>
                </div>

                <div>
                    <span>INTERVIEWS</span>
                    <strong>1</strong>
                </div>

                <div>
                    <span>OFFERS</span>
                    <strong>0</strong>
                </div>

            </div>

            <p class="opt-warning">
                OPT DAYS LEFT: 58
            </p>

            <button
                class="file-button"
                onclick="startMoneySection()"
            >
                <span class="folder-tab"></span>
                KEEP APPLYING
            </button>

        </div>

    `;
}


// ========================================
// NEXT SECTION CHECKPOINT
// ========================================

// ========================================
// 34 — RENT IS DUE
// ========================================

function startMoneySection() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="act-screen">

            <p class="eyebrow">
                MONTH TWO
            </p>

            <h2 class="story-title">
                RENT IS DUE.
            </h2>

            <p class="story-text">
                Job search or not,<br>
                everything else keeps moving.
            </p>

            <button
                class="file-button"
                onclick="showBankAccount()"
            >
                <span class="folder-tab"></span>
                CHECK ACCOUNT
            </button>

        </div>

    `;
}

// ========================================
// 35 — BANK ACCOUNT
// ========================================

function showBankAccount() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="bank-window">

            <div class="browser-bar">

                <span>
                    CHECKING ACCOUNT
                </span>
                  <span>
                    •••
                </span>

            </div>


            <div class="bank-page">

                <p class="bank-label">
                    AVAILABLE BALANCE
                </p>

                <h2 class="bank-balance">
                    $1,942
                </h2>


                <div class="rent-charge">

                    <span>
                        RENT
                    </span>

                    <strong>
                        $1,650
                    </strong>

                </div>


                <p class="bank-warning">
                    Due today.
                </p>


                <div class="bank-choices">

                    <button onclick="payRent()">
                        PAY RENT
                    </button>

                    <button onclick="askParentsForMoney()">
                        ASK PARENTS
                    </button>

                </div>

            </div>

        </div>

    `;
}
// ========================================
// 36B — ASK PARENTS
// ========================================

function askParentsForMoney() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="message-popup">

            <div class="message-header">

                <span>
                    MOM
                </span>

                <span>
                    NOW
                </span>

            </div>


            <div class="message-body">

                <p>
                    Of course we'll help you.
                </p>

                <p>
                    But how long are you planning
                    to keep looking?
                </p>

                <p>
                    Maybe you should think about
                    coming home.
                </p>

                <button
                    class="message-close"
                    onclick="parentsSentMoney()"
                >
                    CLOSE
                </button>

            </div>

        </div>

    `;
}

// ========================================
// 37 — MONEY RECEIVED
// ========================================

function parentsSentMoney() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="bank-window">

            <div class="browser-bar">

                <span>
                    CHECKING ACCOUNT
                </span>

                <span>
                    + $2,000
                </span>

            </div>


            <div class="bank-page bank-center">

                <p class="bank-label">
                    MONEY RECEIVED
                </p>

                <h2 class="bank-balance">
                    +$2,000
                </h2>

                <p class="bank-warning">
                    From Mom & Dad
                </p>

                <button
                    class="apply-button"
                    onclick="backToJobSearch()"
                >
                    CLOSE
                </button>

            </div>

        </div>

    `;
}
// ========================================
// 38 — BACK TO JOB SEARCH
// ========================================

function backToJobSearch() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="act-screen">

            <p class="eyebrow">
                NEXT MORNING
            </p>

            <h2 class="story-title">
                BACK TO WORK.
            </h2>

            <div class="job-stats">

                <div>
                    <span>APPLICATIONS</span>
                    <strong>37</strong>
                </div>

                <div>
                    <span>INTERVIEWS</span>
                    <strong>1</strong>
                </div>

                <div>
                    <span>OFFERS</span>
                    <strong>0</strong>
                </div>

            </div>

            <button
                class="file-button"
                onclick="secondGrind(1)"
            >
                <span class="folder-tab"></span>
                KEEP APPLYING
            </button>

        </div>

    `;
}
// ========================================
// 39 — SECOND GRIND
// ========================================

function secondGrind(stage) {

    const screen = document.querySelector(".start-screen");


    if (stage === 1) {

        screen.innerHTML = `

            <div class="grind-screen">

                <p class="eyebrow">
                    APPLICATION 38
                </p>

                <h2 class="grind-title">
                    APPLY.
                </h2>

                <button
                    class="grind-apply"
                    onclick="secondGrind(2)"
                >
                    APPLY
                </button>

            </div>

        `;

    }


    else if (stage === 2) {

        screen.innerHTML = `

            <div class="grind-screen">

                <p class="eyebrow">
                    APPLICATION 42
                </p>

                <h2 class="grind-title">
                    APPLY.
                </h2>

                <button
                    class="grind-apply"
                    onclick="secondGrind(3)"
                >
                    APPLY
                </button>

            </div>

        `;

    }


    else if (stage === 3) {

        screen.innerHTML = `

            <div class="grind-screen">

                <p class="eyebrow">
                    APPLICATION 46
                </p>

                <h2 class="grind-title grind-bigger">
                    APPLY.
                </h2>

                <button
                    class="grind-apply"
                    onclick="secondGrind(4)"
                >
                    APPLY
                </button>

            </div>

        `;

    }


    else {

        screen.innerHTML = `

            <div class="grind-screen">

                <p class="eyebrow">
                    APPLICATION 49
                </p>

                <h2 class="grind-title grind-biggest">
                    APPLY.
                </h2>

                <button
                    class="grind-apply"
                    onclick="startJobChaos()"
                >
                    APPLY
                </button>

            </div>

        `;
    }
}
// ========================================
// 40 — CHAOS
// ========================================

function startJobChaos() {

    const screen = document.querySelector(".start-screen");

    screen.classList.add("job-chaos");

    screen.innerHTML = `

        <div class="chaos-center">

            <p class="eyebrow">
                APPLICATION 49
            </p>

            <h2 class="story-title">
                KEEP GOING.
            </h2>

            <p class="story-text">
                You just need one yes.
            </p>

        </div>

    `;


    setTimeout(function() {

        addChaosPopup(
            "EMAIL",
            "Unfortunately, we've decided to move forward with other candidates.",
            "chaos-1"
        );

    }, 500);


    setTimeout(function() {

        addChaosPopup(
            "LINKEDIN",
            "Someone from your class just started a new job.",
            "chaos-2"
        );

    }, 1100);


    setTimeout(function() {

        addChaosPopup(
            "MOM",
            "Any updates?",
            "chaos-3"
        );

    }, 1700);


    setTimeout(function() {

        addChaosPopup(
            "BANK",
            "Your account balance is low.",
            "chaos-4"
        );

    }, 2300);


    setTimeout(function() {

        addChaosPopup(
            "EMAIL",
            "Thank you for your interest...",
            "chaos-5"
        );

    }, 2900);


    setTimeout(function() {

        addChaosPopup(
            "OPT",
            "41 DAYS REMAINING",
            "chaos-6"
        );

    }, 3500);


    setTimeout(function() {

        const button = document.createElement("button");

        button.className = "chaos-button";

        button.innerText = "KEEP APPLYING";

        button.onclick = chaosMore;

        screen.appendChild(button);

    }, 4200);
}

// ========================================
// CHAOS POPUP CREATOR
// ========================================

function addChaosPopup(title, message, className) {

    const screen = document.querySelector(".start-screen");

    const popup = document.createElement("div");

    popup.className = `chaos-popup ${className}`;

    popup.innerHTML = `

        <div class="chaos-header">

            <span>
                ${title}
            </span>

            <span>
                ×
            </span>

        </div>

        <div class="chaos-message">
            ${message}
        </div>

    `;

    screen.appendChild(popup);
}
// ========================================
// 41 — MORE CHAOS
// ========================================

function chaosMore() {

    const screen = document.querySelector(".start-screen");

    const oldButton = document.querySelector(".chaos-button");

    if (oldButton) {
        oldButton.remove();
    }


    addChaosPopup(
        "EMAIL",
        "Position has been filled.",
        "chaos-7"
    );


    setTimeout(function() {

        addChaosPopup(
            "LINKEDIN",
            "Congratulations! 🎉 I’m excited to announce...",
            "chaos-8"
        );

    }, 400);


    setTimeout(function() {

        addChaosPopup(
            "MOM",
            "Have you thought about what you'll do if you don't find one?",
            "chaos-9"
        );

    }, 800);


    setTimeout(function() {

        addChaosPopup(
            "OPT",
            "37 DAYS REMAINING",
            "chaos-10"
        );

    }, 1200);


    setTimeout(function() {

        silenceAfterChaos();

    }, 3000);
}

// ========================================
// 42 — SILENCE
// ========================================

function silenceAfterChaos() {

    const screen = document.querySelector(".start-screen");

    screen.classList.remove("job-chaos");

    screen.innerHTML = `

        <div class="silence-screen">

            <p>
                ...
            </p>

        </div>

    `;


    setTimeout(function() {

        offerNotification();

    }, 1800);
}

// ========================================
// 43 — OFFER
// ========================================

function offerNotification() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="email-window offer-email">

            <div class="browser-bar">

                <span>
                    INBOX
                </span>

                <span>
                    1 NEW MESSAGE
                </span>

            </div>


            <div class="email-page">

                <p class="email-from">
                    FROM: hiring@formstudio.com
                </p>

                <p class="email-subject">
                    Job Offer — Junior Designer
                </p>


                <div class="email-body">

                    <p>
                        Hi Jennie,
                    </p>

                    <p>
                        We're excited to offer you the
                        Junior Designer position.
                    </p>

                    <p>
                        Salary: $52,000 / year
                    </p>

                    <p>
                        Start Date: June 15
                    </p>

                </div>


                <button
                    class="offer-open-button"
                    onclick="openOffer()"
                >
                    VIEW OFFER
                </button>

            </div>

        </div>

    `;
}

// ========================================
// 44 — OPEN OFFER
// ========================================

function openOffer() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="offer-window">

            <p class="eyebrow">JOB OFFER</p>

            <h2 class="offer-title">
                JUNIOR<br>DESIGNER
            </h2>

            <div class="offer-details">

                <div>
                    <span>SALARY</span>
                    <strong>$52,000</strong>
                </div>

                <div>
                    <span>LOCATION</span>
                    <strong>NEW YORK</strong>
                </div>

                <div>
                    <span>SPONSORSHIP</span>
                    <strong>NOT AVAILABLE</strong>
                </div>

            </div>

            <div class="offer-choices">

                <button onclick="acceptFirstOffer()">
                    ACCEPT OFFER
                </button>

                <button onclick="keepLookingAfterOffer()">
                    KEEP LOOKING
                </button>

            </div>

        </div>

    `;
}


// ========================================
// 45A — ACCEPT
// ========================================

function acceptFirstOffer() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="act-screen">

            <p class="eyebrow">
                YOU GOT A JOB.
            </p>

            <h2 class="story-title">
                YOU MADE IT.
            </h2>

            <div class="job-stats">

                <div>
                    <span>EMPLOYMENT</span>
                    <strong>✓</strong>
                </div>

                <div>
                    <span>INCOME</span>
                    <strong>✓</strong>
                </div>

                <div>
                    <span>SPONSORSHIP</span>
                    <strong>—</strong>
                </div>

            </div>

            <button
                class="file-button"
                onclick="eightMonthsLater()"
            >
                <span class="folder-tab"></span>
                CONTINUE
            </button>

        </div>

    `;
}


// ========================================
// 46A — 8 MONTHS LATER
// ========================================

function eightMonthsLater() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="act-screen">

            <p class="eyebrow">
                EIGHT MONTHS LATER
            </p>

            <h2 class="story-title">
                TIME MOVED.
            </h2>

            <p class="story-text">
                You got used to the job.<br>
                You got used to the commute.<br>
                You got used to saying you're doing fine.
            </p>

            <button
                class="file-button"
                onclick="visaProblem()"
            >
                <span class="folder-tab"></span>
                CONTINUE
            </button>

        </div>

    `;
}


// ========================================
// 47A — VISA PROBLEM RETURNS
// ========================================

function visaProblem() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="system-warning">

            <p class="eyebrow">
                STATUS UPDATE
            </p>

            <h2 class="warning-title">
                YOUR WORK AUTHORIZATION
                IS EXPIRING.
            </h2>

            <p class="story-text">
                Your employer cannot sponsor you.
            </p>

            <button
                class="file-button"
                onclick="finalWhatsNext()"
            >
                <span class="folder-tab"></span>
                WHAT NOW?
            </button>

        </div>

    `;
}


// ========================================
// 45B — KEEP LOOKING
// ========================================

function keepLookingAfterOffer() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="act-screen">

            <p class="eyebrow">
                YOU SAID NO.
            </p>

            <h2 class="story-title">
                KEEP LOOKING.
            </h2>

            <p class="story-text">
                Maybe there's something better.
            </p>

            <div class="opt-danger-counter">

                <span>OPT DAYS LEFT</span>

                <strong>31</strong>

            </div>

            <button
                class="file-button"
                onclick="lateStageGrind()"
            >
                <span class="folder-tab"></span>
                KEEP APPLYING
            </button>

        </div>

    `;
}


// ========================================
// 46B — MORE APPLICATIONS
// ========================================

function lateStageGrind() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="act-screen">

            <p class="eyebrow">
                THREE WEEKS LATER
            </p>

            <h2 class="story-title">
                STILL LOOKING.
            </h2>

            <div class="job-stats">

                <div>
                    <span>APPLICATIONS</span>
                    <strong>68</strong>
                </div>

                <div>
                    <span>INTERVIEWS</span>
                    <strong>3</strong>
                </div>

                <div>
                    <span>OFFERS</span>
                    <strong>1</strong>
                </div>

            </div>

            <p class="opt-danger-text">
                12 DAYS LEFT
            </p>

            <button
                class="file-button"
                onclick="secondOffer()"
            >
                <span class="folder-tab"></span>
                CHECK INBOX
            </button>

        </div>

    `;
}


// ========================================
// 47B — SECOND OFFER
// ========================================

function secondOffer() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="offer-window">

            <p class="eyebrow">
                ANOTHER OFFER
            </p>

            <h2 class="offer-title">
                DESIGN<br>ASSISTANT
            </h2>

            <div class="offer-details">

                <div>
                    <span>SALARY</span>
                    <strong>$45,000</strong>
                </div>

                <div>
                    <span>LOCATION</span>
                    <strong>NEW JERSEY</strong>
                </div>

                <div>
                    <span>SPONSORSHIP</span>
                    <strong>UNCLEAR</strong>
                </div>

            </div>

            <div class="offer-choices">

                <button onclick="forcedAccept()">
                    ACCEPT OFFER
                </button>

                <button
                    class="disabled-choice"
                    disabled
                    title="You cannot afford this option."
                >
                    KEEP LOOKING
                </button>

            </div>

            <p class="disabled-note">
                12 DAYS LEFT
            </p>

        </div>

    `;
}


// ========================================
// 48B — FORCED ACCEPT
// ========================================

function forcedAccept() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="act-screen">

            <p class="eyebrow">
                OFFER ACCEPTED
            </p>

            <h2 class="story-title">
                YOU HAVE A JOB.
            </h2>

            <p class="story-text">
                Was that a choice?
            </p>

            <button
                class="file-button"
                onclick="finalWhatsNext()"
            >
                <span class="folder-tab"></span>
                CONTINUE
            </button>

        </div>

    `;
}


// ========================================
// 49 — FINAL WHAT'S NEXT
// ========================================

function finalWhatsNext() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `

        <div class="final-job-screen">

            <p class="eyebrow">
                SO...
            </p>

            <h2 class="final-question">
                WHAT'S<br>NEXT?
            </h2>

            <p class="final-subtitle">
                How much of your life was actually a choice?
            </p>

            <div class="final-choices">

                <button onclick="finalChoice('employer')">
                    FIND AN EMPLOYER
                </button>

                <button onclick="finalChoice('school')">
                    GO BACK TO SCHOOL
                </button>

                <button onclick="finalChoice('home')">
                    GO HOME
                </button>

                <button onclick="finalChoice('unknown')">
                    I DON'T KNOW
                </button>

            </div>

        </div>

    `;
}


// ========================================
// 50 — END
// ========================================

function finalChoice(choice) {

    const screen = document.querySelector(".start-screen");

    let ending = "";


    if (choice === "employer") {

        ending = `
            FIND ANOTHER EMPLOYER.
        `;

    }

    else if (choice === "school") {

        ending = `
            GO BACK TO SCHOOL.
        `;

    }

    else if (choice === "home") {

        ending = `
            GO HOME.
        `;

    }

    else {

        ending = `
            I DON'T KNOW.
        `;

    }


    screen.innerHTML = `

        <div class="final-ending">

            <p class="eyebrow">
                YOUR ANSWER
            </p>

            <h2>
                ${ending}
            </h2>

            <p>
                The question remains.
            </p>

            <h3>
                WHAT'S NEXT?
            </h3>

            <button
                class="restart-button"
                onclick="restartGame()"
            >
                START OVER
            </button>

        </div>

    `;
}

// ========================================
// PAY RENT
// ========================================

function payRent() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `
        <div class="bank-window">

            <div class="browser-bar">
                <span>PAYMENT COMPLETE</span>
                <span>✓</span>
            </div>

            <div class="bank-page bank-center">

                <p class="bank-label">
                    AVAILABLE BALANCE
                </p>

                <h2 class="bank-balance low-balance">
                    $292
                </h2>

                <p class="bank-warning">
                    Rent paid.
                </p>

                <button
                    class="apply-button"
                    onclick="fewDaysLater()"
                >
                    CLOSE
                </button>

            </div>

        </div>
    `;
}


// ========================================
// A FEW DAYS LATER
// ========================================

function fewDaysLater() {

    const screen = document.querySelector(".start-screen");

    screen.innerHTML = `
        <div class="bank-window">

            <div class="browser-bar">
                <span>CHECKING ACCOUNT</span>
                <span>•••</span>
            </div>

            <div class="bank-page bank-center">

                <p class="eyebrow">
                    FIVE DAYS LATER
                </p>

                <p class="bank-label">
                    AVAILABLE BALANCE
                </p>

                <h2 class="bank-balance low-balance">
                    $117
                </h2>

                <div class="rent-charge">
                    <span>GROCERIES</span>
                    <strong>− $68</strong>
                </div>

                <div class="rent-charge">
                    <span>SUBWAY</span>
                    <strong>− $34</strong>
                </div>

                <div class="rent-charge">
                    <span>PHONE</span>
                    <strong>− $73</strong>
                </div>

                <p class="bank-warning">
                    You still don't have a job.
                </p>

                <button
                    class="apply-button"
                    onclick="askParentsForMoney()"
                >
                    ASK PARENTS
                </button>

            </div>

        </div>
    `;
}
