import '../../../styles/Details.css';
export default function Details() {
    return (
        <div>  
         {/* Permission controls */}
                   <div className="PermissionControls">
                    <p>Permissions</p>
                    <table className="PermissionsTable">
                        <thead>
                            <tr>
                                <th> Full Access </th>
                                <th> View </th>
                                <th> Create </th>
                                <th> Edit </th>
                                <th> Delete </th>
                                <th> More </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> lorem epsum</td>
                                <td> <input type="checkbox" /> </td>
                                <td> <input type="checkbox" /> </td>
                                <td> <input type="checkbox" /> </td>
                                <td> <input type="checkbox" /> </td>
                                <td> <input type="checkbox" /> </td>
                            </tr>
                            <tr>
                                <td> lorem epsum</td>
                                <td> <input type="checkbox" /> </td>
                                <td> <input type="checkbox" /> </td>
                                <td> <input type="checkbox" /> </td>
                                <td> <input type="checkbox" /> </td>
                                <td> <input type="checkbox" /> </td>
                            </tr>
                            <tr>
                                <td> lorem epsum</td>
                                <td> <input type="checkbox" /> </td>
                                <td> <input type="checkbox" /> </td>
                                <td> <input type="checkbox" /> </td>
                                <td> <input type="checkbox" /> </td>
                                <td> <input type="checkbox" /> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    );
}