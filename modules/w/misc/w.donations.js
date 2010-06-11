// $Id$

$(function(){
  $('.wRightBox div.pane-content').hide();
  $('.wRightBox:lt(2) h2.pane-title').addClass('collapsible').each(function(){
    $(this).click(function(){
      $(this).parent().find('div.pane-content').toggle();
    });
  });
});
