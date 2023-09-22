class heroi {                                 //-------CRIADA A CLASSE
    constructor(classe, ataque, nivel){
        this.classe = classe ;
        this.ataque = ataque ;
        this.nivel = nivel ;
    }
    atacar() {                                //------CRIADA A FUNÇÃO
        console.log(`O Herói ${this.classe} atacou ${this.ataque} `)
    }
}

const heroi1 = new heroi("Mago", "usando magia", 16)  //-----------CRIADO OS OBJETOS
const heroi2 = new heroi("Monge", "usando artes marciais", 18)
const heroi3 = new heroi("Guerreiro", "usando espada", 20)
const heroi4 = new heroi("Ninja", "usando artes marciais", 18)

heroi1.atacar() ;    // ------------ CHAMADA A FUNÇÃO 
heroi2.atacar() ;
heroi3.atacar() ;
heroi4.atacar() ;
