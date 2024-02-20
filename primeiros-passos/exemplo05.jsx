// RENDERIZAÇÃO CONDICIONAL
let content;

// Condição padrão
/*
if (isLoggedIn) {
    content = <AdminPanel />;
} else {
    content = <LoginForm/>;
}

return (
    <div>
        {content}
    </div>
);
*/

// Condição compacta (somente em JSX)
/*
<div>
    {isLoggedIn ? (
        <AdminPanel />
    ) : (
        <LofginForm />
    )}
</div>
*/

// Versão mais compacta (else não necessário)
/*
<div>
    {isLoggedIn && <AdminPanel />}
</div>
*/