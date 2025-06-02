// import React from 'react';
// import './Card.css';

// const Card = ({ heading, definition, points = [], buttonText }) => {
//   return (
//     <div className="card-container">
//       <h3 className="card-heading">{heading}</h3>
//       <p className="card-definition">{definition}</p>

//       <div className="s1lineContainer">
//         <div className="s1line">
//           <div className="s1edge-line"></div>
//           <div className="s1middle-line"></div>
//           <div className="s1edge-line"></div>
//         </div>
//       </div>

//       <ul className="card-list">
//         {points.map((point, index) => (
//           <li key={index}>{point}</li>
//         ))}
//       </ul>

//       <button className="learn-more-button">
//         <span>{buttonText}</span>
//         <div className="circle">
//           <span className="arrow">&rarr;</span>
//         </div>
//       </button>
//     </div>
//   );
// };

// export default Card;
import React from 'react';
import './Card.css';

const Card = ({ heading, definition, points = [], buttonText }) => {
  return (
    <div className="card-container">
      <h3 className="card-heading">{heading}</h3> <br />
      <p className="card-definition">{definition}</p> <br />

      <div className="s1lineContainer">
        <div className="s1line">
          <div className="s1edge-line"></div> 
          <div className="s1middle-line"></div> 
          
        </div>
      </div>

      <ul className="card-list">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <button className="learn-more-button">
        <span>{buttonText}</span><br />
        <div className="circle">
          <span className="arrow">&rarr;</span>
        </div>
      </button>
    </div>
  );
};

export default Card;

