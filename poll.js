document.addEventListener('DOMContentLoaded', function() {
    const pollQuestionElement = document.getElementById('poll-question');
    const pollOptionsElement = document.getElementById('poll-options');
    const submitPollButton = document.getElementById('submit-poll');
    const resultsContainer = document.getElementById('results-container');
    const resultsChartCanvas = document.getElementById('results-chart').getContext('2d');
    const resultsTextElement = document.getElementById('results-text');
    let myChart;

    const polls = [
        {
            question: "What's your favorite way to spend a weekend?",
            options: ["Relaxing at home", "Going out with friends", "Exploring nature", "Working on a hobby"],
            votes: [0, 0, 0, 0]
        },
        {
            question: "Which programming language do you prefer?",
            options: ["JavaScript", "Python", "Java", "C++"],
            votes: [0, 0, 0, 0]
        },
        {
            question: "What type of music do you enjoy the most?",
            options: ["Pop", "Rock", "Classical", "Electronic"],
            votes: [0, 0, 0, 0]
        }
    ];

    function displayPoll() {
        const randomIndex = Math.floor(Math.random() * polls.length);
        const currentPoll = polls[randomIndex];
        pollQuestionElement.textContent = currentPoll.question;
        pollOptionsElement.innerHTML = '';

        currentPoll.options.forEach((option, index) => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'poll-answer';
            input.value = index;
            input.id = `option-${index}`;

            const label = document.createElement('label');
            label.textContent = option;
            label.setAttribute('for', `option-${index}`);

            pollOptionsElement.appendChild(input);
            pollOptionsElement.appendChild(label);
            pollOptionsElement.appendChild(document.createElement('br'));
        });

        // Store the current poll index
        pollOptionsElement.dataset.currentPollIndex = randomIndex;
        resultsContainer.style.display = 'none';
    }

    function displayResults(pollData) {
        resultsContainer.style.display = 'block';
        const totalVotes = pollData.votes.reduce((sum, vote) => sum + vote, 0);
        let resultsText = "Results: ";

        pollData.options.forEach((option, index) => {
            const percentage = totalVotes > 0 ? ((pollData.votes[index] / totalVotes) * 100).toFixed(1) : 0;
            resultsText += `${option}: ${percentage}%, `;
        });
        resultsTextElement.textContent = resultsText.slice(0, -2); // Remove the trailing comma and space

        if (myChart) {
            myChart.destroy();
        }

        myChart = new Chart(resultsChartCanvas, {
            type: 'bar',
            data: {
                labels: pollData.options,
                datasets: [{
                    label: 'Votes',
                    data: pollData.votes,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }

    submitPollButton.addEventListener('click', function() {
        const selectedOption = document.querySelector('input[name="poll-answer"]:checked');
        const currentPollIndex = parseInt(pollOptionsElement.dataset.currentPollIndex);

        if (selectedOption && !isNaN(currentPollIndex) && currentPollIndex < polls.length) {
            polls[currentPollIndex].votes[selectedOption.value]++;
            displayResults(polls[currentPollIndex]);
            // Optionally disable further voting
            const radioButtons = document.querySelectorAll('input[name="poll-answer"]');
            radioButtons.forEach(button => button.disabled = true);
            submitPollButton.disabled = true;
        } else {
            alert('Please select an option before submitting.');
        }
    });

    displayPoll(); // Initial display of a random poll
});
