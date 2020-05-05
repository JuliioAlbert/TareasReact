import React from 'react';

const Proyecto = ({ proyecto }) => {
    return (
        <li>
            <button
                type="submit"
                className="btn btn-block btn-blank"
            >
                {proyecto.nombre}
            </button>
        </li>
    );
}

export default Proyecto
    ;