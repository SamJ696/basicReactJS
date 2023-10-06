function SocialCard({ title, imageSrc, description }) {
  return (
    <div
      style={{
        backgroundColor: "#F0F0F0",
        borderRadius: 10,
        marginRight: 15,
      }}
    >
      <img
        style={{
          width: 200,
          height: 200,
          marginLeft: 10,
          padding: 5,
          marginRight: 10,
          marginTop: 7
        }}
        src={imageSrc}
        alt="Social Media Logo"
      />
      <div
        style={{
          marginLeft: 10,
          marginRight: 10,
          padding: 5,
          display: "flex",
          justifyContent: "center",
          fontSize: 20,
          color: "tomato"
        }}
      >
        {title}
      </div>
      <div
        style={{
          marginLeft: 10,
          marginRight: 10,
          padding: 5,
          display: "flex",
          justifyContent: "center",
          fontSize: 18,
          marginBottom: 7
        }}
      >
        {description}
      </div>
    </div>
  );
}

export default SocialCard;
