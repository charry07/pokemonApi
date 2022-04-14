import React from 'react'


function Pagination(props) {
    return (
        <nav className="pagination" aria-label="...">
            <ul className="pagination">
                <button className="page-link" onClick={props.previous}>Previous</button>
                <button onClick={props.next} className="page-link">Next</button>
                <h4 className='pagina'>Pagina {props.pagina}</h4>
            </ul>
        </nav>
    )
}
export default Pagination