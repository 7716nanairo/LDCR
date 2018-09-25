var map;

function initMap() {
var latlng = new google.maps.LatLng(35.668657, 139.724692);/* 座標 */
var myOptions = {
zoom: 15, /*拡大比率*/
center: latlng,
mapTypeControlOptions: { mapTypeIds: ['style', google.maps.MapTypeId.ROADMAP] }
};
var map = new google.maps.Map(document.getElementById('map'), myOptions);
/*アイコン設定*/
var icon = new google.maps.MarkerImage('http://www.littledarlingcoffeeroasters.com/assets/img/common/ldcr.png',/*画像url*/
new google.maps.Size(65,90),/*アイコンサイズ*/
new google.maps.Point(0,0)/*アイコン位置*/
);
var markerOptions = {
position: latlng,
map: map,
icon: icon,
title: 'Little Darling Coffee Roasters',/*タイトル*/
animation: google.maps.Animation.DROP/*アニメーション*/
};
var marker = new google.maps.Marker(markerOptions);
/*取得スタイルの貼り付け*/
var styleOptions = [
{
"stylers": [
{ "saturation": '-100' }
]
}
];
var styledMapOptions = { name: '' }/*地図左上のタイトル*/
var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
map.mapTypes.set('style', sampleType);
map.setMapTypeId('style');
};
google.maps.event.addDomListener(window, 'load', function() {
initMap();
});
