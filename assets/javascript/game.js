$(document).ready(function () {
    // ---------------------------------------- VARIABLES ------------------------------------
    // 1. Related to the timer (see section within 'functions')
    var fiveSecond;
    var fiveSecondInterval;
    var thirtySecond;
    var thirtySecondInterval;

    // 2. Questions as an array of objects
    var questionsGroup = [
        {
            'question': 'Who destroyed the last remaining Horcrux?',
            'options': {
                1: 'Ginny Weasley',
                2: 'Severus Snape',
                3: 'Neville Longbottom',
                4: 'Victor Krum',
            },
            'answer': 3,
            'blurb': '<h3><strong>Neville Longbottom</strong> used the sword of Gryffindor to kill Nagini.</h3>',
            'imageSrc': '<img class="ans-img" src="./assets/images/one.gif" alt="Answer one image" />'
        },

        {
            'question': "What is the name of Dumbledore's phoenix?",
            'options': {
                1: 'Firenze',
                2: 'Fawkes',
                3: 'Fluffy',
                4: 'Hermes',
            },
            'answer': 2,
            'blurb': "The name of Dumbledore's pet phoenix was <strong>Fawkes</strong>.",
            'imageSrc': '<img class="ans-img" src="./assets/images/two.gif" alt="Answer two image" />'
        },

        {
            'question': "Who is Ginny's first boyfriend?",
            'options': {
                1: 'Michael Corner',
                2: 'Zacharias Smith',
                3: 'Harry Potter',
                4: 'Dean Thomas',
            },
            'answer': 1,
            'blurb': "<strong>Michael Corner</strong> was Ginny's first boyfriend.",
            'imageSrc': '<img class="ans-img" src="./assets/images/three.gif" alt="Answer three image" />'
        },

        {
            'question': 'What creatures does Charlie Weasley work with in Romania?',
            'options': {
                1: 'Dementors',
                2: 'Hippogriffs',
                3: 'Boggarts',
                4: 'Dragons',
            },
            'answer': 4,
            'blurb': "Charlie trained <strong>dragons</strong> in Romania",
            'imageSrc': '<img class="ans-img" src="./assets/images/four.gif" alt="Answer four image" />'
        },

        {
            'question': 'Which of the following posts has Albus Dumbledore never held?',
            'options': {
                1: 'Chief Warlock of the Wizengamot',
                2: 'Supreme Mugwump',
                3: 'Professor of Transfiguration at the Hogwarts School of Witchcraft and Wizardry',
                4: 'Head of the Department of International Magical Cooperation',
            },
            'answer': 4,
            'blurb': "Dumbledore never worked for the <strong>Ministry</strong>",
            'imageSrc': '<img class="ans-img" src="./assets/images/five.gif" alt="Answer five image" />'
        },

        {
            'question': "What is Dumbledore's full name?",
            'options': {
                1: 'Albus Wulfric Percival Brian Dumbledore',
                2: 'Albus Percival Wulfric Brian Dumbledore',
                3: 'Albus Wulfric Brian Percival Dumbledore',
                4: 'Albus Percival Brian Wulfric Dumbledore',
            },
            'answer': 2,
            'blurb': "You should know this by now.",
            'imageSrc': '<img class="ans-img" src="./assets/images/six.gif" alt="Answer six image" />'
        },

        {
            'question': "What date is Ron's birthday?",
            'options': {
                1: '24th November',
                2: '1st March',
                3: '5th April',
                4: '2nd February',
            },
            'answer': 2,
            'blurb': "Ron was born on <strong>1st March</strong>, making him a Pisces!",
            'imageSrc': '<img class="ans-img" src="./assets/images/seven.gif" alt="Answer seven image" />'
        },

        {
            'question': 'How many points is the Golden Snitch worth?',
            'options': {
                1: '50',
                2: '500',
                3: '150',
                4: '100',
            },
            'answer': 3,
            'blurb': "Viktor Krum caught the snitch for <strong>150 pts</strong> but Bulgaria still lost the World Cup!",
            'imageSrc': '<img class="ans-img" src="./assets/images/eight.gif" alt="Answer eight image" />'
        },

        {
            'question': "What do Ron and Hermione use to destroy Helga Hufflepuff's cup?",
            'options': {
                1: 'A Basilisk Fang',
                2: 'The Sword of Gryffindor',
                3: 'Fiendfyre',
                4: 'The Killing Curse',
            },
            'answer': 1,
            'blurb': "Ron came up with the idea to use a <strong>Basilisk Fang</strong>, inspiring this famous kiss.",
            'imageSrc': '<img class="ans-img" src="./assets/images/nine.gif" alt="Answer nine image" />'
        },

        {
            'question': 'What body part does Ron leave behind when he does his apparition test?',
            'options': {
                1: 'His nose',
                2: 'Half an eyebrow',
                3: 'His right foot',
                4: 'His left hand',
            },
            'answer': 2,
            'blurb': "Ron lost <strong>half of his eyebrow</strong>.",
            'imageSrc': '<img class="ans-img" src="./assets/images/ten.gif" alt="Answer ten image" />'
        },

        {
            'question': 'When Harry attended his hearing at the Ministry of Magic, what colour paper aeroplanes flew into the life at Level Four?',
            'options': {
                1: 'Mint green',
                2: 'Pale violet',
                3: 'Yellow',
                4: 'Pale blue',
            },
            'answer': 2,
            'blurb': "The envelopes were, hem hem, <strong>pale violet<strong>.",
            'imageSrc': '<img class="ans-img" src="./assets/images/eleven.gif" alt="Answer eleven image" />'
        },

        {
            'question': 'In Harry Potter and the Prisoner of Azkaban, where does the Knight Bus drop Harry off?',
            'options': {
                1: "King's Cross Station",
                2: 'Privet Drive',
                3: 'Hogwarts',
                4: 'The Leaky Cauldron',
            },
            'answer': 4,
            'blurb': "Harry chose to be dropped off at <strong>the Leaky Cauldron<strong>, since he thought he was not welcome at Hogwarts anymore",
            'imageSrc': '<img class="ans-img" src="./assets/images/twelve.gif" alt="Answer twelve image" />'
        },
    ];

    // 3. Game stats
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var progress = 1;

    // 4. To check answer
    var check;
    var answer;
    var selection;

    // ---------------------------------------- FUNCTIONS ------------------------------------
    // 1. Timer
    // defined within pages 

    // 2. To check if the answer is correct
    function check(selection) {
        if (selection === answer) {
            return true;
        } else {
            return false;
        };
    };

    // 3. Show/Hide Pages -- this just toggles visibility, #4 loads the info on the pages
    function showQuestionPage() {
        $('#intro-screen').hide();
        $('#quiz-answer').hide();
        $('#quiz').show();
        $('#quiz-question').show();
    };

    function showAnswerPage() {
        $('#quiz-question').hide();
        $('#quiz-answer').show();
    };

    function showGameOver() {
        $('#quiz').hide();
        $('#game-over').show();
    };

    // 4. Load Page Info
    function loadQuestion() {
        // timer
        if (typeof fiveSecondInterval !== 'undefined') {
            clearInterval(fiveSecondInterval);
        };
        thirtySecond = 30;
        $('.time-left').text(thirtySecond);
        function thirtySCountdown() {
            if (thirtySecond === 0) {
                clearInterval(thirtySecondInterval);
                showAnswerPage();
                loadTimeUp();
            } else {
                thirtySecond--;
                $('.time-left').text(thirtySecond);
            };
        };
        thirtySecondInterval = setInterval(thirtySCountdown, 1000);
        $('.timer-text').text('TIME LEFT:');

        // question info
        $('#text').text(questionsGroup[progress - 1]['question']);
        $('#option-1').text(questionsGroup[progress - 1]['options'][1]);
        $('#option-2').text(questionsGroup[progress - 1]['options'][2]);
        $('#option-3').text(questionsGroup[progress - 1]['options'][3]);
        $('#option-4').text(questionsGroup[progress - 1]['options'][4]);

        // update variable that contains answer
        answer = parseInt(questionsGroup[progress - 1].answer);
        console.log('answer: ' + answer);
    };

    function loadCorrectAnswer() {
        // timer
        if (typeof thirtySecondInterval !== 'undefined') {
            clearInterval(thirtySecondInterval);
        };
        fiveSecond = 5;
        $('.time-left').text(fiveSecond);
        function fiveSCountdown() {
            if (fiveSecond == 0) {
                clearInterval(fiveSecondInterval);
                if (progress == 12) {
                    showGameOver();
                    loadGameOver();
                } else {
                    progress++;
                    $('.prog').text(progress);
                    showQuestionPage();
                    loadQuestion();
                };
            } else {
                fiveSecond--;
                $('.time-left').text(fiveSecond);
            };
        };
        fiveSecondInterval = setInterval(fiveSCountdown, 1000);
        $('.timer-text').text('Next question in... ');

        // answer info
        $('#answer-header').html('Your selection was... <strong>correct</strong>!');
        $('#answer-blurb').html(questionsGroup[progress - 1]['blurb']);
        $('#answer-image').html(questionsGroup[progress - 1]['imageSrc']);

    };


    function loadIncorrectAnswer() {
        // timer
        if (typeof thirtySecondInterval !== 'undefined') {
            clearInterval(thirtySecondInterval);
        };
        fiveSecond = 5;
        $('.time-left').text(fiveSecond);
        function fiveSCountdown() {
            if (fiveSecond == 0) {
                clearInterval(fiveSecondInterval);
                if (progress == 12) {
                    showGameOver();
                    loadGameOver();
                } else {
                    progress++;
                    $('.prog').text(progress);
                    showQuestionPage();
                    loadQuestion();
                };
            } else {
                fiveSecond--;
                $('.time-left').text(fiveSecond);
            };
        };
        fiveSecondInterval = setInterval(fiveSCountdown, 1000);
        $('.timer-text').text('Next question in... ');

        // answer info
        $('#answer-header').html('Your selection was... <strong>incorrect</strong>!');
        $('#answer-blurb').html(questionsGroup[progress - 1]['blurb']);
        $('#answer-image').html(questionsGroup[progress - 1]['imageSrc']);
    };

    function loadTimeUp() {
        if (typeof thirtySecondInterval !== 'undefined') {
            clearInterval(thirtySecondInterval);
        };
        fiveSecond = 5;
        $('.time-left').text(fiveSecond);
        function fiveSCountdown() {
            if (fiveSecond == 0) {
                clearInterval(fiveSecondInterval);
                if (progress == 12) {
                    showGameOver();
                    loadGameOver();
                } else {
                    progress++;
                    $('.prog').text(progress);
                    showQuestionPage();
                    loadQuestion();
                };
            } else {
                fiveSecond--;
                $('.time-left').text(fiveSecond);
            };
        };
        fiveSecondInterval = setInterval(fiveSCountdown, 1000);
        $('.timer-text').text('Next question in... ');

        // answer info
        $('#answer-header').html('You ran out of time!');
        $('#answer-blurb').html(questionsGroup[progress - 1]['blurb']);
        $('#answer-image').html(questionsGroup[progress - 1]['imageSrc']);
    };

    function loadGameOver() {
        if (typeof thirtySecondInterval !== 'undefined') {
            clearInterval(thirtySecondInterval);
        };
        if (typeof fiveSecondInterval !== 'undefined') {
            clearInterval(fiveSecondInterval);
        };
        $('#correct').text(correct);
        $('#incorrect').text(incorrect);
        $('#unanswered').text(unanswered);
    };

    // ---------------------------------------- EXECUTION ------------------------------------
    $('#start-btn').on('click', function () {
        showQuestionPage();
        loadQuestion();
    });

    $('#submit-btn').on('click', function () {
        var selection = parseInt($('input:radio[name=selection]:checked').val());
        console.log('user: ' + selection);
        clearInterval(thirtySecondInterval);
        if (!selection) {
            alert('Please make a selection!');
        } else {
            if (!check(selection)) {
                showAnswerPage();
                loadIncorrectAnswer(2);
            } else {
                showAnswerPage();
                loadCorrectAnswer(1);
            };
        };
    });
});
