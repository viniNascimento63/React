import { FilterProductTable } from "./components/FilterProductTable";
import './resources/App.css';

const PRODUCTS = [
    { category: "Fruits", price: "R$ 1,00", stocked: true, name: "Apple" },
    { category: "Fruits", price: "R$ 1,00", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "R$ 2,00", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "R$ 2,00", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "R$ 4,00", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "R$ 1,00", stocked: true, name: "Peas" }
];

export default function App() {
    return <FilterProductTable products={PRODUCTS} />;
}