$(document).ready(function() {
    var plinks = [
		{
            name: 'nico',
            plink: 'https://steamcommunity.com/profiles/76561198451347760'
        },
        {
            name: 'shaddix',
            plink: 'http://steamcommunity.com/profiles/76561198193064889'
        }
		];
 
    for(var i in plinks) {
        var plink = plinks[i];

        $('#marquee').append('<a href="' + plink.plink + '">' + plink.name + '</a>');

        var plink = $('#marquee').children('a').last();
        
        if(i != plinks.length - 1) {
            $('#marquee').append(' x ');
        }
    }

    $('#marquee').marquee({
        duration: 8000,
        gap: 400,
        delayBeforeStart: 0,
        direction: 'right',
        duplicated: true
    });
});