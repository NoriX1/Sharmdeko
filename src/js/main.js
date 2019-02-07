$(document).ready(function(){
    (function(){
        var settings = {
            speed: 1000,
            controls: false,
            touchEnabled : false,
            infiniteLoop : true,
            auto: true,
            pause: 10000
        }
        var recommendationSettings = {
            speed: 1000,
            controls: false,
            touchEnabled : true,
            auto: true,
            infiniteLoop : true,
            pause: 6000,
            pager: false
        }
        var slider = $(".slider__list").bxSlider(settings);
        var recommendationSlider = $(".recommendation__slider").bxSlider(recommendationSettings);
        var clientSlider = $(".client__slider").bxSlider(recommendationSettings);
        var certSlider = $(".cert__slider").bxSlider(recommendationSettings);
    })();
    ymaps.ready(init);
    function init(){
        var myPlacemark = new ymaps.Placemark([55.761700, 37.718300], { hintContent: 'Sharmdeco', balloonContent: 'ул.2я-Синичкина 9а БЦ "Синица плаза"' });
        myMap = new ymaps.Map("map", {
            center: [55.762216, 37.740144],
            zoom: 14,
            controls: ['zoomControl']
        });
        var searchControl = new ymaps.control.SearchControl({
             options: {
                 float: 'left',
                 floatIndex: 100,
                 noPlacemark: true,
                 placeholderContent:'Россия, Москва, ул. 2я-Синичкина 9а БЦ "Синица плаза"'
             }
        });
        myMap.controls.add(searchControl);
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom'])
    }
});
//
