/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        Subscribe to All About Affordable NFTs on <br/>
        <a href="https://podcasts.apple.com/us/podcast/all-about-affordable-nfts/id1586490838">Apple Podcasts</a> | <a href="https://open.spotify.com/show/4JPeNkNEtJc2rAzdCMlRWl?si=1b961d00601240fa">Spotify</a> | <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL0FmZm9yZGFibGVORlQvZmVlZC54bWw?sa=X&ved=0CAMQ4aUDahcKEwiQ0Y7lo7rzAhUAAAAAHQAAAAAQAQ&hl=en">Google Podcasts</a>

      </p>
    </div>
  </footer>
)

export default Footer
