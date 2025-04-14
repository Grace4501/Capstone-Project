import '../../../styles/Contacts.css';

export default function Contacts() {
  return (
    <div className="contacts-container">
      <h5>Have An Option To Change The View, Table Or Cards</h5>
      <div className="controls">
        <input type="search" placeholder="Search..." />
        
        <select className="filter-select">
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>
      <div className="cards-container">
      </div>
    </div>
  );
}
