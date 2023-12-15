var config = {
    "particles": {
      "number": {
        "value": 473,
        "density": {
          "enable": true,
          "value_area": 7812.5616521595
        }
      },
      "color": {
        "value": "#ff3419"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#ffb10b"
        },
        "polygon": {
          "nb_sides": 6
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.9075197878771135,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 23.67442924896818,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 57.54245754245754,
          "size_min": 100,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 236.74429248968178,
        "color": "#ffb10b",
        "opacity": 1,
        "width": 1.2626362266116362
      },
      "move": {
        "enable": true,
        "speed": 0.75,
        "direction": "right",
        "random": true,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 0,
          "rotateY": 0
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 767.4129656247711,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
}


particlesJS('site__bg', config);