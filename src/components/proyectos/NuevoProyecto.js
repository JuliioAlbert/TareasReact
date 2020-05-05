import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

    //state para Proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //Leer los cambios de estado de el Formulario
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    //Extrar nombre del Proyecto 
    const { nombre } = proyecto;

    //Cuando el usuario da submit
    const NProyecto = e => {
        e.preventDefault();


        //validar 
        if(nombre.trim()=== '') return;


        //agregar a el state 



        //reiniciar el form
    }
    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >
                Nuevo Proyecto
        </button>

            <form
                className="formulario-nuevo-proyecto"
                onSubmit={() => NProyecto()}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />
                <input
                    type="submit"
                    className="btn btn-block btn-primario"
                    value="Agregar Proyecto"
                />
            </form>
        </Fragment>
    );
}

export default NuevoProyecto;