/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GBT4H2aVE7p
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"

import margherittaImage from "@/assets/images/margherita-pizza-11.jpg"
import pepperoniImage from "@/assets/images/pepperoni.jpg"
import kapriImage from "@/assets/images/kapri.webp"
import hawaiianImage from "@/assets/images/hawaiian.jpg"
import veggieImg from "@/assets/images/veggie.jpg"
import meatImg from "@/assets/images/meatlovers.jpg"
import bbqImg from "@/assets/images/bbq-chicken.jpg"

export default function Menu() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pizza Menu</h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <Link href="#" className="absolute inset-0 z-10">
                <span className="sr-only">View</span>
              </Link>
              <img
                src={margherittaImage}
                alt="Margherita Pizza"
                width={500}
                height={400}
                className="h-64 w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
              <div className="bg-background p-4">
                <h3 className="text-xl font-bold">Margherita Pizza</h3>
                <p className="text-muted-foreground">Classic tomato sauce, fresh mozzarella, and basil.</p>
                <p className="mt-2 font-semibold">$12.99</p>
                <Button variant="outline" className="mt-2 w-full">
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img
                src={pepperoniImage}
                alt="Pepperoni Pizza"
                width={500}
                height={400}
                className="h-64 w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
              <div className="bg-background p-4">
                <h3 className="text-xl font-bold">Pepperoni Pizza</h3>
                <p className="text-muted-foreground">Tomato sauce, mozzarella, and pepperoni.</p>
                <p className="mt-2 font-semibold">$14.99</p>
                <Button variant="outline" className="mt-2 w-full">
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img
                src={veggieImg}
                alt="Veggie Pizza"
                width={500}
                height={400}
                className="h-64 w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
              <div className="bg-background p-4">
                <h3 className="text-xl font-bold">Veggie Pizza</h3>
                <p className="text-muted-foreground">Tomato sauce, mozzarella, bell peppers, mushrooms, and onions.</p>
                <p className="mt-2 font-semibold">$13.99</p>
                <Button variant="outline" className="mt-2 w-full">
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img
                src={meatImg}
                alt="Meat Lovers Pizza"
                width={500}
                height={400}
                className="h-64 w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
              <div className="bg-background p-4">
                <h3 className="text-xl font-bold">Meat Lovers Pizza</h3>
                <p className="text-muted-foreground">Tomato sauce, mozzarella, pepperoni, sausage, and bacon.</p>
                <p className="mt-2 font-semibold">$16.99</p>
                <Button variant="outline" className="mt-2 w-full">
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img
                src={hawaiianImage}
                alt="Hawaiian Pizza"
                width={500}
                height={400}
                className="h-64 w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
              <div className="bg-background p-4">
                <h3 className="text-xl font-bold">Hawaiian Pizza</h3>
                <p className="text-muted-foreground">Tomato sauce, mozzarella, ham, and pineapple.</p>
                <p className="mt-2 font-semibold">$14.99</p>
                <Button variant="outline" className="mt-2 w-full">
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img
                src={bbqImg}
                alt="BBQ Chicken Pizza"
                width={500}
                height={400}
                className="h-64 w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
              <div className="bg-background p-4">
                <h3 className="text-xl font-bold">BBQ Chicken Pizza</h3>
                <p className="text-muted-foreground">BBQ sauce, mozzarella, grilled chicken, and red onions.</p>
                <p className="mt-2 font-semibold">$15.99</p>
                <Button variant="outline" className="mt-2 w-full">
                  Add to Cart
                </Button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}