const Person=({name,image,age})=>{
    return <article className="person">
        <img  src={image} alt="person"/>
        <div>
            <h4>{name}</h4>
            <h6>{age}</h6>
        </div>
    </article>
}
export default Person