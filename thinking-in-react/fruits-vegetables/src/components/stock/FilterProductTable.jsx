import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { ProductTable } from "./ProductTable";

export function FilterProductTable({ products }) {
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