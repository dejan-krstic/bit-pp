function hexToRGB(a) {
    var r, g, b;
    r = parseInt('0x'+a[1]+a[2]);
    g = parseInt('0x'+a[3]+a[4]);
    b = parseInt('0x'+a[5]+a[6]);
    return 'rgb ('+r+', '+g+', '+b+')';

}

console.log(hexToRGB('#f3a811'));