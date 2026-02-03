
type UserStatusProps = {
   userIsActive: boolean;
}
/*
! NOT ALLOWED
type UserStatusProps = {
gender: "";
}

*/

function UserStatus({ userIsActive } : UserStatusProps) {
  return (
    <div>
        <h3>User Status</h3>
        <p>
            {userIsActive ? 'Account is active' : ' Account is inactive'}
        </p>
    </div>
  )
}

export default UserStatus