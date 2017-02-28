var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttibution = ko.observable('https://www.flickr.com/photos/big');

    this.level = ko.computed(function () {
        var level = 'New-Born';
        if (this.clickCount() > 5) {
            level = 'Infant';
        }
        if (this.clickCount() > 10) {
            level = 'Toddler';
        }
        if (this.clickCount() > 15) {
            level = 'Crazy Person';
        }
        if (this.clickCount() > 30) {
            level = 'You don\'t want to know... stop clicking';
        }
        return level;
    }, this);

    this.nicknames = ko.observableArray([
        {nickname: 'tabby cat'},
        {nickname: 'spike'},
        {nickname: 'mr. mcgillicuddy'},
        {nickname: 'joe'}
    ]);
    
    this.getClickCount = function() {
        return this.clickCount;
    };
    
    this.setClickCount = function(count) {
        this.clickCount(count);
    };
};

var ViewModel = function () {
    var that = this;
    
    this.currentCat = ko.observable(new Cat());
    
    this.incrementCounter = function () {
        that.currentCat().clickCount(that.currentCat().clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());
