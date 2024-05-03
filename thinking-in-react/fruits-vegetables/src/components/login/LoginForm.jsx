export default function LoginForm() {
    return (
        <div>
            <div className="d-flex container justify-content-center">
                <p className="h1 fw-normal text-body-tertiary">Login</p>
            </div>

            <div className="d-flex container justify-content-center">
                <form action="#" className="form-width p-3 border rounded shadow-sm" method="post">
                    <div className="mb-1">
                        <label htmlFor="user" className="form-label mb-1">Digite seu usuário:</label>
                        <input type="text" className="form-control input-focus-none" placeholder="Usuário" id="user" />
                    </div>

                    <div className="mb-2">
                        <div><label htmlFor="pass" className="form-label mb-1">Digite sua senha:</label></div>
                        <input type="password" className="form-control input-focus-none" placeholder="Senha" id="pass" />
                    </div>

                    <div className="d-flex justify-content-between">
                        <div>
                            <a href="#">
                                <p className="text-primary m-0">Esqueci a senha</p>
                            </a>
                            <a href="/sign">
                                <p className="text-primary m-0">Cadatre-se</p>
                            </a>
                        </div>
                        <div className="align-self-center"><input type="submit" className="btn btn-primary" value="Enviar" /></div>
                    </div>
                </form>
            </div>
        </div>
    );
}