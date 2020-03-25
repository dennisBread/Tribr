import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  main: {
    background: props => props.bngcolor ? props.bngcolor : theme.palette.primary.main,
    color: props => props.txtcolor ? props.txtcolor : '#FEFEFE',

    '&:hover': {
      opacity: 0.7,
      background: props => props.bngcolor ? props.bngcolor : theme.palette.primary.main,
      color: props => props.txtcolor ? props.txtcolor : '#FEFEFE',
    },

    '& .MuiCircularProgress-indeterminate': {
      height: '24px !important',
      width: '24px !important',

      '& svg': {
        color: props => props.txtcolor ? props.txtcolor : '#101f60'
      }
    }
  }
}));