import margherittaImage from "@/assets/images/margherita-pizza-11.jpg";
import pepperoniImage from "@/assets/images/pepperoni.jpg";
import kapriImage from "@/assets/images/kapri.webp";
import hawaiianImage from "@/assets/images/hawaiian.jpg";
import veggieImg from "@/assets/images/veggie.jpg";
import meatImg from "@/assets/images/meatlovers.jpg";
import bbqImg from "@/assets/images/bbq-chicken.jpg";

const pizzas = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "A simple yet delicious pizza with classic tomato sauce, fresh mozzarella, and basil.",
    price: 12.99,
    image: margherittaImage,
    ingredients: ["Tomato sauce", "Mozzarella", "Basil", "Olive oil"],
    nutritionalFacts: {
      calories: 300,
      fat: "10g",
      protein: "15g",
      carbs: "35g",
    },
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    description: "A fan-favorite with tomato sauce, mozzarella, and plenty of pepperoni.",
    price: 14.99,
    image: pepperoniImage,
    ingredients: ["Tomato sauce", "Mozzarella", "Pepperoni"],
    nutritionalFacts: {
      calories: 350,
      fat: "15g",
      protein: "18g",
      carbs: "30g",
    },
  },
  {
    id: 3,
    name: "Veggie Pizza",
    description: "A healthy option loaded with fresh vegetables and a light tomato sauce.",
    price: 13.99,
    image: veggieImg,
    ingredients: ["Tomato sauce", "Mozzarella", "Bell peppers", "Mushrooms", "Onions"],
    nutritionalFacts: {
      calories: 280,
      fat: "8g",
      protein: "12g",
      carbs: "40g",
    },
  },
  {
    id: 4,
    name: "Meat Lovers Pizza",
    description: "A hearty pizza loaded with pepperoni, sausage, and bacon.",
    price: 16.99,
    image: meatImg,
    ingredients: ["Tomato sauce", "Mozzarella", "Pepperoni", "Sausage", "Bacon"],
    nutritionalFacts: {
      calories: 450,
      fat: "20g",
      protein: "25g",
      carbs: "45g",
    },
  },
  {
    id: 5,
    name: "Hawaiian Pizza",
    description: "A tropical twist with ham and pineapple on a classic tomato sauce base.",
    price: 14.99,
    image: hawaiianImage,
    ingredients: ["Tomato sauce", "Mozzarella", "Ham", "Pineapple"],
    nutritionalFacts: {
      calories: 320,
      fat: "10g",
      protein: "18g",
      carbs: "40g",
    },
  },
  {
    id: 6,
    name: "BBQ Chicken Pizza",
    description: "A savory combination of BBQ sauce, mozzarella, grilled chicken, and red onions.",
    price: 15.99,
    image: bbqImg,
    ingredients: ["BBQ sauce", "Mozzarella", "Grilled chicken", "Red onions"],
    nutritionalFacts: {
      calories: 370,
      fat: "12g",
      protein: "20g",
      carbs: "35g",
    },
  },
];

export default pizzas;
