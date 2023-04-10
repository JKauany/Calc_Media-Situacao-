import React, {useState} from "react";


function Notas(){
    const[nota1, setNota1] = useState(0);
    const[nota2, setNota2] = useState(0);
    const[nota3, setNota3] = useState(0);
    const[media, setMedia] = useState(0);
    const [situacao, setSituacao] = useState("");


    function calcularMedia(){
        const media = (nota1 + nota2 + nota3) /3;
        setMedia (media);
        setSituacao(media >= 6 ? "Parabéns Guerreiro(a), você foi aprovado!!" : "Nãoooo Guerreiro(a), você foi reprovado!!")
        
    }
}
export default Notas;