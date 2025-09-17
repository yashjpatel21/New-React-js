import React from 'react'

const ParamComp = () => {
    const {id} =useParam();
  return (
    <div>
      Params :{id}
    </div>
  )
}

export default ParamComp

const {id} =useParam();