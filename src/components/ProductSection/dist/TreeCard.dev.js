// import React from "react";
// import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
// import "./TreeCard.css";
// function TreeCard(props) {
//   return (
//     <div>
//       {props.products.map((obj) => {
//         return (
//           <div className="parent" key={obj.id}>
//             <Card>
//               <CardBody>
//                 <CardImg src={obj.img} id="pic" alt="tree" />
//                 <CardTitle> {obj.name}</CardTitle>
//                 <CardText>
//                   <p>
//                     CO<sub>2</sub>: -{obj.co2}kg
//                   </p>
//                   <h3>{obj.price} $</h3>
//                 </CardText>
//                 <button id={obj.id} onClick={() => props.add(obj)}>
//                   {" "}
//                   Add{" "}
//                 </button>
//               </CardBody>
//             </Card>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
// export default TreeCard;
// import React from "react";
// import "./TreeCard.css";
// function TreeCard(props) {
//   return (
//     <div className="parent">
//       {props.products.map((obj, index) => {
//         return (
//           <div className="card" key={index}>
//             <img src={obj.img} id="pic" alt="tree" />
//             <h3 className="card_name">{obj.name}</h3>
//             <p>
//               CO<sub>2</sub>: -{obj.co2}kg
//             </p>
//             <h3>{obj.price} $</h3>
//             <button
//               className="card-button"
//               id={obj.id}
//               onClick={() => props.add(obj)}
//             >
//               Add
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
// export default TreeCard;
"use strict";