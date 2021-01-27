import { useRef, useState } from "react";
import { API } from "aws-amplify";
import { useHistory } from "react-router-dom";
import LoaderButton from "../../components/LoaderButton/LoaderButton";
import { onError } from "../../libs/errorLib";
import { s3Upload } from "../../libs/awsLib";
import config from "../../config";
import { Group, Form, Label, Input } from "./styles";

export default function NewRecipe() {
  const file = useRef(null);
  const history = useHistory();
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return content.length > 0;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${
          config.MAX_ATTACHMENT_SIZE / 1000000
        } MB.`
      );
      return;
    }

    setIsLoading(true);

    try {
      const attachment = file.current ? await s3Upload(file.current) : null;

      await createNote({ content, attachment });
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  function createNote(note) {
    return API.post("recipes", "/item", {
      body: note,
    });
  }

  return (
    <div className="NewNote">
      <Form onSubmit={handleSubmit}>
        <Group>
          <Input
            value={content}
            as="textarea"
            onChange={(e) => setContent(e.target.value)}
          />
        </Group>
        <Group>
          <Label>Attachment</Label>
          <Input onChange={handleFileChange} type="file" />
        </Group>
        <LoaderButton
          type="submit"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Create
        </LoaderButton>
      </Form>
    </div>
  );
}
