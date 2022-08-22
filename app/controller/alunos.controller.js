let alunos = [
    {
        id:1,
        nome:"Mariana",
        email: "mari@atlantico.com",
        senha: "pordeus"
    },
    {
        id: 2,
        nome: "João",
        email: "joaovilt@vilt.com",
        senha: "£$£$"
    },
    {
        id:3,
        nome: "odimar",
        email: "parceirOdimar@ufc.com",
        senha: "karen123"
    }
]

module.exports.listaAlunos = function(request, response){
    response.json(alunos);
 };

module.exports.obterAluno = function(request, response){
    var { id } = request.params;
    var aluno = alunos.find(aluno => (aluno.id==id));
        
    if(aluno){
        response.json(aluno);
    } else {
        response.status(404).json({error: "Aluno não encontrado"});
    }
};

module.exports.cadastrarAluno = (request, response) => {
    alunos.push(request.body);
    response.status(200).send(request.body);
  };
