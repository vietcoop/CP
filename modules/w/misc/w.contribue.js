// $Id$

$(function(){
  $('#content-content div.view-id-contribute').after(
    '<div id="w-views-content-contribution">'
      + '<div class="header"></div>'
      + '<div class="content"></div>'
    + '</div>'
  );

  var $h = $('#w-views-content-contribution > div.header');

  $('#content-content div.view-id-contribute div.view-content > *').each(function(){
    if (this.tagName == 'H3') {
      $(this).appendTo($h);
      $('#w-views-content-contribution > div.content')
        .append('<div class="products"></div>');
    }
    else {
      $(this).appendTo('#w-views-content-contribution > div.content > div:last');
    }
  });

  // Hide products
  $('#w-views-content-contribution > div.content > div.products').hide();

  // Term Click handler
  $h.find('h3').each(function(i){
    $(this)
      .css('cursor', 'pointer')
      .click(function(){
        $h.find('h3').removeClass('active');
        $(this).addClass('active');
        $('#w-views-content-contribution > div.content > div').hide();
        $('#w-views-content-contribution > div.content > div:eq('+ i +')').fadeIn();
      });
  });
  
  // Price click handler
  $('#w-views-content-contribution div.views-row div.views-field-sell-price')
    .css('cursor', 'pointer')
    .each(function(i){
      $(this)
        .click(function(){
          $(this).parent().find('form').submit();
        });
    });
});
