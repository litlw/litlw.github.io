// this is hugh's visualization.

// there are many like it but this one is mine


//3d vis
function vis(file, id, orient) {
    var lr = orient,
        pinky = "rgb(200,70,100)";
    var file = file;
    var id = id;
    var diameter = size;


    var bubble = d3.layout.pack()
        .sort(null)
        .size([diameter, diameter])
        .padding(padding);

    var svg = d3.select("#chart" + id)
        .append("svg")
        .attr("width", diameter)
        .attr("height", diameter)
        .attr("class", "bubble");

    d3.csv(file, function(error, data) {


            data = data.map(function(d) {
                d.value = +d["val"];
                return d;
            });

            //this sets the value of the circle. it does not set the x or y variable

            //it now sets the value to the x and y variable
            //  console.log(data[1]['val']);

            var nodes = bubble.nodes({
                children: data
            }).filter(function(d) {
                return !d.children;
            });

            //console.log(nodes[1])

            var bubbles = svg.append("g")
                .attr("transform", "translate(0.0)")
                .selectAll(".bubble")
                .data(nodes)
                .enter();

            // console.log(bubbles[0][1])

            bubbles.append("circle")
                .attr("r", function(d) {
                    return d.r * 1.2;
                })
                .attr("cx", function(d) {
                    return d.x;
                })
                .attr("cy", function(d) {
                    return d.y;
                })
                .attr("clickState", "0")
                .style("fill", function(d) {
                    var v = d.value;
                    var color = d3.rgb(255 - v, 255 - v, 255 - v);
                    return color;
                })
                .style("stroke", function(d){
                  if (d.value > 100){
                    return pinky;
                  }
                  else {
                    return "none";
                  }
                })
                .style("stroke-width", function(d){
                    if (d.value > 100){
                      return 1;
                    }
                    else {
                      return 0;
                    }
                  });



            bubbles.append("text")
                .each(function(d) {
                    if (d.value > 100) {
                        var target = d3.select(this);
                        target.attr("x", function(d) {
                            if (lr == 'left'){
                              return d.x;
                            }
                            else if (lr == 'right'){
                              return d.x - 55;
                            }
                            else {
                              return d.x;
                            }

                            })
                            .attr("y", function(d) {
                                return d.y + 12;
                            })
                            .attr("text-anchor", "right")
                            .text(function(d) {
                                return (d.value + " , " + d["sub"]);
                            })
                            .style({
                                "fill": pinky,
                                "font-family": "Helvetica Neue, Helvetica, Arial, san-serif",
                                "font-size": "10px",
                                "opacity": "0",
                            })
                            .attr('class', 'synth')

                } // end of if function
            })

            d3.selectAll("text").on("mouseover", function(){
                d3.select(this).style({"opacity": "1", "fill": pinky, "font-size": "15px"})

            })
              .on("mouseout", function(){
                d3.select(this).style({"opacity": "0", "fill": pinky, "font-size": "10px"});
              });


    });  // end of the bubble making thing.
}; // end of defining bubble()


function Bubble() {
    vis('https://drive.google.com/uc?id=1rwgjWmxhhj7Txu3Qnxv3au3fjlAMcD6M', 1, 'left');
    vis('https://drive.google.com/uc?id=1JDPucz0Stj-3sGknWjPQSB4BjT0ScAjV', 2, 'right');
    vis('https://drive.google.com/uc?id=121jeA-z2_oFsqGdsARIwkPO1jEfX3hO8', 3, 'left');
    vis('https://drive.google.com/uc?id=18cutVuk61Oo_8dl08KggUjxuPUZTCtQG', 4, 'right');
    vis('https://drive.google.com/uc?id=1PvpKuv6xKwUbIWhGgj9uEHkSj1LVR8Sb', 5, 'left');
    vis('https://drive.google.com/uc?id=18lkLXUet46EV-SNpw5Oz1iVRTHppjXLS', 6, 'right');
    vis('https://drive.google.com/uc?id=1pBcl_BgZ49dzQTSQ_rMRCXa-d0NUFu4Q', 7, 'left');
    vis('https://drive.google.com/uc?id=1UKiYouzAfFsl-lijMkN-ot-71k48m6NB', 8, 'right');
    vis('https://drive.google.com/uc?id=1Mw1AfFUWN-lYrx_UOm7BZC4IbpoDU1gC', 9, 'left');
    vis('https://drive.google.com/uc?id=1niGx2dncdLBot-mFE1iT-AgKNVX-sDBi', 10, 'right');
    vis('https://drive.google.com/uc?id=1WJqbZpT4FsTwBUvstaA1vbxZvsleuDhl', 11, 'left');
    vis('https://drive.google.com/uc?id=1JVxrfkXk4D2BpIS6zLYrjcPmTvpRrQ8t', 12, 'right');
};
