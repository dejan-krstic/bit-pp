function WebApp(name, url, technologies, licence) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = '';
}
function MobileApp(name, platforms, licence) {
    this.name = name;
    this.licence = licence;
    this.platforms = platforms;
    this.stars = '';
}

WebApp.prototype.getData = function () {
    console.log(this.name + '\n' + this.url + '\n' + this.technologies + '\n' + this.licence);
}
WebApp.prototype.reactBased = function () {
    var b = false;
    this.technologies.forEach(function (tech) {
        if (tech.toLowerCase() == 'react') {
            b = true;
        };
    });
    return b;
}
MobileApp.prototype.getData = function () {
    console.log(this.name + '\n' + this.platforms + '\n' + this.licence);
}
MobileApp.prototype.forAndroid = function () {
    var b = false;
    this.platforms.forEach(function (platform) {
        if (platform.toLowerCase() == 'android') {
            b = true;
        }
    });
    return b;
}
var sharedMethods = {
    isCCLicence : function() {
        if (this.licence.toLowerCase() == 'creative commons') {
            return true;
        } else {
            return false;
        }
    },
    like : function() {
        this.stars += '★';
    },
    showStars : function() {
        console.log(this.stars);
    }
}

WebApp.prototype.__proto__ = sharedMethods;
MobileApp.prototype.__proto__ = sharedMethods;

var wa1 = new WebApp('strudla', 'www.strud.la', ['React', 'Node.js'], 'Creative Commons');
var wa2 = new WebApp('noblice', 'www.nobli.ca', ['Node.js'], 'Creative Commons');
var ma1 = new MobileApp('jaffa', ['Android', 'iOS'], 'Creative Commons');
var ma2 = new MobileApp('bananica', ['iOS'], 'Soko Stark');

wa1.getData();
console.log('reactBased: ', wa1.reactBased());
wa2.getData();
console.log('reactBased: ', wa2.reactBased());
ma1.getData();
console.log('forAndroid: ', ma1.forAndroid());
ma2.getData();
console.log('forAndroid: ', ma2.forAndroid());

console.log('isCCLicene: ', wa1.isCCLicence());
console.log('isCCLicene: ', wa2.isCCLicence());
console.log('isCCLicene: ', ma1.isCCLicence());
console.log('isCCLicene: ', ma2.isCCLicence());

wa1.like();
wa1.like();
wa1.like();
wa1.like();
wa1.like();
wa1.like();
wa1.like();
wa2.like();
wa2.like();
wa2.like();
ma1.like();
ma1.like();
ma1.like();
ma1.like();
ma1.like();
ma1.like();
ma2.like();
ma2.like();

wa1.showStars();
wa2.showStars();
ma1.showStars();
ma2.showStars();
