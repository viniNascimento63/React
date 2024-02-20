// RENDERIZANDO LISTAS

// array de produtos
const products = [
    { title: 'Banana', id: 1 },
    { title: 'Abacaxi', id: 2 },
    { title: 'Melão', id: 3 },
];

export default function listaMercado() {
    const listItems = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}