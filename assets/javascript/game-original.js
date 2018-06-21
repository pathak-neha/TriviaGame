$(document).ready(function () {
    // ---------------------------------------- VARIABLES ------------------------------------
    // 1. Related to the timer (see section within 'functions')
    var thirtySecond;
    var thirtySecondInterval;
    var fiveSecond;
    var fiveSecondInterval;

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
            'answer-blurb': '<h3></h3>',
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
        },
    ];

    // 3. Game stats
    var correct = 0;
    var incorrect = 0;
    var progress = 1;

    // ---------------------------------------- FUNCTIONS ------------------------------------
    // 1. Show/Hide Pages
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
        $('#quiz-question').hide();
        $('#quiz-answer').hide();
        $('#game-over').show();
    };

    // 2. Load Page Info
    function loadQuestion() {
        // timer
        thirtySecond = 30;
        thirtySecondInterval = setInterval(thirtySCountdown, 1000);
        function thirtySCountdown() {
            if (thirtySecond===0) {
                clearTimeout(thirtySecondInterval);
                showAnswerPage();
                loadAnswer(); // ***** to add specificity
            } else {
                thirtySecond--;
                $('.time-left').text(thirtySecond);
            };
        };

        // question info
        $('#text').text(questionsGroup[progress - 1].question);
        $('#option-1').text(questionsGroup[progress - 1].options[1]);
        $('#option-2').text(questionsGroup[progress - 1].options[2]);
        $('#option-3').text(questionsGroup[progress - 1].options[3]);
        $('#option-4').text(questionsGroup[progress - 1].options[4]);
    };

    function loadAnswer() {
        // timer
        fiveSecond = 6;
        fiveSecondInterval = setInterval(fiveSCountdown, 1000);
        function fiveSCountdown() {
            if (fiveSecond == 0) {
                clearTimeout(fiveSecondInterval);
                progress++;
                $('.prog').text(progress);
                showQuestionPage();
                loadQuestion();
            } else {
                fiveSecond--;
                $('.time-left').text(fiveSecond);
            };
        };

        // answer info


    };


    // ---------------------------------------- EXECUTION ------------------------------------
    $('#start-btn').on('click', function () {
        showQuestionPage();
        loadQuestion();
    });

    $('#submit-btn').on('click', function () {
        var answer = $('input:radio[name=answer]:checked').val();
        clearTimeout(thirtySecondInterval);
        if (!answer) {
            alert('Please make a selection!');
        } else {
            if (answer === questionsGroup[progress].answer) {
                correct++;
                showAnswerPage();
                loadAnswer(); // ***** to add specificity
            } else {
                incorrect++;
                showAnswerPage();
                loadAnswer(); // ***** to add specificity
            }
        }
    });

});