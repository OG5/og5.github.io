var _app = function () {
    this.id = 0;
    this.videoElement = null;
    this.audioElement = null;
    this.musicVolume = 0.12;
    this.musicFadeIn = 4000;
    this.skippedIntro = false;
    this.backgroundToggler = false;
    this.shouldIgnoreVideo = false;
    this.effects = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello"];
    this.brandDescription = [
        "nigga bullies", 
        "pro roblox players", 
        "tf2 spinners",
        "back to where it all started"
    ];

    this.titleChanger = function (text, delay) {
        text = text ||
            ['a', 'an', 'ant', 'anti', 'antis', 'antiso', 'antisoz', 'antisozi', 'antisozia', 'antisozial', 'antisozial.', 'antisozial.t', 'antisozial.te', 'antisozial.tea', 'antisozial.team', 'ntisozial.team', 'tisozial.team', 'isozial.team', 'sozial.team', 'ozial.team', 'zial.team', 'ial.team', 'al.team', 'l.team', '.team', 'team', 'eam', 'am', 'm', '⠀⠀'];
        delay = delay || 2000;

        var counter = 0;

        setInterval(function () {
            if(counter < text.length) 
                document.title = text[counter++]; 
            else 
                document.title = text[counter = 0];
        }, delay);
    }

    this.iconChanger = function (urls, delay) {
        if (!urls)
            return;

        delay = delay || 800;

        var counter = 0;
        
        setInterval(function () {
            if(counter < urls.length) {
                var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                link.type = 'image/x-icon';
                link.rel = 'shortcut icon';
                link.href = urls[counter];
                document.getElementsByTagName('head')[0].appendChild(link);
            }
            else 
                counter = 0;

           ++counter;
        }, delay);
    }
};

var app = new _app();
