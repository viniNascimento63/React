const sqlite3 = require('sqlite3').verbose(); // importando módulo 'sqlite3'

export class DB {
    constructor(dbNameFile) {
        // Criação da conexão com o banco de dados
        this.db = new sqlite3.Database(dbNameFile, (err) => {
            if (err) {
                console.error('Erro ao abrir o banco de dados', err.message);
            } else {
                console.log('Conexão bem-sucedida com o banco de dados');
            }
        });
    }

    // Insere produtos
    insertProduct(category, price, stocked, name) {
        const statement = 'INSERT INTO products (category, price, stocked, name) VALUES (?, ?, ?, ?)';

        this.db.run(statement, [category, price, stocked, name], function(err) {
            if (err) {
                console.error("Erro ao inserir produto", err.message);
            } else {
                console.log(`Produto inserido com sucesso. ID: ${this.lastID}`);
            }
        });
    }
    
    // Encerra conexão com o banco de dados
    close() {
        this.db.close((err) => {
            if (err) {
                console.error('Erro ao fechar o banco de dados.', err.message);
            } else {
                console.log('Conexão com o banco de dados fechada.');
            }
        });
    }
}

