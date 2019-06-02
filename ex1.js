var dataset = [1, 2, 3, 4, 5, 6, 10];


d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    .text(function(d) { return d; });