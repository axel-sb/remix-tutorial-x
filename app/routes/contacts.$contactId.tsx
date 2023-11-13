import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
} from "@remix-run/node";
import { json } from '@remix-run/node'
import { Form, useFetcher, useLoaderData } from '@remix-run/react'
import type { FunctionComponent } from 'react'
import type { ContactRecord } from '../data'
import { getContact, updateContact } from "../data";
import invariant from 'tiny-invariant'

export const action = async ({
  params,
  request,
}: ActionFunctionArgs) => {
  invariant(params.contactId, "Missing contactId param");
  const formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.contactId, 'Missing contactId param')
  const contact = await getContact(params.contactId)
  if (!contact) {
    throw new Response('Not Found', { status: 404 })
  }
  return json({ contact })
}

export default function Contact() {
  const { contact } = useLoaderData<typeof loader>()


  return (
    <div id="contact">
      <div>
        {contact.avatar ? (
          <img
            alt={`${contact.first} ${contact.last} avatar`}
            key={contact.avatar}
            src={contact.avatar}
          />
        ) : null}
        {contact.first || contact.last ? (
          <>
            <header>
              <div>{contact.first}</div>
              <h1> {contact.last} </h1>
              <Favorite contact={contact} />
            </header>
          </>
        ) : (
          <i>No Name</i>
        )}{' '}
        {contact.twitter ? <p>{contact.twitter}</p> : null}
        {contact.notes ? <p>{contact.notes}</p> : null}
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
  contact: Pick<ContactRecord, 'favorite'>
}> = ({ contact }) => {
  const fetcher = useFetcher()  
  const favorite = contact.favorite

  return (
    <fetcher.Form method="post">
      <button
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
        name="favorite"
        value={favorite ? "false" : "true"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}