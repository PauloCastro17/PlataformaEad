import './profile.css'
import Navbar from '../../components/NavBar'
import Navigation from '../../components/navigation'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import api from '../../services/api'

function PageProfile(){

    const {alunoId} = useParams();
    const [dadosAluno, setDadosAluno] = useState();
    const [nomeAluno , setNomeAluno] = useState();
    const [idade, setIdade] = useState();
    const [serie, setSerie] = useState();
    const [email, setEmail] = useState();
    const [pais,setPais] = useState();
    const [cidadeUF, setCidadeUF] = useState();
    const [nomePai, setNomePai] = useState();
    const [nomeMae, setNomeMae] = useState();
    const [nomeEscola, setNomeEscola] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [senha, setSenha] = useState();
    const [fotoPerfil, setFotoPerfil] = useState();
    const [iconAvatar, setIconAvatar] = useState();

    useEffect(() =>{
        api.get("alunos?id="+alunoId).then(({ data }) => {
            data?.map((dadosAluno) => {
                setNomeAluno(dadosAluno.NomeCompleto)
                setIdade(dadosAluno.idade)
                setEmail(dadosAluno.email)
                setNomePai(dadosAluno.NomePai)
                setNomeMae(dadosAluno.NomeMae)
                setDataNascimento(dadosAluno.DataNascimento)
                setSerie(dadosAluno.Serie)
                setPais(dadosAluno.pais)
                setCidadeUF(dadosAluno.cidade)
                setNomeEscola(dadosAluno.NomeEscola)
                setSenha(dadosAluno.senha)
            })
        })


    }, [])

    async function editDados(){
        const dadosAlunos = {
            id: alunoId,
            NomeCompleto: nomeAluno,
            idade: idade,
            email: email,
            NomePai: nomePai,
            NomeMae: nomeMae,
            DataNascimento: dataNascimento,
            Serie: serie,
            pais: pais,
            cidade: cidadeUF,
            NomeEscola: nomeEscola,
            senha: senha
        }

        const response = await api.put('alunos/'+alunoId, dadosAlunos);
        if(response){
            window.location.href = "http://localhost:3000/Profile/"+alunoId;
        }
        else{
            alert("Erro!");
        }
        
    }


    return(
        <>
        <Navbar/>
            <div className="container-profile">
                <div className="row-profile">
                    <Navigation/>
                        <form key={alunoId} onSubmit={editDados}>

                            <div className="inputs-profile">
                                <input className="input-nome" type="text" placeholder="Nome Completo"   defaultValue={nomeAluno} onChange={ (e) => setNomeAluno(e.target.value) } />

                                <input className="input-idade" type="number" placeholder="Idade" defaultValue={idade}onChange={ (e) => setIdade(e.target.value) } />

                                <input className="input-serie" type="text" placeholder="Série" defaultValue={serie} onChange={ (e) => setSerie(e.target.value) } />
                            </div>

                            <div className="inputs-profile">
                                <input className="input-email" type="text" placeholder="Email" defaultValue={email} onChange={ (e) => setEmail(e.target.value) } />

                                <input className="input-pais" type="text" placeholder="País" defaultValue={pais} onChange={ (e) => setPais(e.target.value) } />

                                <input className="input-uf" type="text" placeholder="Cidade/UF" defaultValue={cidadeUF} onChange={ (e) => setCidadeUF(e.target.value) } />
                            </div>

                            <div className="inputs-profile">
                                <input className="input-NomeMae" type="text" placeholder="Nome Completo do Pai" defaultValue={nomePai} onChange={ (e) => setNomePai(e.target.value) } />

                                <input className="input-NomePai" type="text" placeholder="Nome Completo da Mãe" defaultValue={nomeMae} onChange={ (e) => setNomeMae(e.target.value) } />
                            </div>

                            <div className="inputs-profile">
                                <input className="input-NomeEscola" type="text" placeholder="Nome da Escola" defaultValue={nomeEscola} onChange={ (e) => setNomeEscola(e.target.value) } />

                                <input className="input-DataNascimento" type="text" defaultValue={dataNascimento} onChange={ (e) => setDataNascimento(e.target.value) } />
                            </div>

                            <div className="inputs-profile">
                                <input className="input-FotoPerfil" type="file" />

                                <input className="input-IconAvatar" type="file" />
                            </div>

                            <div className="buttons-profile">
                                <input type="submit" value="Editar"/>
                            </div>
                        </form>
                </div>
            </div>
        </>
    );
}

export default PageProfile;