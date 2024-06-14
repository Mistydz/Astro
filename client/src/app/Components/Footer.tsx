import { FOOTER_LINKS, SOCIALS } from '../Constants/index'
import Image from 'next/image'
import Link from 'next/link'
import SvgComponent from '../Constants/logo';

const Footer = () => {

  
  return (
    <footer className="flexCenter mt-24 mb-10" id='footer'>
      <div className="padding-container max-container flex w-full flex-col gap-5">
        
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>

          <div className="flex flex-col gap-5 w-full md:w-auto">     
          <Link href="/" className="flex justify-center">
          <SvgComponent alt="astro-logo" width={0} height={0} quality={100} style={{ width: '45px', height: 'auto' }}/>
        </Link>
        </div>

        
            {FOOTER_LINKS.map((columns,a) => (
              <FooterColumn key={a} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-500 text-center lg:text-left">
                  {columns.links.map((link) => (
                    <li key={link.text} className="hover:text-green-500">
                    <Link href={link.url} key={link.text}>
                      {link.text}
                    </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5 w-full md:w-auto">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30 justify-center lg:justify-left">
                
                  {SOCIALS.links.map((link) => (
                    <li key={link.src}>
                    <Link href={link.url} key={link.src} target='_blank'>
                      <Image src={link.src} alt="logo" width={32} height={32} quality={100} style={{ width: '32px', height: 'auto' }} className='transition ease-in-out delay-100 duration-200 hover:-translate-y-1'/>
                    </Link>
                                      </li>
                  ))}

                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-500 mb-5">Made by <Link className="text-green-500" href='https://steamcommunity.com/id/_misty/' target='_blank'>Misty</Link></p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5 w-full md:w-auto">
      <h3 className="bold-18 whitespace-nowrap text-center lg:text-left">{title}</h3>
      {children}
    </div>
  )
}

export default Footer