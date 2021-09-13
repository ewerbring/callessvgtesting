import React from "react";
import { useState, useEffect, useRef } from "react";
import "../Svg.css";
// import shapeData from "./ShapesColors"
const color = [
  [0, "rgb(197, 0, 47)","number: 1"],
  [0, "rgb(240, 68, 49)","number: 2"],
  [0, "rgb(251, 182, 62)","number: 3"],
  [0, "rgb(32 , 99, 76)","number: 4"],
  [0, "rgb(27 , 157, 112)","number: 5"],
  [0, "rgb(24 , 203, 142)","number: 6"],
  [0, "rgb(11 , 23, 126)","number: 7"],
  [0, "rgb(43 , 54, 245)","number: 8"],
  [0, "rgb(76 , 125, 250)","number: 9"],
  [0, "rgb(112, 190, 252)","number: 10"],
  [0, "rgb(130, 57, 221)","number: 11"],
  [0, "rgb(234, 101, 241)","number: 12"],
  [0, "rgb(255, 166, 207)","number: 13"],
  [0, "rgb(197, 0, 47)","number: 1"],
  [0, "rgb(240, 68, 49)","number: 2"],
  [0, "rgb(251, 182, 62)","number: 3"],
  [0, "rgb(32 , 99, 76)","number: 4"],
  [0, "rgb(27 , 157, 112)","number: 5"],
  [0, "rgb(24 , 203, 142)","number: 6"],
  [0, "rgb(11 , 23, 126)","number: 7"],
  [0, "rgb(43 , 54, 245)","number: 8"],
  [0, "rgb(76 , 125, 250)","number: 9"],
  [0, "rgb(112, 190, 252)","number: 10"],
  [0, "rgb(130, 57, 221)","number: 11"],
  [0, "rgb(234, 101, 241)","number: 12"],
  [0, "rgb(255, 166, 207)","number: 13"],
  [0, "rgb(197, 0, 47)","number: 1"],
  [0, "rgb(240, 68, 49)","number: 2"],
  [0, "rgb(251, 182, 62)","number: 3"],
  [0, "rgb(32 , 99, 76)","number: 4"],
  [0, "rgb(27 , 157, 112)","number: 5"],
  [0, "rgb(24 , 203, 142)","number: 6"],
  [0, "rgb(11 , 23, 126)","number: 7"],
  [0, "rgb(43 , 54, 245)","number: 8"],
  [0, "rgb(76 , 125, 250)","number: 9"],
  [0, "rgb(112, 190, 252)","number: 10"],
  [0, "rgb(130, 57, 221)","number: 11"],
  [0, "rgb(234, 101, 241)","number: 12"],
  [0, "rgb(255, 166, 207)","number: 13"],
  [0, "rgb(197, 0, 47)","number: 1"],
  [0, "rgb(240, 68, 49)","number: 2"],
  [0, "rgb(251, 182, 62)","number: 3"],
  [0, "rgb(32 , 99, 76)","number: 4"],
  [0, "rgb(27 , 157, 112)","number: 5"],
  [0, "rgb(24 , 203, 142)","number: 6"],
  [0, "rgb(11 , 23, 126)","number: 7"],
  [0, "rgb(43 , 54, 245)","number: 8"],
  [0, "rgb(76 , 125, 250)","number: 9"],
  [0, "rgb(112, 190, 252)","number: 10"],
  [0, "rgb(130, 57, 221)","number: 11"],
  [0, "rgb(234, 101, 241)","number: 12"],
  [0, "rgb(255, 166, 207)","number: 13"],
  [0, "rgb(197, 0, 47)","number: 1"],
  [0, "rgb(240, 68, 49)","number: 2"],
  [0, "rgb(251, 182, 62)","number: 3"],
  [0, "rgb(32 , 99, 76)","number: 4"],
  [0, "rgb(27 , 157, 112)","number: 5"],
  [0, "rgb(24 , 203, 142)","number: 6"],
  [0, "rgb(11 , 23, 126)","number: 7"],
  [0, "rgb(43 , 54, 245)","number: 8"],
  [0, "rgb(76 , 125, 250)","number: 9"],
  [0, "rgb(112, 190, 252)","number: 10"],
  [0, "rgb(130, 57, 221)","number: 11"],
  [0, "rgb(234, 101, 241)","number: 12"],
  [0, "rgb(255, 166, 207)","number: 13"],
  [0, "rgb(197, 0, 47)","number: 1"],
  [0, "rgb(240, 68, 49)","number: 2"],
  [0, "rgb(251, 182, 62)","number: 3"],
  [0, "rgb(32 , 99, 76)","number: 4"],
  [0, "rgb(27 , 157, 112)","number: 5"],
  [0, "rgb(24 , 203, 142)","number: 6"],
  [0, "rgb(11 , 23, 126)","number: 7"],
  [0, "rgb(43 , 54, 245)","number: 8"],
  [0, "rgb(76 , 125, 250)","number: 9"],
  [0, "rgb(112, 190, 252)","number: 10"],
  [0, "rgb(130, 57, 221)","number: 11"],
  [0, "rgb(234, 101, 241)","number: 12"],
  [0, "rgb(255, 166, 207)","number: 13"],
  [0, "rgb(197, 0, 47)","number: 1"],
  [0, "rgb(240, 68, 49)","number: 2"],
];



