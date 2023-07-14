import React from 'react';
import ReactDOM from 'react-dom/client';
import './kartica.scss';

import { BsPersonAdd, BsPersonLock, BsBicycle } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import { MdElectricBike } from "react-icons/md";

export function Kartica2({tipIkone=1, broj=100, tekst="neki tekst..."}) {
    return (
      <div className="kartica-brojka">
        <div className="kartica-el1">
          {tipIkone === 1 ? <BsPersonAdd className="kartica-ikona"/> : null}
          {tipIkone === 2 ? <BsPersonLock className="kartica-ikona"/> : null}
          {tipIkone === 3 ? <AiOutlineCar className="kartica-ikona"/> : null}
          {tipIkone === 4 ? <BsBicycle className="kartica-ikona"/> : null}
          {tipIkone === 5 ? <MdElectricBike className="kartica-ikona"/> : null}
        </div>
        <div className="kartica-el2">
          <p className="kartica-boldano">{broj}+</p>  
          <p className="kartica-tekst">{tekst}</p>
        </div>
      </div>
    )
  }