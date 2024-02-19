// Criando e aninhando componentes

function MyButton() {
    return (
        <button>Sou um botão</button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app!</h1>
            <MyButton />
        </div>
    );
}
