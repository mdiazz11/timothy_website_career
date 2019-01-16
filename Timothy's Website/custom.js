$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '8604190543',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '8604190543.1677ed0.0fa0146d112a4c45a04fdaeb22be0124',
        sortBy: 'most-recent',
        template: '<div class="col-md-3 col-10 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();


    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});
