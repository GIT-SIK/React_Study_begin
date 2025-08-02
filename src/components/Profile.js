/* 
* Props
*
*/

const Profile = ({name = "noname"}) => {
  const containerStyle = {
    display : 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const imgStyle = {
    borderRadius: '50%',
    border: '2px solid #ccc',
    marginRight: '8px'
  };

  const spanStyle = {
    marginTop : '10px'
  };

  return (
    <div style={containerStyle}>
      <img
        className="profile"
        style={imgStyle}
        src={`${process.env.PUBLIC_URL}/default_user.png`}
        alt={name}
        width={50}
        height={50}
      />
      <span style={spanStyle}>  {name} </span>
    </div>
  );
}

export default Profile;