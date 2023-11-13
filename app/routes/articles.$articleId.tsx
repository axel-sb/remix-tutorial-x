import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Form, useFetcher, useLoaderData } from '@remix-run/react'
import type { FunctionComponent } from 'react'
import type { ArticleRecord } from '../data'
import { getArticle, updateArticle } from '../data'
import invariant from 'tiny-invariant'

export const action = async ({ params, request }: ActionFunctionArgs) => {
  invariant(params.articleId, 'Missing articleId param')
  const formData = await request.formData()
  return updateArticle(params.articleId, {
    favorite: formData.get('favorite') === 'true',
  })
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.articleId, 'Missing articleId param')
  const article = await getArticle(params.articleId)
  if (!article) {
    throw new Response('Not Found', { status: 404 })
  }
  return json({ article })
}

export default function Article() {
  const { article } = useLoaderData<typeof loader>()

  return (
    <div id="article">
      <div>
        {article.articleImage ? (
          <img
            id="larger-image"
            alt={`${article.author} ${article.title} articleImage`}
            key={article.articleImage}
            src={article.articleImage}
          />
        ) : null}
        {article.author || article.title ? (
          <>
            <header>
              <div>{article.author}</div>
              <Favorite article={article} />
              <h1> {article.title} </h1>
            </header>
          </>
        ) : (
          <i>No Name</i>
        )}{' '}
        {article.articleContent ? <p>{article.articleContent}</p> : null}
        {article.notes ? <p>{article.notes}</p> : null}
        <div className="edit-wrapper">
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>

          <Form
            action="destroy"
            method="post"
            onSubmit={(event) => {
              const response = confirm(
                'Please confirm you want to delete this record.'
              )
              if (!response) {
                event.preventDefault()
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  )
}

const Favorite: FunctionComponent<{
  article: Pick<ArticleRecord, 'favorite'>
}> = ({ article }) => {
  const fetcher = useFetcher()
  const favorite = article.favorite

  return (
    <fetcher.Form method="post">
      <button
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        name="favorite"
        value={favorite ? 'false' : 'true'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </fetcher.Form>
  )
}
