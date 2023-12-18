"use client"

import React, { useEffect, useRef } from 'react';
import functionPlot from 'function-plot';
import "./Graph.css";
import { InlineMath } from 'react-katex';

const Graph = ({ fn, fn_latex, domain, range }) => {
    const graphRef = useRef(null);
  
    useEffect(() => {
      functionPlot({
        target: graphRef.current,
        width: 600,
        height: 400,
        xAxis: { domain: domain },
        yAxis: { domain: range },
        grid: true,
        data: [{
          fn: fn,
          sampler: 'builtIn',  // This uses the built-in math.js evaluator
          graphType: 'polyline'
        }]
      });
    }, [fn, domain, range]); // Redraw the graph when props change
  
    return (
        <div className="graph-container">
          <div className="legend"><InlineMath math={fn_latex} /></div>
          <div ref={graphRef} />
        </div>
    );
  };
  
  export default Graph;