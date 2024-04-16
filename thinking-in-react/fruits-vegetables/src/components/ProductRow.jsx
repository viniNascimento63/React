export function ProductRow({ product }) {
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