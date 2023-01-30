import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/samuel-brooksworth-1.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-stone-500  "
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-stone-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>About - Samuel Brooksworth</title>
        <meta name="description" content="I'm Samuel Brooksworth, from Ghana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover "
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800  sm:text-5xl">
              I&apos;m Samuel Brooksworth. <br /> British-Ghanaian, businessman
              and entrepreneur.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 ">
              <p>
                I was born in 1988 in Lewisham, South London, and raised in
                Bury, Greater Manchester. I am an identical twin and the oldest
                of five siblings, and I attended Sheffield Hallam University
                where I earned a Bachelor of Science in Information Technology
                and Business Studies.
              </p>
              <p>
                I first came to public attention in 2016 as a contestant on BBC
                One&apos;s &quo;The Apprentice,&quo; where I showed my skills in
                project management and sales, leading my team to victory in one
                of the tasks and reaching week seven before being eliminated.
              </p>
              <p>
                After my time on the show, I founded the Startup Accelerator
                Build and Master, where I educated and mentored entrepreneurs to
                grow and scale their businesses. In 2020, I founded Remoteli, an
                on-demand staffing organization that helps businesses globally
                build remote workforces. Remoteli offers a wide range of
                services including Business Assistance, Customer Service
                Support, Social Media Management, Business Development, and
                Software Development. Our goal is to make remote work easier for
                businesses and provide them with the support they need to
                succeed.
              </p>
              <p>
                In 2022, Remoteli was named Global Startup of the Year at the
                Startup Awards National Series, and I was also nominated for
                several awards, including the Guba Award in the
                &quo;Professional of the Year&quo; category and the Screen
                Nation Film & TV Award in the &quo;Favourite Reality TV
                Talent&quo; category. I am passionate about helping
                entrepreneurs achieve their business goals, and I am dedicated
                to providing the support and resources they need to succeed.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/SBrooksworth"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/samuelbrooksworth/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/samuelbrooksworth/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:info@samuelbrooksworth.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 "
              >
                info@samuelbrooksworth.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
