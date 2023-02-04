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
import logoRemoteli from '@/images/remoteli-logo.jpg'
import logoToyota from '@/images/toyota-logo.jpg'
import logoLbc from '@/images/lbc-logo.jpg'
import logoCarryLift from '@/images/carrylift-group-logo.jpg'
import logoCarcraft from '@/images/carcraft-logo.jpg'
import logoTheGuardian from '@/images/the-guardian-logo.jpg'
import logoBuildNMaster from '@/images/build-and-master-logo.jpg'
import { Button } from '@/components/Button'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
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

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Remoteli',
      title: 'Founder & Chief Executive Officer',
      logo: logoRemoteli,
      start: 'Sep 2020',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'The Guardian',
      title: 'Account Director',
      logo: logoTheGuardian,
      start: 'Feb 2019',
      end: 'Dec 2020',
    },
    {
      company: 'Build and Master',
      title: 'Founder & Executive Director',
      logo: logoBuildNMaster,
      start: 'Aug 2017',
      end: 'Sep 2020',
    },
    {
      company: 'CarryLift Group',
      title: 'Area Manager',
      logo: logoCarryLift,
      start: 'Aug 2016',
      end: 'Aug 2017',
    },
    {
      company: 'Toyota Material Handling UK',
      title: 'Area Manager',
      logo: logoToyota,
      start: 'Aug 2015',
      end: 'Jun 2016',
    },
    {
      company: 'Carcraft',
      title: 'Business Development Manager',
      logo: logoCarcraft,
      start: 'Feb 2014',
      end: 'Apr 2015',
    },
    {
      company: 'London Business Conferences Group',
      title: 'Commercial Manager',
      logo: logoLbc,
      start: 'Jul 2013',
      end: 'Dec 2013',
    },
  ]

  return (
    <div className="p-6 border rounded-2xl border-zinc-100 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="flex-none w-6 h-6" />
        <span className="ml-3">My Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="object-cover  h-7 w-7" />
            </div>
            <dl className="flex flex-wrap flex-auto gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>About Samuel Brooksworth</title>
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
                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Samuel Brooksworth. <br /> British-Ghanaian, businessman
              and entrepreneur.
            </h1>
            <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <p>
                Born in 1988 in Lewisham, South London, and raised in Bury,
                Greater Manchester. I am an identical twin and the oldest of
                five siblings, and I attended Sheffield Hallam University where
                I earned a Bachelor of Science in Information Technology and
                Business Studies.
              </p>
              <p>
                I first came to public attention in 2016 as a contestant on BBC
                One&apos;s &quot;The Apprentice,&quot; where I showed my skills
                in project management and sales, leading my team to victory in
                one of the tasks and reaching week seven before being
                eliminated.
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
                &quot;Professional of the Year&quot; category and the Screen
                Nation Film & TV Award in the &quot;Favourite Reality TV
                Talent&quot; category. I am passionate about helping
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
                className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
              >
                info@samuelbrooksworth.com
              </SocialLink>
            </ul>
            <div className="mt-8">
              <Resume />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
