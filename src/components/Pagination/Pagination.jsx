import React from "react";
import "./style.css";


const Pagination = ({hook}) => {
    const max = hook.maxPage;
    const current = hook.currentPage;
    const pages = [];
    for (let i = 0; i < max; i++) {
        pages.push(i + 1);
    }
    
    return <div className="pagination">
        <button className="pagination__btn" disabled={current === 1} onClick={hook.previous}>◀</button>
        {pages.map(p => <button 
            className="pagination__btn-number" 
            key={p}
            style={{
                backgroundColor: p === current && "#000000 ",
                color: p === current && "#fff700",
                scale: p === current && "1.1"
            }}
            onClick={el => {hook.step(p)}}
        >{p}</button>)}
        <button className="pagination__btn" disabled={current === max} onClick={hook.next}>▶</button>
    </div>
}


export default Pagination;