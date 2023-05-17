import Person from "./Person"

const List=({people,setPeople})=>{
    return <main>
        <section className="container">
        <h3>{people.length} have Birthdays Today</h3>
            {people.map((people)=>{
                return <Person key={people.id} {...people}/>
            })}
           
        </section>
        
    </main>
}
export default List