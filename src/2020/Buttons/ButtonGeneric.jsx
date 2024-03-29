import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  constainer: ({ width, margin = 10 }) => ({
    display: 'flex',
    flexFlow: 'column',
    boxSizing: 'border-box',
    width: width,
    margin: margin,
  }),
  button: ({
    width,
    fontWeightSpan,
    minHeight,
    heightFocoDisable = false,
    backgroundButton = false,
    fontWeight = false,
  }) => {
    return {
      width: width,
      height: theme.sizeButton.height.main,
      minHeight: minHeight,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: backgroundButton ? theme.palette.buttonsColor.main : '',
      borderRadius: 6,
      fontSize: 24,
      lineHeight: "22px",
      color: "#fff",
      position: "relative",
      textDecoration: "none",
      //textTransform: "lowercase",
      boxSizing: 'border-box',

      '&:focus': {
        height: heightFocoDisable ? theme.sizeButton.height.main : theme.sizeButton.height.foco,
        background: theme.palette.buttonsColor.foco,
        borderRadius: 1,
        fontWeight: fontWeight ? 500 : 900,
        color: '#fff',
        border: 'none',
        background: theme.palette.primary.main,
        boxSizing: 'border-box',
        transition: 'box-shadow 0.15s ease-in',
        boxShadow: '0 0 0 5px rgba(71, 83, 107, 1)',
      },

      '& span': {
        fontWeight: fontWeightSpan,
        fontSize: 20,
        //textTransform: "lowercase",
      },
    }
  },
  nonFocusable: {
    background: 'silver!important',
    color: 'gray!important',
    cursor: 'no-drop!important',
  },
  description: {
    marginTop: 5,
    fontSize: '18px',
    textTransform: 'lowercase',
    textAlign: 'center',
  },
}))

const ButtonGeneric = ({
  backgroundButton = true,
  fontWeight = true,
  isFocusable = true,
  fontWeightSpan,
  children,
  title,
  width = 235 /* 329 */,
  heightFocoDisable,
  margin,
  onClick,
  description,
  snUp = null,
  snDown = null,
  snRight = null,
  snLeft = null,
  minHeight = null,
}) => {
  const classes = useStyles({
    width,
    minHeight,
    fontWeight,
    fontWeightSpan,
    heightFocoDisable,
    margin,
    isFocusable,
    backgroundButton,
  })

  return (
    <div className={classes.constainer}>
      <div
        tabIndex='0'
        className={`${isFocusable ? 'focusable' : classes.nonFocusable} ${classes.button}`}
        onClick={(e) => {
          e.preventDefault()
          onClick && onClick(e)
        }}
        data-sn-up={snUp}
        data-sn-down={snDown}
        data-sn-right={snRight}
        data-sn-left={snLeft}
      >
        <span>{title}</span>
        {children}
      </div>
      {description && <p className={classes.description}>{description}</p>}
    </div>
  )
}

export default React.memo(ButtonGeneric)
