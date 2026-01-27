//! you can declare the same interface multiple times, Typescript will automatically merge them into one. This is great for third-party libraries.





interface User{
    id:number;
    hisName: string;
}

const users: User[] = [
    {id: 1, hisName: "Omikunle"},
    {id:2, hisName: "Femi"}
];

function UserList() {
return (
        <ul>
            {/* We use .map() to transform data into jsx  */}
            {users.map((thakin) => (
                <li key={thakin.id}>{thakin.hisName}</li>
            ))
            }
        </ul>
    );
};
export default UserList