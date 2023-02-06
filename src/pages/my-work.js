import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoRemoteli from '@/images/remoteli-logo.jpg'
import logoToyota from '@/images/toyota-logo.jpg'
import logoLbc from '@/images/lbc-logo.jpg'
import logoCarryLift from '@/images/carrylift-group-logo.jpg'
import logoCarcraft from '@/images/carcraft-logo.jpg'
import logoTheGuardian from '@/images/the-guardian-logo.jpg'
import logoBuildNMaster from '@/images/build-and-master-logo.jpg'

const projects = [
  {
    name: 'Remoteli',
    description:
      'Africa’s fast-growing tech-led outsourcing company, with a focus on the African market.',
    link: { href: 'https://remoteli.com', label: 'remoteli.com' },
    role: 'Founder & Chief Executive Officer',
    logo: logoRemoteli,
  },
  {
    name: 'The Guardian',
    description:
      'The world’s largest news publisher, with a focus on the African market.',
    link: { href: 'https://theguardian.com', label: 'theguardian.com' },
    role: 'Account Director',
    logo: logoTheGuardian,
  },
  {
    name: 'Build and Master',
    description:
      'The world’s largest tech training company, with a focus on the African market.',
    link: { href: 'https://buildandmaster.com', label: 'buildandmaster.com' },
    role: 'Founder & Executive Director',
    logo: logoBuildNMaster,
  },
  {
    name: 'CarryLift Group',
    description:
      'The world’s largest logistics company, with a focus on the African market.',
    link: { href: 'https://carryliftgroup.com', label: 'carryliftgroup.com' },
    role: 'Area Manager',
    logo: logoCarryLift,
  },
  {
    name: 'Toyota Material Handling UK',
    description:
      'The world’s largest logistics company, with a focus on the African market.',
    link: {
      href: 'https://toyota-forklifts.co.uk',
      label: 'toyota-forklifts.co.uk',
    },
    role: 'Area Manager',
    logo: logoToyota,
  },
  {
    name: 'Carcraft',
    description:
      'The world’s largest logistics company, with a focus on the African market.',
    link: { href: 'https://carcraft.co.uk', label: 'carcraft.co.uk' },
    role: 'Business Development Manager',
    logo: logoCarcraft,
  },
  {
    name: 'London Business Conferences Group',
    description:
      'The world’s largest logistics company, with a focus on the African market.',
    link: { href: 'https://lbcg.com', label: 'lbcg.com' },
    role: 'Commercial Manager',
    logo: logoLbc,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>My Work - Samuel Brooksworth</title>
        <meta
          name="description"
          content="Things I’ve worked on trying to make the world a better place."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve worked on trying to make the world a better place."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. I’ve worked on them with some amazing people and I’m so grateful for the opportunity to have been a part of them."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>
                  {project.name} <span className="text-zinc-400">/</span>{' '}
                  <span className="text-xs text-zinc-400">{project.role}</span>
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
