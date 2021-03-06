var update_state = function(region) {
  var country        = $('span#' + region + 'country .select2').select2('val');
  var state_select   = $('span#' + region + 'state select.select2');

  $.get(Spree.routes.states_search + "?country_id=" + country, function(states) {
    state_select.html('');
    var states_with_blank = [{name: '', id: ''}].concat(states);
    $.each(states_with_blank, function(pos,state) {
      var opt = $(document.createElement('option'))
                .attr('value', state.id)
                .html(state.name);
      state_select.append(opt);
    });
    state_select.prop("disabled", false).show();
    state_select.select2();
  })
};
