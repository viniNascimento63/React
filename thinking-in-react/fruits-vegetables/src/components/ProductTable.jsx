import { ProductCategoryRow } from "../components/ProductCategoryRow";
import { ProductRow } from "../components/ProductRow";

export function ProductTable({ products, filterText, inStockOnly }) {
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