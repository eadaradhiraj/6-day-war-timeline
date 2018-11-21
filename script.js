var mymap = L.map('mapid').setView([32, 35], 6);

L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
  }).addTo(mymap);
$('.day_slider').on('input', function () {
  $('.circle-marker').hide()
  $('.day-' + $(this).val()).show()
});

$.each(data, function (_, date_wise) {
  $.each(date_wise.battles, function (_, battle_wise) {
    L.circle([battle_wise.lat, battle_wise.long], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 25000,
      className: 'circle-marker day-' + date_wise.day
    }).addTo(mymap);
  })
})
$('.circle-marker').hide()
$('.day-1').show()
