import React from 'react'

function List1({products}) {
    
  return (
    <>
        <div>
            <table>
                <tr>
                    <th>STT</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
                {products.length > 0 && products.map(product =>
                    <tr>
                       <td>{product.id}</td>
                       <td>{product.title}</td>
                       <td>{product.price}</td>
                       <td>{product.description}</td>
                    </tr>
                )}
            </table>
        </div>
    </>
  )
}

export default List1
