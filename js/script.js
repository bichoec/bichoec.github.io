$( document ).ready(function() {
    $("#navigationLink").click(function() {
        $(location).attr('href', 'https://www.linkedin.com/in/eric-guzmán-279ba6126/');
    });

    $("#navigationLinked").click(function() {
        alert("A");
        $(location).attr('href', 'https://www.linkedin.com/in/eric-guzmán-279ba6126/');
    });

    $("#navigationTwitter").click(function() {
        $(location).attr('href', 'https://twitter.com/ibuGs_');
    });

    $("#navigationGit").click(function() {
        $(location).attr('href', 'https://github.com/bichoec');
    });

    $("#navigationStack").click(function() {
        $(location).attr('href', 'https://es.stackoverflow.com/users/154236/bicho?tab=profile');
    });

    $("#homeButton").click(function() {
        $(location).attr('href', 'https://bichoec.github.io');
    });

    $("#celitButton").click(function() {
        $(location).attr('href', 'https://bichoec.github.io/celit.html');
    });
});