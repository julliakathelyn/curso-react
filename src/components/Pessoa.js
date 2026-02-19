// //function Pessoa (props) {
//     return(
//         <div>
//             <img src={props.foto} />
//             <h2>Nome: {props.nome}</h2>
//             <p>Idade: {props.idade}</p>
//             <p>Profissão: {props.profissao}</p>
//         </div>
//     )
// }

// export default Pessoa
// a maneira de cima funciona como a de baixo porem na de baixo podemos usar nome de verdade se tornando mais legivel
function Pessoa({ nome, idade, profissao, foto }) {
    return (
        <div>
            <img src={foto} alt="imagm de exemplo"/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa