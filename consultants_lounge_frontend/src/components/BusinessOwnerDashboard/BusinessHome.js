import React from 'react';

import A from '../../resources/A.png';
import P from '../../resources/P.png';
import LS from '../../resources/LS.png';
import DW from '../../resources/DW.png';
import NC from '../../resources/NC.png';
import ColoredPencils from '../../resources/ColoredPencils.png';
import BlankProfile from '../../resources/BlankProfile.png';


export default function BusinessesHome(){

  // Top members data 
const topMembers = [
  { id: 1, name: "Phoenix Baker", date: "Member since Feb 2022", image: P },
  { id: 2, name: "Lana Steiner", date: "Member since Jan 2022", image: LS },
  { id: 3, name: "Demi Wikinson", date: "Member since Mar 2022", image: DW },
  { id: 4, name: "Natali Craig", date: "Member since Mar 2022", image: NC },
  { id: 5, name: "Candice Wu", date: "Member since Feb 2022", image: ColoredPencils },
  { id: 6, name: "Orlando Diggs", date: "Member since Apr 2022", image: ColoredPencils },
  { id: 7, name: "Drew Cano", date: "Member since Apr 2022", image: BlankProfile },
  { id: 8, name: "Kate Morrison", date: "Member since Jan 2022", image: BlankProfile },
  { id: 9, name: "Korey Okamus", date: "Member since Feb 2022", image: ColoredPencils },
  { id: 10, name: "Ave Right", date: "Member since Mar 2022", image: A } 
];
      return (
        <div>
          <div>
          <h1>Top Members</h1>
          <ul>
            {topMembers.map(member => (
              <li key={member.id}>
                <img src={member.image} alt={member.name} width="50" />
                <div>{member.name}</div>
                <small>{member.date}</small>
              </li>
            ))}
          </ul>
          </div>
        </div>
      );
}