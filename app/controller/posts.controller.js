let posts = [
    {
        id: 1,
        texto: "que isso",
        likes: 100
    },
    {
        id: 2,
        texto: "Flamengo",
        likes: 87
    },
    {
        id: 3,
        texto: "Star Wars",
        likes: 100
    }
]

module.exports.fazerPosts = (req, res) => {
    posts.push(req.body);
    res.status(200).send(req.body);
}

module.exports.listarPosts = (req, res) => {
    res.json(posts);
}

module.exports.obterPost = (req, res) => {
    const { id } = req.params;

    
}