/** Load MathJax */
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_HTMLorMML";
document.getElementsByTagName('head')[0].appendChild(script);

function mathify(text){
    return text
        .replace(/\b\w\^(\d|\w)+\b/gi, '\\($&\\)')           // A^B -> $A^B$
        .replace(/\bpi\b/gi, '\\(\\pi\\)')                       // pi -> $\pi$
        .replace(/sqrt\((\d+)\)/gi, '\\(\\sqrt{$1}\\)')      // sqrt(a) -> $\sqrt{a}$
        .replace(/\)\^((\d|\w)+)/gi, ') \\(^{$1}\\)')        // )^A -> )$^A$
        .replace(/\b(\d+)\*(\d+)\b/gi, '\\($1\\cdot $2\\)')  // A*B -> $A\cdot B$
        ;
}

var tagsets = ['postmsg','tclcon'].map(function(e){
    return document.getElementsByClassName(e);
});
for(var i = 0;i < tagsets.length;i++){
    tags = tagsets[i];
    for(var j = 0;j < tags.length;j++){
        tags[j].innerHTML = mathify(tags[j].innerHTML)
    }
}