const shape = [
  [0,<polygon filter="url(#blur)" points='128.15 0 0 256 256.3 256 128.15 0'/>],
  [0,<path d='M256,256h0C114.61,256,0,141.39,0,0H0C141.39,0,256,114.61,256,256Z'/>],
  [0,<path d='M0,256H0C0,114.61,114.61,0,256,0h0C256,141.39,141.39,256,0,256Z'/>],
  [0,<rect width='256' height='128'/>],
  [0,<rect x='37.49' y='37.49' width='181.02' height='181.02' transform='translate(-53.02 128) rotate(-45)'/>],
  [0,<polygon points='256 256 0 256 0 0 256 256'/>],
  [0,<rect width='256' height='256'/>],
  [0,<polygon points='128 256 0 256 128 0 256 0 128 256'/>],
  [0,<rect x='37.49' y='37.49' width='181.02' height='181.02' transform='translate(-53.02 128) rotate(-45)'/>],
  [0,<rect width='256' height='256' rx='128'/>],
  [0,<polygon points='0 256 0 0 256 0 0 256'/>],
  [0,<polygon points='128.15 0 0 256 256.3 256 128.15 0'/>],
  [0,<polygon points='256 256 0 256 0 0 256 256'/>],
  [0,<rect width='256' height='256'/>],
  [0,<polygon points='128 256 0 256 128 0 256 0 128 256'/>],
  [0,<polygon points='128 256 0 256 128 0 256 0 128 256'/>],
  [0,<rect x='37.49' y='37.49' width='181.02' height='181.02' transform='translate(-53.02 128) rotate(-45)'/>],
  [0,<rect width='256' height='256' rx='128'/>],
  [0,<path d='M205.6,101.29,256.3,0H0L50.71,101.29C82.64,165.08,173.67,165.08,205.6,101.29Z'/>],
  [0,<polygon points='0 256 0 0 256 0 0 256'/>],
  [0,<path d='M256,256H0V0H0C141.39,0,256,114.61,256,256Z'/>],
  [0,<polygon points='128 256 256 256 128 0 0 0 128 256'/>],
  [0,<path d='M128,181,0,53H0a181,181,0,0,1,256,0h0Z'/>],
  [0,<path d='M128,128V0h0a128,128,0,0,0,0,256h0A128,128,0,0,0,256,128Z'/>],
  [0,<polygon points='128 0 0 0 0 128 0 256 128 256 128 128 256 128 256 0 128 0'/>],
  [0,<path d='M128,0h0A128,128,0,0,0,0,128H0V256H128V128H256V0Z'/>],
  [0,<path d='M128,0h0A128,128,0,0,1,0,128H0A128,128,0,0,0,128,256h0V128h0V256A128,128,0,0,1,256,128,128,128,0,0,0,128,0Z'/>],
  [0,<path d='M128,0h0A128,128,0,0,0,0,128H0V256H256V0Z'/>],
  [0,<path d='M128,0h0A128,128,0,0,0,0,128H0V256H128A128,128,0,0,0,256,128h0V0Z'/>],
  [0,<path d='M128,0h0A128,128,0,0,0,0,128H0V256H128A128,128,0,0,0,256,128h0A128,128,0,0,0,128,0Z'/>],
  [0,<path d='M256,256h0C114.61,256,0,141.39,0,0H256Z'/>],
  [0,<polygon points='0 0 256 0 256 256 0 0'/>],
  [0,<polygon points='256 0 256 256 0 256 256 0'/>],
  [0,<path d='M0,256H0C0,114.61,114.61,0,256,0h0C256,141.39,141.39,256,0,256Z'/>],
  [0,<path d='M256,256h0C114.61,256,0,141.39,0,0H0C141.39,0,256,114.61,256,256Z'/>],
  [0,<rect width='256' height='128'/>],
  [0,<rect width='128' height='256'/>],
  [0,<polygon points='256 0 0 0 0 256 128 128 256 256 256 0 256 0 256 0'/>],
  [0,<polygon points='256 256 256 0 128 128 0 0 0 256 0 256 0 256 256 256'/>],
  [0,<path d='M256,64V0H192a64,64,0,0,0-64,64A64,64,0,0,0,64,0H0V64a64,64,0,0,0,64,64A64,64,0,0,0,0,192v64H64a64,64,0,0,0,64-64,64,64,0,0,0,64,64h64V192a64,64,0,0,0-64-64A64,64,0,0,0,256,64Z'/>],
  [0,<path d='M0,128A128,128,0,0,0,128,0H0V256H128A128,128,0,0,0,0,128Z'/>],
  [0,<path d='M0,256H0V0L75,75C141.78,141.78,94.47,256,0,256Z'/>],
  [0,<path d='M0,0H256L181,75C114.22,141.78,0,94.47,0,0Z'/>],
  [0,<path d='M106.25,0h0V256l-75-75C-35.53,114.22,11.78,0,106.25,0Z'/>],
  [0,<path d='M256,106.25H0l75-75C141.78-35.53,256,11.78,256,106.25Z'/>],
  [0,<path d='M256,256h0L128,0H0L70.76,141.51A207.09,207.09,0,0,0,256,256Z'/>],
  [0,<path d='M0,256H0L128,0H256L185.24,141.51A207.09,207.09,0,0,1,0,256Z'/>],
  [0,<path d='M128,181,0,53H0a181,181,0,0,1,256,0h0Z'/>],
  [0,<path d='M53,256h0A181,181,0,0,1,53,0h0a181,181,0,0,1,0,256Z'/>],
  [0,<path d='M128,128h0V0A128,128,0,0,1,0,128H0A128,128,0,0,0,128,256h0A128,128,0,0,0,256,128V0A128,128,0,0,1,128,128Z'/>],
  [0,<path d='M128,0H0A128,128,0,0,0,128,128h0A128,128,0,0,0,256,0Z'/>],
  [0,<path d='M128,0a128,128,0,0,0,0,256h0V0Z'/>],
  [0,<path d='M0,128H256A128,128,0,0,0,0,128Z'/>],
  [0,<path d='M0,128H256A128,128,0,0,0,0,128Z'/>],
  [0,<path d='M181,128a53,53,0,0,1-53-53V0h0a128,128,0,0,0,0,256h0a127.61,127.61,0,0,0,91-37.94C252,184.71,228,128,181,128Z'/>],
  [0,<path d='M256,128V0H128A128,128,0,0,0,0,128H128A128,128,0,0,0,0,256H128V128A128,128,0,0,0,256,256h0V128Zm-128,0V0A128,128,0,0,0,256,128Z'/>],
  [0,<path d='M0,128H0a181,181,0,0,1,256,0h0A181,181,0,0,1,0,128Z'/>],
  [0,<path d='M256,0h0V256l-75-75C114.22,114.22,161.53,0,256,0Z'/>],
  [0,<path d='M128,0h0V256h0A128,128,0,0,0,128,0Z'/>],
  [0,<path d='M128,128H0A128,128,0,0,0,128,256h0A128,128,0,0,0,256,128Z'/>],
  [0,<path d='M128,0a128,128,0,0,0,0,256h0V0Z'/>],
  [0,<path d='M0,128H256A128,128,0,0,0,0,128Z'/>],
  [0,<path d='M128,0h0A128,128,0,0,0,0,128H128Z'/>],
  [0,<path d='M128,0h0V128H256A128,128,0,0,0,128,0Z'/>],
  [0,<path d='M0,128A128,128,0,0,0,128,256h0V128Z'/>],
  [0,<path d='M128,256h0A128,128,0,0,0,256,128H128Z'/>],
  [0,<path d='M256,256h0C114.61,256,0,141.39,0,0H0Z'/>],
  [0,<path d='M0,256H0C0,114.61,114.61,0,256,0h0Z'/>],
  [0,<path d='M256,256h0C114.62,256,0,141.39,0,0H0Z'/>],
  [0,<path d='M256,0h0C256,141.39,141.39,256,0,256H0Z'/>],
  [0,<path d='M128,256,0,128H0a181,181,0,0,1,256,0h0Z'/>],
  [0,<path d='M256,128V0H128A128,128,0,0,0,256,128Z'/>],
  [0,<path d='M0,128V256H128A128,128,0,0,0,0,128Z'/>],
  [0,<path d='M128,0H0V128H0A128,128,0,0,0,128,0Z'/>],
  [0,<path d='M256,128V0H128A128,128,0,0,0,256,128Z'/>],
  [0,<path d='M128,0H0V128H0A128,128,0,0,0,128,0Z'/>],
  [0,<path d='M256,128V0H128A128,128,0,0,0,256,128Z'/>],
  [0,<path d='M0,128V256H128A128,128,0,0,0,0,128Z'/>],
  [0,<path d='M256,128h0A128,128,0,0,0,128,256H256Z'/>],
  [0,<path d='M256,128h0A128,128,0,0,0,128,256H256Z'/>],
];


