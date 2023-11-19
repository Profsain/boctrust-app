import ProfileCard from "./ProfileCard";

const MyProfile = () => {
  const styles = {
    container: {
      backgroundColor: "#f5f6f7",
      borderRadius: "18px",
      marginTop: "2rem",
      paddingRight: "4rem",
    },
    img: {
      width: "90px",
      height: "90px",
      marginBottom: "1rem",
    }
  };

  return (
    <div style={styles.container} className="PCon">
      <div>
        <img
          src="images/profileavaterlg.png"
          alt="profile-image"
          style={styles.img}
        />
      </div>
      <div>
        <ProfileCard title="First Name" value="Femi" />
        <ProfileCard title="Last Name" value="Akinwande" />
        <ProfileCard title="Business Name/Employer" value="NG Fire Service" />
        <ProfileCard title="Branch" value="Lagos Island" />
        <ProfileCard title="Email" value="femiakin@gmail.com" />
        <ProfileCard title="Mobile Number" value="08012349812" />
        <ProfileCard title="Gender" value="Male" />
      </div>
    </div>
  );
};

export default MyProfile;
