function smile(n, lineWidth) {
    var sqc = n * n / 4;
    var fi = n + 1;
    var l = '';
    if (lineWidth) fi = lineWidth;
    var pnp = 0;
    if (n % 2) pnp = 1;
    for (i = 0; i <= n; i++) {
        sqa = (parseInt(n / 2) - i + pnp) * (parseInt(n / 2) - i + pnp);
        sqEyeI = (parseInt(n / 3) - i + pnp) * (parseInt(n / 3) - i + pnp);

        for (j = 0; j <= n; j++) {
            sqb = (parseInt(n / 2) - j + pnp) * (parseInt(n / 2) - j + pnp);
            sqEyeJa = (parseInt(n / 3.5) - j + pnp) * (parseInt(n / 3.5) - j + pnp);
            sqEyeJb = (parseInt(n / 1.4) - j + pnp) * (parseInt(n / 1.4) - j + pnp);
            if ((sqa + sqb - fi < sqc && sqa + sqb + fi > sqc) || (sqa + sqb - fi < sqc / 2.5 && sqa + sqb + fi > sqc / 2.5 && i > n * 2 / 3) || (sqEyeI + sqEyeJb < n / 1.7) || (sqEyeI + sqEyeJa < n / 1.7 && sqEyeI + sqEyeJa > n / 5 && i > n / 3)) l += ' * ';
            else l += '   ';
        }
        l += '\n';

    }
    return (l);
}
console.log(smile(54, 55));
