import React from 'react'
import pic1 from '../images/picture 1.jpeg'
import pic2 from '../images/picture 2.jpeg'
import pic3 from '../images/picture 3.jpeg'
import pic4 from '../images/picture 4.jpeg'
import pic5 from '../images/picture 5.jpeg'
import pic6 from '../images/picture 6.jpeg'
import pic7 from '../images/picture 7.jpeg'
import pic8 from '../images/picture 8.jpeg'


export default function workimg() {
    let data = [
        {
            id: 1,
            imgSrc: pic1,
        },
        {
            id: 1,
            imgSrc: pic2,
        },
        {
            id: 1,
            imgSrc: pic3,
        },
        {
            id: 1,
            imgSrc: pic4,
        },
        {
            id: 1,
            imgSrc: pic5,
        },
        {
            id: 1,
            imgSrc: pic6,
        },
        {
            id: 1,
            imgSrc: pic7,
        },
        {
            id: 1,
            imgSrc: pic8,
        },
       
    ]
    return (
        <>
            <div className="photoGallery">
                {data.map((item, index) => {
                    return (
                        <div className='pics' key={index}>
                            <img src={item.imgSrc} style={{ width: '100%', height: '100%' ,margin:'10px'}} />

                        </div>
                    )

                })}
            </div>
         
           
        </>






    )
}
