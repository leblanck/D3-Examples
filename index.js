let data = [
    {"platform": "iOS", "percentage": 40.11},
    {"platform": "Windows", "percentage": 36.69},
    {"platform": "Android", "percentage": 13.06}
];

let svgWidth = 500, svgHeight = 300, radius = Math.min(svgWidth, svgHeight) / 2;

let svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//group elem to hold pie chart
let group = svg.append("g")
   // .attr("transform", "translate(" + radius + "," + radius + ")");
    .attr("transform", `translate(${radius},${radius})`);

let color = d3.scaleOrdinal(d3.schemeSet3);

let pie = d3.pie().value((d) => d.percentage);

let path = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

let arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g");

arc.append("path")
    .attr("d", path)
    .attr("fill", ((d) => color(d.data.percentage)));

let label = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

arc.append("text")
    .attr("transform", ((d) => `translate(${label.centeroid(d)})`))
    .attr("text-anchor", "middle")
    .text(((d) => `${d.data.platform}: ${d.data.percentage}%`));

