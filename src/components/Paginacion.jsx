import React from 'react'

const Paginacion = ({ onPrevius, onNext, info }) => {

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
                    info.prev ?
                        <li className="page-item">
                            <button className="btn btn-info" onClick={handlePrevius}>Previous</button>
                        </li>
                        :
                        null
                }
                {
                    info.next ?
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