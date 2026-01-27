
type UserStatusProps = {
   userIsActive: boolean;
}
/*
! NOT ALLOWED
type UserStatusProps = {
gender: "";
}

*/

function UserStatus({ isActive } : UserStatusProps) {
  return (
    <div>
        <h3>User Status</h3>
        <p>
            {isActive ? 'Account is active' : ' Account is inactive'}
        </p>
    </div>
  )
}

export default UserStatus