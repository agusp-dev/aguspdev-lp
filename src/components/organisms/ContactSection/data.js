import {
  FaMobileAlt,
  FaWhatsapp,
  FaRegEnvelope,
  FaLinkedinIn,
  FaGithub
} from 'react-icons/fa'

export const DATA = [{
  id: 'PHONE',
  title: 'Phone',
  href: 'tel:33425235325',
  icon: FaMobileAlt,
}, {
  id: 'WHATSAPP',
  title: 'Whatsapp',
  href: 'https://api.whatsapp.com/send?phone=5493515572479',
  icon: FaWhatsapp,
}, {
  id: 'EMAIL',
  title: 'Email',
  href: 'mailto:perezp.agustin@gmail.com',
  icon: FaRegEnvelope,
}, {
  id: 'LINKEDIN',
  title: 'Linkedin',
  href: 'www.linkedin.com/in/agusp-dev',
  icon: FaLinkedinIn,
}, {
  id: 'GITHUB',
  title: 'Github',
  href: 'https://github.com/agusp-dev',
  icon: FaGithub,
}]
