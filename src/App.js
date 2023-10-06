import SocialCard from "./SocialCard";
import FacebookImage from "./images/fb.png";
import TwitterImage from "./images/twitter.png";
import InstagramImage from "./images/insta.png";
import DiscordImage from "./images/discord.png";

function App() {
  return (
    <div>
      <div
        style={{
          height: 50,
          backgroundColor: "dodgerblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 19,
          marginBottom: 10,
          fontWeight: "620",
        }}
      >
        Popular Social Media Handles
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SocialCard
          title="Facebook"
          imageSrc={FacebookImage}
          description="Facebook is an online social media and social networking service owned by American technology giant Meta Platforms."
        />
        <SocialCard
          title="Instagram"
          imageSrc={InstagramImage}
          description="Instagram, LLC is a photo and video sharing social networking service owned by American company Meta Platforms. The app allows users to upload media that can be edited with filters, be organized by hashtags, and be associated with a location."
        />
        <SocialCard
          title="Twitter(X)"
          imageSrc={TwitterImage}
          description="Twitter, rebranding to X since July 2023, is an online social media and social networking service operated by the American company X Corp., the successor of Twitter, Inc."
        />
        <SocialCard
          title="Discord"
          imageSrc={DiscordImage}
          description="Discord is an instant messaging and VoIP social platform. Users have the ability to communicate with voice calls, video calls, text messaging, media and files in private chats or as part of communities called servers."
        />
      </div>
    </div>
  );
}

export default App;
