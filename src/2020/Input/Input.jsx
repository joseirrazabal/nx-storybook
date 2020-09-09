import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const lupa = require('../Icons/Nav/Search.svg')

const useStyles = makeStyles(theme => ({
  inputContainer: {
    width: '100%'
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 48,
    backgroundColor: '#212224',
    color: '#fff',
    borderRadius: '4px',
    paddingLeft: '12px',
    fontStyle: 'normal',
    textDecoration: 'none',

    '&:focus': {
      color: '#fff',
      boxShadow: 'none!important',
      background: theme.palette.primary.main,
      fontWeight: '500'
    }
  },
  placeholder: {
    borderBottom: 'none',
    display: 'inline-block',
    height: '20px',
    overflowX: 'hidden',
    fontWeight: '300',
    overflowY: 'hidden',
    padding: '4px 0',
    whiteSpace: 'nowrap',
    textTransform: 'lowercase'
  },
  nonFocusable: {
    background: 'silver',
    color: 'gray',
    cursor: 'no-drop'
  },
  lupa: {
    height: 40,
    width: 48,
    backgroundImage: `url(${lupa})`,
    backgroundSize: 30,
    backgroundPosition: '0px center',
    backgroundRepeat: 'no-repeat'
  },
  textInput: {
    display: 'inline-block',
    float: 'left',
    fontSize: '18px',
    lineHeight: '1'
  },
  cursor: {
    background: '#fff',
    display: 'inline-block',
    float: 'left',
    height: '20px',
    width: '2px',

    'animation-name': 'toBlink',
    'animation-duration': '.9s',
    'animation-timing-function': 'linear',
    'animation-iteration-count': 'infinite'
  }
}))

const Input = ({
  name,
  currentFocus,
  value = '',
  icon = false,
  isFocusable = true,
  placeholder,
  type = 'text',
  onClick = () => {}
}) => {
  const classes = useStyles()
  const focused = currentFocus === name

  // espacio para el cursor si has espacios al final del texto
  const wsRegex = /^\s+|\s+$/
  const sinSpacio = String(value).match(wsRegex)
  const totalSpace = sinSpacio && sinSpacio[0].length

  const getText = text => {
    return type === 'text' ? text : text.replace(/[\s\S]/g, '*')
  }

  return (
    <div className={`${classes.inputContainer}`}>
      <div
        tabIndex={0}
        className={`${classes.input} ${
          isFocusable ? 'focusable' : /* "nonfocusable" */ classes.nonFocusable
        }`}
        onClick={e => onClick({ name })}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {icon ? <div className={classes.lupa} /> : null}
          {value || focused ? (
            <div className={classes.textInput}>{getText(value)}</div>
          ) : (
            <div className={classes.placeholder}>{placeholder}</div>
          )}

          {focused && (
            <div
              className={classes.cursor}
              style={{ marginLeft: type === 'text' ? totalSpace * 5 : 0 }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default React.memo(Input)
