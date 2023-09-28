import React from 'react'

const Detail = () => {
 const sizes = ["S", "M", "L"]

  return (
    <div>
     <h3>Details</h3>

    <p>Choose size</p>
     {sizes.map(size => (
      <button>
        {size}
      </button>
     ))}

    <button>Add to Cart</button>
    </div>
  )
}

export default Detail