import React from 'react'
const fruits = [
  { id: 1, name: "Apple", color: "Red" },
  { id: 2, name: "Banana", color: "Yellow" },
  { id: 3, name: "Cherry", color: "Red" }
];

const TestMap = () => {
  return (
    <div>TestMap
        {dataname.map((fruit) => (
                  <li key={dataname.id}>
                    <strong>{dataname.name}</strong> - <span>{dataname.color}</span>
                  </li>
        ))}
    </div>
  )
}

export default TestMap