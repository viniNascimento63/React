import TogglePassVisibility from "./TogglePassVisibility";

export default function SignForm() {
    return (
        <div>
            <div className="d-flex container justify-content-center">
                <p className="h1 fw-normal text-body-tertiary">Sign UP</p>
            </div>

            <div className="d-flex container justify-content-center">
                <form action="#" className="form-width p-3 border rounded shadow-sm" method="post">
                    <div className="mb-1">
                        <label htmlFor="name" className="form-label mb-1">Digite seu nome:</label>
                        <input type="text" className="form-control input-focus-none" placeholder="Nome" id="name" />
                    </div>

                    <div className="mb-1">
                        <label htmlFor="email" className="form-label mb-1">Digite seu email:</label>
                        <input type="email" className="form-control input-focus-none" placeholder="E-mail" id="email" />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="pass" className="form-label mb-1">Digite sua senha:</label>
                        <div className="d-flex">
                            <input type="password" className="form-control input-focus-none" placeholder="Senha" id="pass" />
                            <TogglePassVisibility />
                        </div>
                    </div>

                    <div className="d-flex justify-content-between">
                        <div className="align-self-center">
                            <p className="m-0">Já possui cadastro?</p>
                            <a href="/login">
                                <p className="m-0">Faça seu Login!</p>
                            </a>
                        </div>
                        <div className="align-self-center"><input type="submit" className="btn btn-primary" value="Enviar" /></div>
                    </div>
                </form>
            </div>
        </div>
    );
}