import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  Typography: ({
    fontSize = 30,
    fontWeight = 500,
    color = 'white',
    fontStyle = 'normal',
    margin = 0,
    textAlign = 'center',
  }) => ({
    width: '100%',
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: color,
    margin: margin,
    textAlign: textAlign,
    fontStyle: fontStyle,
  }),
}))

const Typography = ({
  children,
  variant = 'h1',
  fontSize = 30,
  fontWeight = 500,
  color = 'white',
  fontStyle = 'normal',
  margin = 0,
  textAlign = 'center',
}) => {
  const classes = useStyles({
    fontSize,
    fontWeight,
    color,
    fontStyle,
    margin,
    textAlign,
  })

  return React.createElement(variant, { className: classes.Typography }, children)
}

export default Typography
