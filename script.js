const map = new maptilersdk.Map({
  container: 'map',
  style: maptilersdk.MapStyle.STREETS,
  center: [0, 0],
  zoom: 2,
  attributionControl: false // <<< entfernt die Anzeige unten rechts
});
