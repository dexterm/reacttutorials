export  const UPDATE_USER = 'users:UpdateUser';

//action creator or pure function
export function updateUser(newUser) 
{
    console.log('click received...')
    console.log('updateUser action...')
    return  {
        type:UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}
