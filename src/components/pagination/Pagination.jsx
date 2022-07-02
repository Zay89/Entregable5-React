import React from 'react'


const Pagination = ({ arrayPages, currentPage, setCurrentPage, quantityPages }) => {

    const previousPag = () => {
        if (currentPage - 1 === 0) {
            setCurrentPage(quantityPages)
        } else {
            setCurrentPage(currentPage - 1)
        }

    }

    
    const nextPag = () => {
        if (currentPage + 1 > quantityPages) {
            setCurrentPage(1)
        } else {
            setCurrentPage(currentPage + 1)
        }

    }
    const pageTurn = n => setCurrentPage(n)

    return (
        <div className='container_pagination'>
            <div className='pagination_previous' onClick={previousPag}>&#60;</div>
            <ul  className='container_nums'>
                {
                    arrayPages?.map(num =>

                        <li className='pokescreen_num' onClick={() => pageTurn(num)} key={num}>{num}</li>
                    )
                }
            </ul>
            <div className='pagination_next' onClick={nextPag}>&#62;</div>
        </div>
    )
}

export default Pagination