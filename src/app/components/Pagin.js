export default function Pagin(props) {

    const maxPage = parseInt(props.totalRows / props.limit) + ((props.totalRows % props.limit > 0) ? 1 : 0)
    const currentPage = props.currentPage
    const count = 0

    const createPagin = (maxPage, currentPage, count) => {
        let items = [];

        if (currentPage > 1) {
            // items.push(<li className="previous" key={-2}><a className={`first`} onClick={() => props.handleLoadPage(1, props.limit)} role="button"></a></li>)
            items.push(<li className="previous" key={-1}><a className={`previouse-link`} onClick={() => props.handleLoadPage(currentPage - 1, props.limit)} role="button"><i className="fa fa-angle-left" aria-hidden="true"></i></a></li>)
        }
        for (let index = 1; index <= maxPage; index++) {
            if (count < 5) {
                if (index < currentPage) {
                    if (maxPage - currentPage >= 2) {
                        if (currentPage - index <= 2) {
                            if (index === 1) {
                                items.push(<li className="" key={index}><a className="" onClick={() => props.handleLoadPage(1, props.limit)} role="button">{index}</a></li>)
                            } else {
                                items.push(<li className="" key={index}><a className="" onClick={() => props.handleLoadPage(index, props.limit)} role="button">{index}</a></li>)
                            }
                            count += 1
                        }
                    }
                    if (maxPage - currentPage < 2) {
                        if (maxPage - index < 5) {
                            if (index === 1) {
                                items.push(<li className="" key={index}><a className="" onClick={() => props.handleLoadPage(1, props.limit)} role="button">{index}</a></li>)
                            } else {
                                items.push(<li className="" key={index}><a className="" onClick={() => props.handleLoadPage(index, props.limit)} role="button">{index}</a></li>)
                            }
                        }
                    }
                }
                if (currentPage === index) {
                    items.push(<li className={`active`} key={index}><a className="" role="button">{index}</a></li>)
                    count = count + 1
                }
                if (index > currentPage) {
                    items.push(<li className="" key={index}><a className="" onClick={() => props.handleLoadPage(index, props.limit)} role="button">{index}</a></li>)
                    count = count + 1
                }
            }
        }
        if (currentPage < maxPage) {
            items.push(<li className="" key={maxPage + 1}><a className={`next-link`} onClick={() => props.handleLoadPage(currentPage + 1, props.limit)} role="button"><i className="fa fa-angle-right" aria-hidden="true"></i></a></li>)
            // items.push(<li className="" key={maxPage+2}><a className={`last`} onClick={() => props.handleLoadPage(maxPage, props.limit)} role="button"></a></li>)
        }
        return items;
    }

    return (
        <div className={`justify-content-center mt-3`}>
            <ul className="pagination">
                {createPagin(maxPage, currentPage, count)}
            </ul>
        </div>
    )
}