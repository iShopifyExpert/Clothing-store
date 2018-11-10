function deferFilterjQuery() {
  if (window.jQuery) {
    $(function() {
      console.log('test1');

      // Hide filter search options box
      $('.bc-sf-filter-option-show-search-box').hide();

      $('.bc-sf-filter-tree').find('input.bc-sf-filter-option-show-search-box').hide();

      $(document).on("load", ".bc-sf-filter-option-show-search-box", function() {
        console.log('test2');
        var b = this.value.toLowerCase();
        $(this).closest(".filter-group").find("li").each(function() {
          if ($(this).text().toLowerCase().search(b) > -1) {
            $(this).show(100)
          } else {
            $(this).hide(100)
          }
        })
      });
    })
  } else {
    setTimeout(function() {
      deferFilterjQuery()
    }, 50)
  }
}
deferFilterjQuery();
