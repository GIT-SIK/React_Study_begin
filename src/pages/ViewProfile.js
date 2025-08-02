import Profile from '../components/Profile';

const ViewProfile = () => {
    const profileStyle = {
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1rem'
    };

    return (
    <div style={profileStyle}>
      <div>Props 값 지정</div>
      <Profile name="이직접" />
      
      <div>Props 기본값</div>
      <Profile />
    </div>
    );
}

export default ViewProfile;