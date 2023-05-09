import DogComponent from "../../assets/Icon";

const styles = {
  navbar: {
    backgroundColor: "white",
    borderRadius: "2px",
  },
  toolbar: {
    paddingLeft: 0,
  },
};

export const MyNavbar = () => {
  return (
    <div style={styles.navbar}>
      <div style={{ maxWidth: "xl", margin: "0 auto" }}>
        <nav style={styles.toolbar}>
          <a href="/">{<DogComponent />}</a>
        </nav>
      </div>
    </div>
  );
};

export default MyNavbar;
