export default function LoginForm() {
    return (
        <div>
            <div className="d-flex container justify-content-center">
                <p className="h1">Login Page</p>
            </div>

            <div className="d-flex container justify-content-center">
                <form action="#" className="w-25" method="post">
                    <div className="mb-1">
                        <label htmlFor="user" className="form-label mb-1">Digite seu usuário:</label>
                        <input type="text" className="form-control" placeholder="Usuário" id="user" />
                    </div>

                    <div className="mb-2">
                        <div><label htmlFor="pass" className="form-label mb-1">Digite sua senha:</label></div>
                        <input type="password" className="form-control" placeholder="Senha" id="pass" />
                    </div>

                    <div className="d-flex justify-content-between">
                        <p>Esqueci a senha</p>
                        <div><input type="submit" className="btn btn-primary" value="Enviar" /></div>
                    </div>
                </form>
            </div>
        </div>
    );
}