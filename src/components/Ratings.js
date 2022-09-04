import React from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
const Ratings = ({rating,onClick,style}) => {
  return (
    <div className=" flex mt-2 ml-3">
       <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} className=" text-grat">
           
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </>
    </div>
  )
}

export default Ratings