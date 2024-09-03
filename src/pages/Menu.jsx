/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GBT4H2aVE7p
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from 'react-router-dom';

import pizzas from '../pizzasData';

export default function Menu() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pizza Menu</h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {pizzas.map((pizza) => (
              <div key={pizza.id} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <Link to={`/pizza/${pizza.id}`} className="absolute inset-0 z-10">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  width={500}
                  height={400}
                  className="h-64 w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                  style={{ aspectRatio: "500/400", objectFit: "cover" }}
                />
                <div className="bg-background p-4">
                  <h3 className="text-xl font-bold">{pizza.name}</h3>
                  <p className="text-muted-foreground">{pizza.description}</p>
                  <p className="mt-2 font-semibold">${pizza.price.toFixed(2)}</p>
                  <button className="mt-2 w-full add-to-cart-button">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}