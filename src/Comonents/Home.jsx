import React from 'react'


const MenuItem = [
  {
    id: 1,
    name: "Margherita",
    unitPrice: 79,
    ingredients: ["Tomato Sauce", "Mozzarella", "Basil"],
    soldOut: false,
    imageUrl: "public/photos/pizza-1.jpg",
  },
  {
    id: 2,
    name: "Pepperoni",
    unitPrice: 99,
    ingredients: ["Tomato Sauce", "Mozzarella", "Pepperoni"],
    soldOut: true,
    imageUrl: "public/photos/pizza-2.jpg",
  },
  {
    id: 3,
    name: "BBQ Chicken",
    unitPrice: 10,
    ingredients: ["BBQ Sauce", "Chicken", "Onions", "Mozzarella"],
    soldOut: false,
    imageUrl: "public/photos/pizza-3.jpg",
  },
  {
    id: 4,
    name: "Veggie Supreme",
    unitPrice: 84,
    ingredients: ["Tomato Sauce", "Mozzarella", "Peppers", "Olives", "Onions"],
    soldOut: false,
    imageUrl: "public/photos/pizza-4.jpg",
  },
  {
    id: 5,
    name: "Four Cheese",
    unitPrice: 67,
    ingredients: ["Mozzarella", "Cheddar", "Parmesan", "Blue Cheese"],
    soldOut: false,
    imageUrl: "public/photos/pizza-5.jpg",
  },
  {
    id: 6,
    name: "Hawaiian",
    unitPrice: 98,
    ingredients: ["Tomato Sauce", "Mozzarella", "Ham", "Pineapple"],
    soldOut: true,
    imageUrl: "public/photos/pizza-6.jpg",
  },
];

export default function Home() {
  return (
    <div className='flex justify-center items-center border-b-14 border-amber-400'>
        <div>


        
        <header>
             <h1 className='text-yellow-300 text-7xl mb-14  '>- Fast React Pizza Co. -</h1>

        </header>

        <main className='max-w-3xl'>
            <span className='text-3xl mt-16 border-b-2 border-t-2 py-2 '>OUR MENU </span>
            <p className='mt-18 mb-20'>Authentic Italian cuisine. 6 creative dishes to choose from.
                 All from our stone oven, all organic, all delicious.</p>

                 <ul className='grid grid-cols-2 gap-4'>

                    {MenuItem.map((pizzas) => (
                        <li  key={pizzas.id}
                        className="flex gap-4 py-2 "
                        >
                            <img className='h-28' src={pizzas.imageUrl} alt={pizzas.name} />
                            <div className='flex flex-col gap-y-2  items-start'>
                                <h2 className='font-bold'> {pizzas.name} </h2>
                                <p>  {pizzas.ingredients.join(",")}</p>
                                <span className='font-bold'> $ {pizzas.unitPrice}</span>
                               
                               
                               
                            </div>
                        </li>
                        
                    ))}
                 </ul>

                 <p className='mt-16'>We're open from 12:00 to 22:00. Come visit us or order online.</p>

                 <button className='border-b-amber-300 mt-10 bg-amber-400 p-3 rounded cursor-pointer mb-16 border-b-0'>Order Now</button>
        </main>
        </div>

        <div className='sticky bottom-0 bg-amber-400  border-b-amber-300'>

        </div>
     
    </div>
  )
}
