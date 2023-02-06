import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'

let articles = [
  {
    title: 'Now it’s time for exports to rise to the top of the agenda',
    description:
      'Samuel Brooksworth, a former contestant on The Apprentice, founded Remoteli last year. He said the pandemic gave him the boldness to go out and do it. He has offices in Accra and London',
    href: 'https://www.thetimes.co.uk/article/now-its-time-for-exports-to-rise-to-the-top-of-the-agenda-7vdkhp9gm',

    source: 'The Times',
  },
  {
    title:
      'My time on The Apprentice taught me a lot about black men in business',
    description:
      'A lack of recognised black businessmen was one of the reasons I applied to BBC One’s The Apprentice in 2016, for which I was selected as a candidate (I was then using an old family surname, Boateng). Since Tim Campbell won the first ever series in 2005, only one other black man apart from me has reached the seventh week.',
    href: 'https://www.theguardian.com/commentisfree/2019/nov/01/the-apprentice-black-men-business-senior-positions-discrimination',
    source: 'The Guardian',
  },
  {
    title: 'She quit her job as a NYC lawyer to move to Ghana',
    description:
      'Samuel Brooksworth, a former contestant on the UK’s version of reality TV show “The Apprentice,” seized on the turmoil of 2020 to move from the UK to Ghana to set up a remote skills business Remoteli.',
    href: 'https://edition.cnn.com/travel/article/ghana-diaspora-return-africa-cmd/index.html',
    source: 'CNN',
  },

  {
    title: 'Focus on solving problems, Remoteli CEO advises start-ups',
    description:
      'Founder and CEO of Africa’s fast-growing tech-led outsourcing company Remoteli Limited, Samuel Brooksworth, has urged start-up business owners to concentrate on solving problems that impact people rather than financial gains.',
    href: 'https://thebftonline.com/2022/01/25/focus-on-solving-problems-remoteli-ceo-advises-start-ups/',
    source: 'The BFT',
  },
  {
    title: 'Making bold moves in life & business with Samuel Brooksworth',
    description:
      'Sometimes,the journey towards our God-given vision might not be as smooth and simple as we would have expected. But the lessons we learn along the way can benefit us and others if we allow God to reshape our perspective .',
    href: 'https://ascribeculture.com/making-bold-moves-in-life-business-with-samuel-brooksworth/',
    source: 'Ascribe Culture',
  },
]

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={article.href}>{article.title}</Card.Title>
        <Card.Eyebrow className="md:hidden" decorate>
          {article.source}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow className="mt-1 hidden md:block">
        {article.source}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex() {
  return (
    <>
      <Head>
        <title>Articles - Samuel Brooksworth</title>
        <meta
          name="description"
          content="All articles on the internet I or my work has been featured in."
        />
      </Head>
      <SimpleLayout
        title="The internet documents my work."
        intro="All articles on the internet I or my work has been featured in."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
