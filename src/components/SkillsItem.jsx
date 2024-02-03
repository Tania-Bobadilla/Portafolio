// import React from 'react'

const SkillsItem = ({name, img}) => {
  return (
    <div className="flex flex-col items-center">
        <img src={img} alt="skills" className="w-20 max-auto items-center" />
        <h2 className="font-semibold text-center">{name}</h2>
    </div>
  )
}

export default SkillsItem