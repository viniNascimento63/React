export function SearchBar({
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