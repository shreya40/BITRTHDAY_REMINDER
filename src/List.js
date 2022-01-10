import React from 'react';
import './List.css';
import  Heading from './Heading';
import Button from './Button';
import Card from './Card';
import Img1 from './assets/image1.jpeg';
import Img2 from './assets/image2.jpeg';
import Img3 from './assets/image3.jpeg';
import Img4 from './assets/image4.jpeg';
import Img5 from './assets/image5.jpeg';
function List() {
    return (
        <div className="List">
         <Heading /> 
         <Card picture={Img1} name="Bertie Yates" age="29 years"/>
         <Card picture={Img2} name="Hester Hogan" age="32 years"/>
         <Card picture={Img3} name="Larry Little" age="36 years"/>
         <Card picture={Img4} name="Sean Walsh" age="34 years"/>
         <Card picture={Img5} name="Lola Gardner" age="29 years"/>
         
         <Button />

         
        </div>
    )
}

export default List
