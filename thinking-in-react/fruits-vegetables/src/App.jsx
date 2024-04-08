import { useState } from "react";

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
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
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>{rows}</tbody>
        </table>
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
            />
            <label>
                <p>
                    <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={(e) => onInStockOnlyChange(e.target.checked)}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </label>
        </form>
    );
}

function FilterProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
        </div>
    );
}

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

export default function App() {
    return <FilterProductTable products={PRODUCTS} />;
}