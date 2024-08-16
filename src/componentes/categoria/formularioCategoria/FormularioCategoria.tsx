import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toastAlerta } from '../../../util/toastAlerta';
import Categoria from '../../../models/categoria/Categoria';
import { atualizar, listar } from '../../../services/Services';

function FormularioCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await listar(`/categorias/${id}`, setCategoria, {
            headers: {
            },
        });
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })

        console.log(JSON.stringify(categoria))
    }

    async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                })

                toastAlerta('Categoria atualizado com sucesso', 'sucesso')
                retornar()

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', 'info')
                    handleLogout()
                } else {
                    toastAlerta('Erro ao atualizar o Categoria', 'erro')
                }

            }

        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                }
            )

            toastAlerta('Categoria cadastrado com sucesso', 'sucesso')

        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            } else {
                toastAlerta('Erro ao cadastrado o Categoria', 'erro')
            }
        }
    }

    retornar()
}

function retornar() {
    navigate("/categorias")
}

return (
    <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="text-4xl text-center my-8">
            {id === undefined ? 'Cadastre um novo categoria' : 'Editar categoria'}
        </h1>

        <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoCategoria}>
            <div className="flex flex-col gap-2">
                <label htmlFor="descricao">Descrição do categoria</label>
                <input
                    type="text"
                    placeholder="Descrição"
                    name='descricao'
                    className="border-2 border-slate-700 rounded p-2"
                    value={categoria.descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
            </div>
            <button
                className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
                type="submit"
            >
                {id === undefined ? 'Cadastrar' : 'Editar'}
            </button>
        </form>
    </div>
);
}

export default FormularioCategoria;

function handleLogout() {
    throw new Error('Function not implemented.');
}
function cadastrar(arg0: string, categoria: Categoria, setCategoria: React.Dispatch<React.SetStateAction<Categoria>>, arg3: {}) {
    throw new Error('Function not implemented.');
}

