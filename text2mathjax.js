/** Load MathJax */
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_HTMLorMML";
document.getElementsByTagName('head')[0].appendChild(script);

function mathify(text){
    return text
        .replace(/\b\w\^(\d|\w)+\b/gi, '\\($&\\)')           // A^B -> $A^B$
        .replace(/pi/gi, '\\(\\pi\\)')                       // pi -> $\pi$
        .replace(/sqrt\((\d+)\)/gi, '\\(\\sqrt{$1}\\)')      // sqrt(a) -> $\sqrt{a}$
        .replace(/\)\^((\d|\w)+)/gi, ') \\(^{$1}\\)')        // )^A -> )$^A$
        .replace(/\b(\d+)\*(\d+)\b/gi, '\\($1\\cdot $2\\)')  // A*B -> $A\cdot B$
        ;
}

var posttags = document.getElementsByClassName('postmsg');
for(var i = 0;i < posttags.length;i++){
    posttags[i].innerHTML = mathify(posttags[i].innerHTML)
}
