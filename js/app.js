var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttibution = ko.observable('https://www.flickr.com/photos/big');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}
    
    this.level = ko.computed(function() {
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
}

ko.applyBindings(new ViewModel());