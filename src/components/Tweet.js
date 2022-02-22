import React from 'react'; 
import Avatar from 'avataaars';

export default function Tweet() {
  return (
      <div>
            <div>
            <h2>Your Timeline</h2>

                <div className="card parent-card">
                <div className='child-card' >
                    <Avatar className='avatar-icon'
                        avatarStyle='Circle'
                        topType='ShortHairTheCaesarSidePart'
                        accessoriesType='Sunglasses'
                        hairColor='Black'
                        facialHairType='BeardMedium'
                        facialHairColor='BrownDark'
                        clotheType='ShirtScoopNeck'
                        clotheColor='Gray01'
                        eyeType='Happy'
                        eyebrowType='AngryNatural'
                        mouthType='Twinkle'
                        skinColor='Yellow'
                    />
                </div>
                    
                    <div className='child-card'>
                          <p><b>Jane Doe</b></p> 
                            <p>Interior Designer Interior Designe Interior Designe</p> 
                            <p>Interior Designer Interior Designe Interior Designe </p> 
                       
                    </div>
                    
                </div>
            </div>
    </div>
  )
}
