function deferFilterjQuery() {
  if (window.jQuery) {
    $(function() {
      console.log('test1');

      // Hide filter search options box
      $('.bc-sf-filter-option-show-search-box').hide();

      $('.bc-sf-filter-tree').find('input.bc-sf-filter-option-show-search-box').hide();

      ssm.addState({
        id: 'tablet',
        query: '(min-width: 768px)',
        onEnter: function(){
          var LHSFilterOffset = $(".bc-sf-filter-left-col").offset().top;
          var eTop = $(".bc-sf-filter-right-col").offset().top;

          // var eBottom = eTop + eHeight - $(window).height();

          $(window).scroll(function() {
            var scrollPos = $(window).scrollTop();
            var eHeight = $(".bc-sf-filter-right-col").height();

            // console.log('scrollPos: '+ scrollPos);
            // console.log('eHeight:' + eHeight);

            $(".bc-sf-filter-left-col").removeClass("stuckFilter");

            if (scrollPos >= LHSFilterOffset && scrollPos <= eHeight) {
              $(".bc-sf-filter-left-col").addClass("stuckFilter");
            } else {
              $(".bc-sf-filter-left-col").removeClass("stuckFilter");
            }
          });


          // setTimeout(function(){
          //   $('.bc-sf-filter-block-title h3>span').click(function(){
          //     setTimeout(function(){
          //       console.log('filter option clicked');
          //       if($('.bc-sf-filter-block-title h3>span.up').length==3){
          //         $('.bc-sf-filter-left-col').removeClass('jk-open');
          //       }
          //       else{
          //         $('.bc-sf-filter-left-col').addClass('jk-open');
          //       }
          //     },300);
          //
          //   })
          // },1000);
        }
      });

    })
  } else {
    setTimeout(function() {
      deferFilterjQuery()
    }, 50)
  }
}
deferFilterjQuery();
