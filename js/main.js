$(document).ready(function(){
		$('#my-contact-div').contactable(
        {
            subject: 'feedback URL:'+location.href,
            url: 'mail.php',
            name: 'Name',
            email: 'Email',
            message : 'Nachricht',
            submit : 'Senden',
            recievedMsg : 'Thank you for your message',
            notRecievedMsg : 'Sorry but your message could not be sent, try again later',
            disclaimer: 'Hier könnt ihr Text einfügen',
            hideOnSubmit: true
        });





        //$(".navi_planeten").tipTip({maxWidth: "auto", edgeOffset: 10});


           


       

});



