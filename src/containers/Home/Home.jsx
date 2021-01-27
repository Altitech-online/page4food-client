import { useState, useEffect } from "react";
import { API, Storage } from "aws-amplify";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { useAppContext } from "../../libs/contextLib";
import { onError } from "../../libs/errorLib";
import { useStyles } from "../../libs/hooksLib";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }

      try {
        const notes = await loadNotes();
        setNotes(notes);
        const mapUrls = notes.map(async (note, index) => {
          notes[index].URL = note.attachment ?
            await Storage.vault.get(note.attachment) : null
        });
        await Promise.all(mapUrls);
        
      } catch (e) {
        onError(e);
      }

      setIsLoading(false);
    }

    onLoad();
  }, [isAuthenticated]);

  const loadNotes = () => {
    return API.get("recipes", "/myitems");
  };

  const renderNotesList = (notes) => (
    <Container>
      <Link to="/recipes/new">
        <div className={classes.create}>
          <BsPencilSquare size={17} />
          <Typography component="h3" variant="h5">
            Create a new stuff
          </Typography>
        </div>
      </Link>
      <GridList cellHeight={200} >
        {notes.map(({ recipeId, content, createdAt, URL }) => (
          <Link key={recipeId} to={`/recipes/${recipeId}`}>
            <GridListTile cols={2}>
              <GridListTileBar title={content.trim().split("\n")[0]} titlePosition="top">
              
    
              </GridListTileBar>
              {URL && (
                <img src={URL} alt={URL} height={400} width={400}/>
              )}
            </GridListTile>
          </Link>
        ))}
      </GridList>
    </Container>
  );

  const renderLander = () => {
    return (
      <Container>
        <Typography component="h1" variant="h5">
          Random serverless app
        </Typography>
        <Typography component="h3" variant="h5">
          Will do something eventually
        </Typography>
      </Container>
    );
  };

  const renderNotes = () => {
    return (
      <Container>
        <Typography component="h1" variant="h5">
          Your stuff
        </Typography>
        <div>{!isLoading && renderNotesList(notes)}</div>
      </Container>
    );
  };

  return (
    <Container className={classes.content}>
      {isAuthenticated ? renderNotes() : renderLander()}
    </Container>
  );
}
