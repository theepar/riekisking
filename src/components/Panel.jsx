function panel({judul, Children}){
    return(
        <>
        <div className="panel">
            {judul && <h2>{judul}</h2>}
            {Children}
        </div>
        </>
    )
}
export default panel