import React from 'react';
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";
import { useStyles } from "../../../styles/lib/buttons/button.styles";

const TribrButton = ({ text, type, href, loading, click, ...otherProps }) => {
  const classes = useStyles(otherProps);

  return (
    <Button
      type={type}
      href={href}
      onClick={click}
      className={classes.main}
    >
      {
        loading ? <CircularProgress /> : text
      }
    </Button>
  )
}

export default TribrButton;