export default function Maptest() {
  //make 16 sets
  //make 32 shapes in each map
  //make

  let [count, setCount] = useState(0);

  useEffect(() => {
    countAdd();
  }, [count]);

const countAdd = () =>{
  // console.log("hook is setting count to " +count)
  // console.log(count)
  if(count % 32 ===0){
    console.log("time to redefine set")
    setCount(0)
    let sortedColorArray = color.sort(function(a, b) {
      return b[0] - a[0];
    });

    console.log("most popular colors: " + sortedColorArray[0][2] + " with "+ sortedColorArray[0][0] + "points" )
  }else if(count % 16 ===0 ) {
    console.log("only 16")
  let sortedShapeArray = shape.sort(function(a, b) {
    return b[0] - a[0];
  });
  console.log("most popular shape: " + sortedShapeArray[0][2] + "with " + sortedShapeArray[0][0] + "points" )

}
  

}

 
  const handleClick = (thisIsNumber) => {
    // svgToUse = color.first.shape;
    color[thisIsNumber][0]+=1;
    shape[thisIsNumber][0]+=1;
    
    console.log("shape number: " + thisIsNumber + ", color score: " + color[thisIsNumber][0] + ", shape score: " + shape[thisIsNumber][0]);
    setCount(count+=1)

  };

  return (
    <div>

      {shape.map((eachShape, indexOf) => {
        return (
          <svg onClick={()=>handleClick(indexOf)} fill={color[indexOf][1]}>
              <filter id="blur">
                <feGaussianBlur stdDeviation="2" />
              </filter> 
            {eachShape[1]}
          </svg>
        );
      })}
      <svg>
        <rect  width="256" height="256" rx="128" />
      </svg>
    </div>
  );
}
