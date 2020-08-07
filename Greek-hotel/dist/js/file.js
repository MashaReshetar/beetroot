var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '506',
    width: '619',
    videoId: '62pONgRwghE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    // setTimeout(stopVideo, 6000);
    done = true;
  }
}



function stopVideo() {
  player.stopVideo();
}

(function(exports) {
  "use strict";



function initMap() {
  var myLatLng = {lat: 40.710371, lng: -74.060113};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: myLatLng,

    styles: [
      {elementType: 'geometry', stylers: [{color: '#f5f5f5'}]},
      {elementType: 'labels.icon', stylers: [{visibility: 'off'}]},
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#616161'
          }
        ]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#f5f5f5'
          }
        ]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#bdbdbd'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#eeeeee'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: '#e5e5e5'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            color: '#ffffff'
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {
            color: '#dadada'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#616161'
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e'
          }
        ]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [
          {
            color: '#e5e5e5'
          }
        ]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [
          {
            color: '#eeeeee'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#c9c9c9'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e'
          }
        ]
      }
    ]
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello!',
    icon: './image/map.png'
  });


}

exports.initMap = initMap;
})((this.window = this.window || {}));


// slider1

$(document).ready(function(){
  $('.mainPage__wrapper').slick({
    accessibility: true,
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<img src="./image/slider/arrow-left.png" class="prev">',
    nextArrow: '<img src="./image/slider/arrow-right.png" class="next">'
  });
});

// slider2

$(document).ready(function(){
  $('.rooms__slider').slick({
    accessibility: true,
    // dots: true,
    slidesToShow: 7,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    

  });
});


  

// datepicker

$(document).ready(function () {
  $('#datepicker').datepicker({
      format: 'dd-mm-yyyy',
      startDate: '+1d'
  });
});

$(document).ready(function () {
  $('#datepicker2').datepicker({
      format: 'dd-mm-yyyy',
      startDate: '+1d'
  });
});

  // DropDown

function DropDown(el) {
  this.dd = el;
  this.placeholder = this.dd.children('span');
  this.opts = this.dd.find('ul.dropdown > li');
  this.val = '';
  this.index = -1;
  this.initEvents();
}
DropDown.prototype = {
  initEvents : function() {
    var obj = this;

    obj.dd.on('click', function(event){
      $(this).toggleClass('active');
      return false;
    });

    obj.opts.on('click',function(){
      var opt = $(this);
      obj.val = opt.text();
      obj.index = opt.index();
      obj.placeholder.text('Adults: ' + obj.val);
    });
  },
  getValue : function() {
    return this.val;
  },
  getIndex : function() {
    return this.index;
  }
}

$(function() {

  var dd = new DropDown( $('#dd') );

  $(document).click(function() {
    // all dropdowns
    $('.wrapper-dropdown').removeClass('active');
  });

});

function DropDown2(el) {
  this.dd = el;
  this.placeholder = this.dd.children('span');
  this.opts = this.dd.find('ul.dropdown > li');
  this.val = '';
  this.index = -1;
  this.initEvents();
}
DropDown2.prototype = {
  initEvents : function() {
    var obj = this;

    obj.dd.on('click', function(event){
      $(this).toggleClass('active');
      return false;
    });

    obj.opts.on('click',function(){
      var opt = $(this);
      obj.val = opt.text();
      obj.index = opt.index();
      obj.placeholder.text('Children: ' + obj.val);
    });
  },
  getValue : function() {
    return this.val;
  },
  getIndex : function() {
    return this.index;
  }
}

$(function() {

  var dd = new DropDown2( $('#drop') );

  $(document).click(function() {
    // all dropdowns
    $('.wrapper-dropdown').removeClass('active');
  });

});

// about

