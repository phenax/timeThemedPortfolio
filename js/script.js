/*
TIME-THEMED PORTFOLIO CONCEPT
 Click on the time of the day you want to theme of the page to be.
OR
 Visit the page at a different time.
*/


function Begin() {
  this.$doc = $('html,body');
  this.$home = $('.home');
  this.wid = (parseInt($(window).width()) / 10);
  this.off = (parseInt($(window).height()) - parseInt(this.$home.height()));
  this.$doc.animate({
    'scrollTop': this.$home.offset().top - this.off,
    'scrollLeft': this.$home.offset().left - this.wid
  });

  // Body bgcolor
  this.colors = {
    morn: "#7EC0EE",
    after: "#619CC6",
    eve: "#ffc",
    night: "#222"
  };

  // Nav bgcolor
  this.colorsboo = {
    morn: "#FFC107",
    after: "#FF9800",
    eve: "#F44336",
    night: "#53646E"
  };

  // Nav color
  this.colorsboot = {
    morn: "#fff",
    after: "#fff",
    eve: "#fff",
    night: "#fff"
  };

  this.time();
  this.setbg();
  this.listen();
  this.changelistenbg();
}

// click event handler
Begin.prototype.listen = function() {
  var that = this;
  $('nav>ul>li>button').bind('click', function() {
    var id = $(this).attr('id');
    var $i = $('.' + id);
    that.$doc.animate({
      'scrollTop': $i.offset().top - 100,
      'scrollLeft': $i.offset().left - that.wid
    }, 600);
  });
};

// selects color according to time
Begin.prototype.time = function() {
  var date = new Date();
  var time = date.getHours();
  var col;
  var coo = this.colors;
  var boo = this.colorsboo;
  var boot = this.colorsboot;

  if(time >= 6 && time < 12) {
    col = [coo.morn, boo.morn, boot.morn];
  } else if(time >= 12 && time <= 16) {
    col = [coo.after, boo.after, boot.after];
  } else if(time > 16 && time <= 19) {
    col = [coo.even, boo.even, boot.even];
  } else {
    col = [coo.night, boo.night, boot.night];
  }
  this.col = col;
  this.setbg();
};

// sets color
Begin.prototype.setbg = function() {
  var col = this.col;
  $('body').css({
    'transition': 'all 0.3s ease-in-out',
    'background-color': col[0]
  });
  $('section').css({
    'transition': 'all 0.3s ease-in-out',
    'border-color': col[1]
  });
  $('nav>ul').css({
    'transition': 'all 0.3s ease-in-out',
    'background-color': col[1]
  });
  $('nav>ul>li>button').css({
    'transition': 'all 0.3s ease-in-out',
    'color': col[2]
  });
};

// selects color on click
Begin.prototype.changelistenbg = function() {
  var that = this;
  $('.changet').click(function() {
    var id = $(this).attr('id');
    var colo = that.colors[id];
    var colob = that.colorsboo[id];
    var colobt = that.colorsboot[id];
    that.changebg(colo, colob, colobt);
  });
};

// calls for a color change
Begin.prototype.changebg = function(colo, colob, colobt) {
  this.col[0] = colo;
  this.col[1] = colob;
  this.col[2] = colobt;
  this.setbg();
};


// Begin
var start = new Begin();