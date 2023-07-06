import { useState } from "react";
import { v4 as uuid } from "uuid";
import rootReducer from "../../redux/rootReducer";
import { useDispatch } from "react-redux";
import { ADD_POST } from "../../redux/actionTypes";

const PostForm = ({ setShowForm }) => {
  const dispatch = useDispatch();
  const INITIAL_STATE = {
    id: uuid(),
    title: "",
    description: "",
    body: "",
    comments: [],
  };

  const [postData, setPostData] = useState(INITIAL_STATE);

  const addPost = (postData) =>
    dispatch({
      type: ADD_POST,
      payload: { ...postData },
    });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostData(INITIAL_STATE);
    setShowForm(false);
    console.log(postData);
    addPost(postData);
  };

  return (
    <div className="fixed z-10 right-4 top-4 ">
      <div className="w-96  p-4 mt-14 rounded-sm">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between mb-4">
            <h2 className="text-primary text-2xl">New Post</h2>
            <button onClick={() => setShowForm(false)} className="text-primary">
              X
            </button>
          </div>

          <label className="mb-2">Title</label>
          <input type="hidden" name="id" defaultValue={postData.id} />
          <input
            type="text"
            onChange={handleChange}
            name="title"
            value={postData.title}
            className="input input-bordered text-black border-primary/40 text-sm font-normal mb-4"
          />

          <label className="mb-2">Description</label>
          <input
            type="text"
            onChange={handleChange}
            name="description"
            value={postData.description}
            className="input input-bordered text-black border-primary/40 text-sm font-normal mb-4"
          />

          <label className="mb-2">Body</label>
          <textarea
            onChange={handleChange}
            name="body"
            value={postData.body}
            className="input input-bordered text-black border-primary/40 text-sm font-normal h-32"
          ></textarea>

          <button
            type="submit"
            className="mt-4 bg-primary p-1 rounded-sm text-neutral"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
