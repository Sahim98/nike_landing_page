import React from 'react'

const ShoeCard = ({imageURL,bigShoeImg ,changeImg}) => {
    const handleClick = ()=>{
        if(bigShoeImg != imageURL.bigShoe)changeImg(imageURL.bigShoe)

    }
  return (
    <div className={
        `border-2 rounded-lg
        ${bigShoeImg == imageURL.bigShoe?'border-coral-red': 'border-transparent'}
          cursor-pointer
          
        `
        } onClick={handleClick}>
       <div className='items-center justify-center flex  bg-card bg-center rounded-lg'>
       <img src={imageURL.bigShoe} alt="" height={100} width={120} />
       </div>
    </div>
  )
}

export default ShoeCard