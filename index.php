<!DOCTYPE html>
<html>
<head>
    <title>antisozial.team</title>
    <meta charset="UTF-8">
    <meta name="description" content="antisozial.team - what even is humanity">
    <meta name="keywords" content="antisozial.team, antisozial, team">
    <meta name="author" content="sukuizu">
    <meta property="og:type" content="site">
    <meta property="og:title" content="antisozial.team">
    <meta property="og:description" content="antisozial.team - what even is humanity">
    <meta property="og:url" content="https://antisozial.team/">
    <meta property="og:image" content="assets/icons/as.png">
    <meta itemprop="name" content="antisozial.team">
    <meta itemprop="description" content="antisozial.team - what even is humanity">
    <meta itemprop="image" content="assets/icons/as.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="shortcut icon" href="assets/icons/as.jpg" type="image/x-icon">

    <script type="text/javascript" src="assets/javascript/app.js"></script>
</head>

<body>
    <div id="main">
        <table class="box">
        <tbody>
            <tr><td><span id="line1" style="white-space:pre;"></span></td></tr>
            <tr><td><span id="line2" style="white-space:pre;"></span></td></tr>
            <tr><td><span id="line3 space" style="white-space:pre;"> </span></td></tr>
            <tr><td><span id="line4" style="white-space:pre;"></span></td></tr>
        </tbody>
        </table>
    </div>

    <div class="container" style="display: none;">
        <h1 class="brand-header">
            <a href="https://steamcommunity.com/groups/QMI" target="_BLANK">antisozial.team</a>
        </h1>
        
        <p><span id="brand"></span></p>
    </div>

    <div class="marquee-container" style="display: none">
        <pre>|<div id="marquee"></div>|</pre>
    </div>

    <div class="background" style="display: none;">
        <div id="pattern"></div>

        <audio id="audio" loop="">
            <source src="https://antisozial.team/assets/others/1.mp4" type="audio/mp4">
            <script>
                var audio = document.getElementById("audio");

                app.audioElement = audio;
                app.audioElement.volume = 0;
            </script>
        </audio>

        <video id="background" loop="">
            <source src="<?php echo rand(0, 1); ?>.mp4" type="audio/mp4">
            <script>
                var video = document.getElementById("background");

                app.videoElement = video;
                app.videoElement.volume = 0;
            </script>
        </video>
    </div>

    <div class="top-right">
        <i><a class="skip">skip intro</a></i>
    </div>

    <div class="footer">
        <i><a href="https://discord.gg/aubDJVF" target="_BLANK">Discord server</a></i>
    </div>

    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link rel="stylesheet" type="text/css" href="assets/stylesheets/stylesheet.css">
    <script type="text/javascript" src="assets/javascript/lib/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="assets/javascript/lib/jquery.marquee.min.js"></script>
    <script type="text/javascript" src="assets/javascript/lib/jquery.cookie.min.js"></script>
    <script type="text/javascript" src="assets/javascript/lib/typed.min.js"></script>
    <script type="text/javascript" src="assets/javascript/portfolio.js"></script>
    <script type="text/javascript" src="assets/javascript/analytics.js"></script>
</body>
</html>