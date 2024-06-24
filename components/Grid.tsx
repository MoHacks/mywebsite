import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '../data/index';

const Grid = () => {
  return (
      <BentoGrid>
        {
            gridItems.map((item) => (
                <BentoGridItem
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    className={item.className}
                    imgClassName={item.imgClassName}
                    titleClassName={item.titleClassName}
                    img={item.img}
                    spareImg={item.spareImg}
                />
            ))}
        
      </BentoGrid>
  )
}

export default Grid