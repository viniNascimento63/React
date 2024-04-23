export function ProductCategoryRow({ category }) {
    return (
        <tr className="product-category text-center table-active">
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}