function Aula1234() {

    const name = "Jullia"
    const newName = name.toLocaleUpperCase();

    function soma(a, b) {
        return a + b
    }

    const url = 'https://images.pexels.com/photos/36122172/pexels-photo-36122172.jpeg'

    return (
        <div>
            <h1> {name} aterando JSX</h1>
            <p> Ola, {newName}</p>
            <p>A Soma de a + b:   {soma(10, 20)} </p>
            <img src={url} />
            <span> todos os elemento precisam estar envolvido por um elemento pai </span>
            <span> a maneira correta de declarar classese css em react é com className</span>
        </div>
    )
}

export default Aula1234