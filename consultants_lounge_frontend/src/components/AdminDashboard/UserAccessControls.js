import { Link } from 'react-router-dom';
export default function UserAccess() {
    return (
        <div className="UserAccessControls">
            <h4>User Access Controls </h4>
            {/* Select user  */}
            <div className="SelectUser">
                <input type="search" />
            </div>
            {/* User access details*/}
            <div className="UserAccesssDetails">
                <div className="Profile Role">
                    <img />
                    <h5> User Name</h5>
                    <p> Role</p>
                    <p><b>Role: Admin</b></p>
                </div>
                <div className="buttons">
                    <Link to="./details"> Details </Link>
                    <Link to="./userActivity"> User Activity </Link>
                </div>
                     {/* Permission controls */}
                <div className="PermissionControls">
                    <p>Permissions</p>
                    <table>
                        <thead>
                            <tr>
                                <th>  </th>
                                <th> Head </th>
                                <th> Head </th>
                                <th> Head </th>
                                <th> Head </th>
                                <th> Head </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> dummy data </td>
                                <td> <input type="checkbox" /> </td>
                                <td> <input type="checkbox" /> </td>
                                <td> <input type="checkbox" /> </td>
                                <td> <input type="checkbox" /> </td>
                                <td> <input type="checkbox" /> </td>
                            </tr>
                            <tr>
                                <td> dummy data </td>
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
        </div>
    );
}