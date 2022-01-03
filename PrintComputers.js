function printComputers() {
var area = document.getElementById("kompjuteret");
var svgKompjuteri = '<svg id=="kompjuter" width=200px height=200px><rect width=100 height=100 rx=8 style="fill:none; stroke:gray; stroke-width:2px;"></rect><rect x="10" y="10" width=80 height=80 style="fill: blue;"></rect><rect x=40 y=100 width=20 height=20 style="fill: lightgray; stroke: gray; stroke-width: 2px;"></rect><rect x=20 y=120 width=60 height=10 rx=10 style="fill:none; stroke: gray; stroke-width: 2px;"></rect></svg>';
area.innerHTML += svgKompjuteri;
}