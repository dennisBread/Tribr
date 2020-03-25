import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  welcome: {
    marginTop: '10px',
    borderColor: "red",
    fontSize: 50,
    display: "flex",
    justifyContent: "center"
  },
  text: {
    height: "max-content",
    fontSize: 25,
    display: "flex",
    justifyContent: "center"
  },
  h4: {
    width: "80vw",
    color: "gray",
    textAlign: "justify"
  }
}));
