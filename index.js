//js for the calendly link ove the let's connect button
var button = document.getElementById('b1');

//event listener
button.addEventListener('click', function() {
    // link for the calendly 30 min growusmedia meet
    var link = 'https://calendly.com/growus-media/30min';

    // Open the link in a new tab when the button is clicked
    window.open(link, '_blank');
});
