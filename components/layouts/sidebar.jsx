export default function Sidebar() {
  return (
    <div>
      <ul>
        <li>
          <label htmlFor="categories">Categories</label>
          <select name="categories" id="categories">
            <option value="housing">Housing</option>
            <option value="vehicle">Vehicle</option>
            <option value="spare">Spare Parts and Accessories</option>
            <option value="second">Second Hand and New Shopping</option>
          </select>
        </li>
      </ul>
    </div>
  );
}
