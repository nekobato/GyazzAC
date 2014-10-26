(function() {
  var GyazzA;

  GyazzA = (function() {
    var ac_lines, ac_page, ac_page_total, attachAC, fetchGyazz, gyazz_lines, observer, progress, refresh;

    function GyazzA() {}

    gyazz_lines = [];

    ac_lines = [];

    ac_page = 0;

    ac_page_total = 0;

    observer = null;

    fetchGyazz = function() {
      var changeFlag;
      changeFlag = false;
      $('#contents > div:visible').each(function(index) {
        var $line, $this;
        $this = $(this);
        $line = $this.children('span').html();
        if (gyazz_lines[index] !== $line) {
          gyazz_lines[index] = $line;
          ac_lines[index] = {
            level: $this.attr('class'),
            html: $line
          };
          return changeFlag = true;
        }
      });
      if (changeFlag) {
        refresh();
      }
    };

    attachAC = function() {
      window.BASE_URL || (window.BASE_URL = 'http://gyazzac.nekobato.net/');
      $('head').append("<link rel='stylesheet' href='" + window.BASE_URL + "gyazzac.css' type='text/css'>");
      $('body').prepend('<div id="gyazz_ac" class="gyazz-ac"></div>');
      $('body').append('<div class="progress-bar"></div>');
    };

    refresh = function() {
      var ac, i, line, n, page, pages, _i, _j, _len, _len1;
      ac = document.createElement('div');
      ac.innerHTML = "<div class='ac-page ac-title'><p>" + ($('.title').text()) + "</p></div>";
      pages = [];
      n = -1;
      for (i = _i = 0, _len = ac_lines.length; _i < _len; i = ++_i) {
        line = ac_lines[i];
        if (line.level === 'listedit0') {
          n++;
          pages[n] = document.createElement('div');
          if (!ac_lines[i + 1] || ac_lines[i + 1].level === 'listedit0') {
            pages[n].className = 'ac-page ac-single';
          } else {
            pages[n].className = 'ac-page';
          }
        }
        pages[n].innerHTML += "<div class='ac-line ac-" + line.level + "'>" + line.html + "</div>";
      }
      ac_page_total = pages.length;
      for (_j = 0, _len1 = pages.length; _j < _len1; _j++) {
        page = pages[_j];
        ac.appendChild(page);
      }
      $('#gyazz_ac').html(ac);
      $('.ac-page').eq(ac_page).addClass('active');
    };

    progress = function() {
      var pp;
      pp = (ac_page + 1) / (ac_page_total + 1) * 100;
      return $('.progress-bar').css('width', Math.floor(pp) + '%');
    };

    GyazzA.prototype.prev = function() {
      if (ac_page > 0) {
        $('#gyazz_ac .active').removeClass('active').prev().addClass('active');
        ac_page--;
        return progress();
      }
    };

    GyazzA.prototype.next = function() {
      if ($('.ac-page').eq(ac_page + 1).length) {
        $('#gyazz_ac .active').removeClass('active').next().addClass('active');
        ac_page++;
        return progress();
      }
    };

    GyazzA.prototype.c = function() {
      attachAC();
      fetchGyazz();
      observer = new MutationObserver(function(mutations) {
        return fetchGyazz();
      }).observe(document.querySelector('#listbg0'), {
        attributes: true,
        attributeFilter: ["class"]
      });
      refresh();
      $(document).scrollTop(0);
      return this;
    };

    return GyazzA;

  })();

  $(document).off('keydown').on('keydown', function(e, order) {
    if (e.which === 8 || e.which === 37 || order === 'prev') {
      e.preventDefault();
      return ac.prev();
    } else if (e.which === 13 || e.which === 39 || order === 'next') {
      e.preventDefault();
      return ac.next();
    }
  });

  $('#contents').on('click', function() {
    return $(this).toggleClass('pulldown');
  });

  window.ac = new GyazzA().c();

}).call(this);

//# sourceMappingURL=.././gyazzac.js.map
