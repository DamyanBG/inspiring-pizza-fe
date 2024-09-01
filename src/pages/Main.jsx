/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xJmGfLRHygL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import margherittaImage from "@/assets/images/margherita-pizza-11.jpg"
import pepperoniImage from "@/assets/images/pepperoni.jpg"
import kapriImage from "@/assets/images/kapri.webp"
import hawaiianImage from "@/assets/images/hawaiian.jpg"
import deliveryImage from "@/assets/images/delivery.jpg"
import mainImage from "@/assets/images/main.png"

export default function Main() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <section className="bg-primary py-12 md:py-20">
          <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:px-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
                Delicious Pizza Delivered to Your Door
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Experience the ultimate pizza delivery service with our wide selection of freshly-made pies and fast,
                reliable delivery.
              </p>
              <div className="flex gap-2">
                <Button className="flex-1">Order Now</Button>
                <Button variant="outline" className="flex-1">
                  View Menu
                </Button>
              </div>
            </div>
            <img
              src={mainImage}
              width={500}
              height={500}
              alt="Pizza"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </section>
        <section id="menu" className="py-12 md:py-20">
          <div className="container grid gap-8 px-4 md:grid-cols-2 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Delicious Pizza Menu</h2>
              <p className="text-muted-foreground">
                Browse our selection of freshly-made pizzas, each crafted with the finest ingredients.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                  <img
                    src={margherittaImage}
                    width={100}
                    height={100}
                    alt="Margherita Pizza"
                    className="aspect-square overflow-hidden rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-medium">Margherita Pizza</h3>
                    <p className="text-muted-foreground">$15.99</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                  <img
                    src={pepperoniImage}
                    width={100}
                    height={100}
                    alt="Pepperoni Pizza"
                    className="aspect-square overflow-hidden rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-medium">Pepperoni Pizza</h3>
                    <p className="text-muted-foreground">$17.99</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                  <img
                    src={kapriImage}
                    width={100}
                    height={100}
                    alt="Kapricoza Pizza"
                    className="aspect-square overflow-hidden rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-medium">Kapricoza Pizza</h3>
                    <p className="text-muted-foreground">$16.99</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                  <img
                    src={hawaiianImage}
                    width={100}
                    height={100}
                    alt="Hawaiian Pizza"
                    className="aspect-square overflow-hidden rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-medium">Hawaiian Pizza</h3>
                    <p className="text-muted-foreground">$18.99</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="bg-muted py-12 md:py-20">
          <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:px-6">
            <img
              src={deliveryImage}
              width={500}
              height={500}
              alt="About"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Our Pizza Delivery</h2>
              <p className="text-muted-foreground">
                At Pizza Delights, we take pride in our commitment to quality and customer satisfaction. Our team of
                experienced chefs and delivery drivers work tirelessly to ensure that every pizza is freshly made and
                delivered to your door with the utmost care.
              </p>
              <p className="text-muted-foreground">
                We use only the finest, locally-sourced ingredients to create our delicious pizzas, and our delivery
                service is fast and reliable. Whether you're craving a classic Margherita or a unique specialty pie,
                we've got you covered.
              </p>
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 md:py-20">
          <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get Your Pizza Delivered</h2>
              <p className="text-muted-foreground">Enter your address and contact information to place your order.</p>
              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input type="text" placeholder="First Name" className="col-span-1" />
                  <Input type="text" placeholder="Last Name" className="col-span-1" />
                </div>
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone" />
                <Textarea placeholder="Delivery Address" rows={3} className="resize-none" />
                <Button type="submit">Place Order</Button>
              </form>
            </div>
            <img
              src="/placeholder.svg"
              width={500}
              height={500}
              alt="Contact"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  )
}
