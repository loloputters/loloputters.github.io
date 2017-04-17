1
$(function() {
02
$('#slider1').slider({
03
value:12,
04
min: 10,
05
max: 20,
06
step: 1,
07
slide: function( event, ui ) {
08
$('#font_size').val(ui.value + ' px');
09
$('.box').css('font-size', ui.value);
10
}
11
});
12
$('#font_size').val($('#slider1').slider('value') + ' px');
13
var aFonts = new Array('', 'Verdana', 'arial', 'Tahoma', 'Times New Roman', 'Georgia');
14
$('#slider2').slider({
15
value:1,
16
min: 1,
17
max: 5,
18
step: 1,
19
slide: function(event, ui) {
20
var sFontFamily = aFonts[ui.value];
21
$('#font_family').val(sFontFamily);
22
$('.box').css('font-family', sFontFamily);
23
}
24
});
25
$('#font_family').val(aFonts[$('#slider2').slider('value')]);
26
var aWeights = new Array('', 'normal', 'bold', 'bolder', 'lighter', 'inherit');
27
$('#slider3').slider({
28
value:1,
29
min: 1,
30
max: 5,
31
step: 1,
32
slide: function(event, ui) {
33
var sFontWeight = aWeights[ui.value];
34
$('#font_weight').val(sFontWeight);
35
$('.box').css('font-weight', sFontWeight);
36
}
37
});
38
$('#font_weight').val(aWeights[$('#slider3').slider('value')]);
39
var aAligns = new Array('', 'left', 'right', 'center', 'justify');
40
$('#slider4').slider({
41
value:1,
42
min: 1,
43
max: 4,
44
step: 1,
45
slide: function(event, ui) {
46
var sTextAlign = aAligns[ui.value];
47
$('#text_align').val(sTextAlign);
48
$('.box').css('text-align', sTextAlign);
49
}
50
});
51
$('#text_align').val(aAligns[$('#slider4').slider('value')]);
52
});
