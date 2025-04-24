document.addEventListener('DOMContentLoaded', function() {
    const facts = [
        "Did you know that some cats are allergic to humans? They just try not to make a big deal about it.",
        "Did you know that pigeons can get surprisingly offended if you don't share your snacks. They have standards!",
        "Did you know that squirrels plan elaborate escape routes in case of a rogue acorn heist.",
        "Did you know that the Earth is slightly lopsided because one time everyone on Australia jumped at once?",
        "Did you know that some houseplants judge your interior decorating choices... silently, of course.",
        "Did you know that your socks mysteriously disappear in the laundry because they're off having secret adventures?",
        "Did you know that the internet runs on cat videos and the occasional strongly worded comment.",
        "Did you know that some people can wiggle their ears, which is a superpower only slightly less impressive than flight.",
        "Did you know that dust bunnies under your bed are actually tiny, shy creatures having a convention?",
        "Did you know that the 'mute' button on your TV remote is the most powerful button in the universe during commercials?",
        "Did you know that toasters secretly communicate with each other about your bread preferences?",
        "Did you know that belly buttons are just outies judging innies?",
        "Did you know that traffic lights have a favorite color, but they're not allowed to show favoritism?",
        "Did you know that your pet's sighs are actually tiny lectures about your life choices?",
        "Did you know that clouds are just water vapor having a very dramatic group hug?",
        "Did you know that the snooze button on your alarm clock is a master negotiator with the Sandman?",
        "Did you know that fortune cookies are often disappointed with your reaction to their profound wisdom?",
        "Did you know that the static cling on your clothes is just tiny fabric ghosts trying to hold hands?",
        "Did you know that left socks go missing because they've formed a secret society dedicated to comfort?",
        "Did you know that the little plastic tips on shoelaces are called aglets, and they dream of one day becoming superheroes?",
        
    ];

    const factElement = document.getElementById('random-fact');
    if (factElement) {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factElement.textContent = facts[randomIndex];
    }
});
