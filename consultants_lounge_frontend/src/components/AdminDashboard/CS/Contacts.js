export default function Contacts() {
    return (
        <div>
            <h5> Have An Option To Change The View, Table Or Cards</h5>
            <div>
              <input type="search"/>
              <select> 
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
              </select>
            </div>
            <div className="Cards">
            </div>
        </div>
    )
}