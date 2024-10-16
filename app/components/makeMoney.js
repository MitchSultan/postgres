import React from 'react'

export default function makeMoney() {
    const money = [
        {id: 1, title: "Copywriting", description: "Join millions of people and earn from the comfort of your home", image: "https://i.pinimg.com/236x/89/34/81/893481b49099773b537d198d284edbd2.jpg"},
    ]
  return (
    <div>
        <div>
            <h1>Online Hustle</h1>
            <p>Join millions of people and earn from the comfortof your home</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {money.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
