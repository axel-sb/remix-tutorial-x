import { json, redirect } from '@remix-run/node'

import {
  Form,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
  useSubmit,
} from '@remix-run/react'

import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node'

import appStylesHref from './app.css'

import { createEmptyContact, getContacts } from './data'

import { useEffect } from 'react'

export const action = async () => {
  const contact = await createEmptyContact()
  return redirect(`/contacts/${contact.id}/edit`)
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: appStylesHref },
]

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url)
  const q = url.searchParams.get('q')
  const contacts = await getContacts(q)
  return json({ contacts, q })
}

export default function App() {
  const { contacts, q } = useLoaderData<typeof loader>()
  const navigation = useNavigation()
  const submit = useSubmit()
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q')

  useEffect(() => {
    const searchField = document.getElementById('q')
    if (searchField instanceof HTMLInputElement) {
      searchField.value = q || ''
    }
  }, [q])

  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body>
        <div id="sidebar" className="subject">
          <h1>Juni 2023</h1>
          <div>
            <Form
              id="search-form"
              onChange={(event) => {
                const isFirstSearch = q === null
                submit(event.currentTarget, {
                  replace: !isFirstSearch,
                })
              }}
              role="search"
            >
              <input
                id="q"
                aria-label="Search contacts"
                className={searching ? 'loading' : ''}
                defaultValue={q || ''}
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={!searching} />
            </Form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
            {contacts.length ? (
              <ul className="horizontal-media-scroller">
                {contacts.map((contact) => (
                  <li key={contact.page}>
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isActive ? 'active' : isPending ? 'pending' : ''
                      }
                      to={`contacts/${contact.page}`}
                    >
                      {contact.page ? (
                        <img
                          alt={`${contact.first} ${contact.last} avatar`}
                          key={contact.avatar}
                          src={contact.avatar}
                        />
                      ) : (
                        <i>No Name</i>
                      )}{' '}
                      {contact.favorite ? <span>★</span> : null}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No contacts</i>
              </p>
            )}
          </nav>
        </div>
        <div
          className={
            navigation.state === 'loading' && !searching ? 'loading' : ''
          }
          id="detail" className="subject2"
        >
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
