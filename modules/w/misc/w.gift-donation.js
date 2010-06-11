// $Id$

$(function(){
  // Price click handler
  $('div.pane-gift-donation div.views-row div.views-field-sell-price')
    .css('cursor', 'pointer')
    .each(function(i){
      $(this)
        .click(function(){
          $(this).parent().find('form').submit();
        });
    });
    
  $('.wGrid div.pane-content').hide();
  $('.wGrid:lt(2) h2.pane-title').addClass('collapsible').each(function(){
    $(this).click(function(){
      $(this).parent().find('div.pane-content').toggle();
    });
  });
});
