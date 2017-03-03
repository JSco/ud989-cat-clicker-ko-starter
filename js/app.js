var initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttibution: 'https://www.flickr.com/photos/bigtallguy/434164568',
        nicknames: ['Tabtab', 'T-Bone', 'Mr. T']
    },
    {
        clickCount: 0,
        name: 'Tiger',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        imgAttibution: 'https://www.flickr.com/photos/xshamx/4154543904',
        nicknames: ['Tigger']
    },
    {
        clickCount: 0,
        name: 'Scaredy',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttibution: 'https://www.flickr.com/photos/kpjas/22252709',
        nicknames: ['Casper']
    },
    {
        clickCount: 0,
        name: 'Shadow',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        imgAttibution: 'https://www.flickr.com/photos/malfet/1413379559',
        nicknames: ['Blacky']
    },
    {
        clickCount: 0,
        name: 'Sleepy',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        imgAttibution: 'https://www.flickr.com/photos/onesharp/9648464288',
        nicknames: ['Blacky']
    }
];

var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttibution = ko.observable(data.imgAttibution);
    this.nicknames = ko.observableArray(data.nicknames);

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
};

var ViewModel = function () {
    var that = this;

    this.catList = ko.observableArray([]);
    initialCats.forEach(function (catItem) {
        that.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function () {
        that.currentCat().clickCount(that.currentCat().clickCount() + 1);
    };

    this.changeCat = function (clickedCat) {
        that.currentCat(clickedCat);
    };
};

ko.applyBindings(new ViewModel());
