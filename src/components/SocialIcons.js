import { FaTwitter, FaFacebook, FaLinkedin ,FaGithub} from 'react-icons/fa'
import { StyledSocialIcons } from './styled/SocialIcons.styled'

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href='https://twitter.com/AhmedTajalsir12' alt='Ahmed Tajalsir'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com/profile.php?id=100063544999053' alt='Ahmed Tajalsir'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/ahmedtajalsir/' alt='Ahmed Tajalsir'>
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href='https://github.com/AhmedTajalsir' alt='Ahmed Tajalsir'>
          <FaGithub />
        </a>
      </li>
    </StyledSocialIcons>
  )
}