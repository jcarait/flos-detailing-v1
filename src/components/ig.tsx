import InstagramEmbed from "react-instagram-embed";

export default function Ig() {
  return (
    <InstagramEmbed
      url="https://www.instagram.com/p/Zw9o4/"
      clientAccessToken="2175654982609336|3d310804745a19f41aa693e99b082b17"
      maxWidth={320}
      hideCaption={true}
      containerTagName="div"
      protocol=""
      injectScript
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
    />
  );
}
