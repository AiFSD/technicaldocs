var blogs = {
    'Built-in objects': 'This is the blog content for Built-in objects...',
    'Expressions & operators': 'This is the blog content for Expressions & operators...',
    'Statements & declarations': 'This is the blog content for Statements & declarations...',
    'Functions': 'This is the blog content for Functions...',
    'Classes': 'This is the blog content for Classes...',
    'Regular expressions': 'This is the blog content for Regular expressions...',
    'Errors': 'This is the blog content for Errors...',
    'Misc': 'This is the blog content for Misc...',
    'JavaScript first steps': 'This is the blog content for JavaScript first steps...',
    'JavaScript building blocks': 'This is the blog content for JavaScript building blocks...',
    'JavaScript objects': 'This is the blog content for JavaScript objects...',
    'Asynchronous JavaScript': 'This is the blog content for Asynchronous JavaScript...',
    'How to use promises': 'This is the blog content for How to use promises...'
};

var buttons = document.getElementsByClassName('first-name');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
        var button = event.target;
        var topic = button.textContent.trim(); 

        
        var blogContent = blogs[topic];

        
        document.querySelector('.rightcontainer').innerHTML = blogContent;
    });
}
