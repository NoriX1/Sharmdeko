$(document).ready(function(){
    (function(){
        var settings = {
            speed: 1000,
            controls: false
        }
        var slider = $(".slider__list").bxSlider(settings);
    })();
    ymaps.ready(init);
    function init(){
        var myPlacemark = new ymaps.Placemark([55.722314, 37.568605], { hintContent: 'Sharmdeco', balloonContent: 'ул.Ефремова, д.20' });
        myMap = new ymaps.Map("map", {
            center: [55.722826, 37.582649],
            zoom: 14,
            controls: ['zoomControl']
        });
        var searchControl = new ymaps.control.SearchControl({
             options: {
                 float: 'left',
                 floatIndex: 100,
                 noPlacemark: true,
                 placeholderContent:"Россия, Москва, ул. Ефремова, 20"
             }
        });
        myMap.controls.add(searchControl);
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom'])
    }
});
//
