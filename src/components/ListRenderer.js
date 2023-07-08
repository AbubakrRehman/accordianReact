import React from 'react'

function ListRenderer({items,ItemComponent,itemName}) {
  return (
    <ul>
        {items.length>0 && items.map((item)=>{
            return <ItemComponent title={item.ques} content={item.ans}/>
        })}
    </ul>
  )
}

export default ListRenderer