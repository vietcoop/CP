// $Id$

$(function(){
  if ($.browser.msie) {
    $('#main-group')
      .css('width', '77%')
      .find('#node-86 table:eq(0) table')
        .css({'width': '720px'});
  }
});
