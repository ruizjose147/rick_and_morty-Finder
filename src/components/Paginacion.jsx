import React from 'react'

const Paginacion = ({ prev, next, onPrevius, onNext }) => {

    const handlePrevius = () => {
        onPrevius();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {
                    prev ?
                        <li className="page-item">
                            <button className="btn btn-info" onClick={handlePrevius}>Previous</button>
                        </li>
                        :
                        null
                }
                {
                    next ?
                        <li className="page-item">
                            <button className="btn btn-info" onClick={handleNext}>Next</button>
                        </li>
                        :
                        null
                }


            </ul>
        </nav>
    )
}

export default Paginacion