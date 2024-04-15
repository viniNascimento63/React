import { useState } from "react";

function ProductCategoryRow({ category }) {
    return (
        <tr className="product-category text-center table-active">
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span className="text-danger text-decoration-line-through">
            {product.name}
        </span>;
    
    const price = product.stocked ? product.price :
        <span className="text-danger text-decoration-line-through">
            {product.price}
        </span>

    return (
        <tr className="product">
            <td className="text-start">{name}</td>
            <td className="text-end">{price}</td>
        </tr>
    );
}

function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        // Verifica se "filterText" não faz parte do nome do "product"
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()
        ) === -1) {
            return;
        }

        // Não exibe produtos fora de estoque
        if (inStockOnly && !product.stocked) {
            return;
        }

        // Adiciona em rows uma linha de 
        // cabeçalho com o nome da categoria.
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );
        }

        // Adiciona em rows uma linha com nome
        // e preço do produto.
        rows.push(
            <ProductRow
                product={product}
                key={product.name}
            />
        );

        lastCategory = product.category;
    });

    return (
        <div className="container border rounded-2">
            <table className="table w-100">
                <thead>
                    <tr className="">
                        <th className="text-start">NAME</th>
                        <th className="text-end">PRICE</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
}) {
    return (
        <form>
            <input
                type="text"
                value={filterText}
                placeholder="Search..."
                onChange={(e) => { onFilterTextChange(e.target.value) }}
                className="form-control"
            />
            <label className="py-2 fst-italic">
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                    className="form-check-input"
                />
                {' '}Only show products in stock
            </label>
        </form>
    );
}

function FilterProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(true);
    return (
        <div className="container d-flex justify-content-center">
            <div className="d-flex flex-column shadow rounded-2 p-2 min-width">
                <SearchBar
                    filterText={filterText}
                    inStockOnly={inStockOnly}
                    onFilterTextChange={setFilterText}
                    onInStockOnlyChange={setInStockOnly}
                />
                <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
            </div>
        </div>
    );
}

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