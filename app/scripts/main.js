/* global domready, Snap, mina */'use strict';domready(function() {    console.log('We are a go!');    var s = window.s = new Snap('#main-svg');    // var el = document.querySelector('#main-svg');    var nickhs = s.paper.text(0, 96, 'LOADING'.split(''));    var width = window.innerWidth - s.select('text').node.clientWidth;    width = width / 2;    nickhs.attr({        fill: '#fafafa',        stroke: '#333',        strokeWidth: 3,        'stroke-dasharray': 500,        x: width    });    nickhs.animate({        'stroke-dashoffset': 0,        'letter-spacing': '0px',        strokeWidth: 0,        fill: '#333'    }, 2500, null, function() {        console.log('animation done');        nickhs.attr({            strokeWidth: 0        });    });});