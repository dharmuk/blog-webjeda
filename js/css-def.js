var cb=function(){var a=document.createElement("link");a.rel="stylesheet";var b=document.createElement("link");b.rel="stylesheet";a.href="/css/main.css";b.href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css";var c=document.getElementsByTagName("head")[0];c.parentNode.insertBefore(a,c);a=document.getElementsByTagName("head")[0];a.parentNode.insertBefore(b,a)},raf=requestAnimationFrame||mozRequestAnimationFrame||webkitRequestAnimationFrame||msRequestAnimationFrame;
raf?raf(cb):window.addEventListener("load",cb);