import React from 'react'
import {ReactComponent as Brand1} from '../Assets/brand1.svg';
import {ReactComponent as Brand2} from '../Assets/brand2.svg';
import {ReactComponent as Brand3} from '../Assets/brand3.svg';
import {ReactComponent as Brand4} from '../Assets/brand4.svg';
import {ReactComponent as Brand5} from '../Assets/brand5.svg';
import {ReactComponent as Brand6} from '../Assets/brand6.svg';
export default function Brands() {
  return (
    <div className="brands">
<p className="brands-header">Over 32k+ software  businesses growing with AR Shakir</p>
   <div className='brands-list'>
     <Brand1 className="brands-item"/>
     <Brand2 className="brands-item"/>
     <Brand3 className="brands-item"/>
     <Brand4 className="brands-item"/>
     <Brand5 className="brands-item"/>
     <Brand6 className="brands-item"/>
   </div>
    </div>
  )
}
