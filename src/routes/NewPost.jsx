import { Form } from "react-router-dom";
import { create } from "../Post";

export async function submitPost(request) {
  const data = await request.request.formData();
  console.log(data);
  const post = {
    title: data.get("title"),
    content: data.get("content"),
  };

  await create(post);
  alert("New post created successfully");
}

export default function NewPost() {
  return (
    <>
      <h1 class='title'>
        Create New Post
        <br />
        <span class='subtitle'></span>
      </h1>

      <Form method='post'>
        <label for='fname'>Post Title</label>
        <input
          type='text'
          id='title'
          name='title'
          placeholder='Title of the post'
        />

        <label for='content'>Content</label>
        <textarea
          type='text'
          id='content'
          name='content'
          placeholder=''></textarea>

        <input type='submit' value='Submit' />
      </Form>
    </>
  );
}