import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  cardSearch: ({ width, height, borderRadius, notPlaceHolder }) => ({
    //background: "gray",
    backgroundImage: `url(${notPlaceHolder})`,
    backgroundSize: 80,
    backgroundPosition: '85px 40px',
    backgroundRepeat: 'no-repeat',
    border: 'none',
    //boxSizing: "border-box",
    height: height || 225,
    width: width || 290,
    margin: 7.8,
    borderRadius: borderRadius || 12,
    overflow: 'hidden',

    '&:focus': {
      backgroundPosition: '92px 40px',
      border: `4px solid white`,
      borderRadius: 12,
      /* width: width + width * 0.06,
      height: height + height * 0.08, */
      margin: 3.8,
    },
  }),
  logoChannel: ({ floatImage, notPlaceHolder }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    //background: "rgba(0,0,0,.5)",
    backgroundImage: `url(${floatImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 100,
    backgroundPosition: 'center',
  }),
  cardSearchImage: ({ bgSize, image }) => ({
    background: '#4E565C',
    backgroundImage: `url(${image})`,
    position: 'relative',
    overflow: 'hidden',
    backgroundSize: image ? bgSize || 'cover' : 80,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: 12,
    width: '100%',
    height: 160,
    //boxShadow: theme.shadowBox.generic,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  }),
  progressLine: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  cardSearchContent: () => ({
    padding: 10,
    textAlign: 'left',
    height: '100%',
    //background: theme.palette.optional.main,
  }),
  title: () => ({
    color: 'white',
    fontSize: 15,
  }),
  subTitle: ({ color }) => ({
    color: color || theme.palette.colorSearch.main,
    fontSize: 15,
  }),
}))

const CardSearch = ({
  id,
  clickHandler = () => {},
  focusHandler,
  notPlaceHolder = false,
  data,
  width,
  height,
  bgSize,
  borderRadius,
  floatImage,
  title = false,
  channelItem = true,
  image,
  children,
  subTitle,
  progressLine,
  color,
  isFocusable,
  scrollToTop = true,
  sendToPlay,
  isLast = false,
  isFirst = false,
  snUp = null,
  snDown = null,
  snLeft = null,
  focusHandlerDown = () => {},
}) => {
  const { t } = useTranslation()
  const classes = useStyles({
    width,
    height,
    bgSize,
    borderRadius,
    image,
    floatImage,
    color,
    notPlaceHolder: notPlaceHolder || t('asset.cards.default'),
  })

  // cargar imagen full en paralelo
  useEffect(() => {
    const imgObj = new Image()
    imgObj.src = data.imageFull
  }, [])

  return (
    <div
      id={id}
      tabIndex='0'
      className={`${isFocusable ? 'focusable' : ''} ${classes.cardSearch}`}
      onClick={(e) => {
        e.preventDefault()
        if (data.sendToPlay) {
          sendToPlay(data.group_id)
        } else if (clickHandler) {
          return clickHandler()
        }
      }}
      onFocus={(e) => {
        if (scrollToTop) {
          const item = e.currentTarget.parentNode.parentNode.parentNode
          item.scrollIntoView(true)
        }

        focusHandler(data)
      }}
      onKeyUp={(e) => {
        focusHandler(data)
      }}
      onKeyDown={(e) => {
        focusHandlerDown(e)
      }}
      data-sn-right={isLast ? '' : null}
      data-sn-left={isFirst ? (snLeft !== null ? snLeft : '@nav_down') : null}
      data-sn-up={snUp}
      data-sn-down={snDown}
    >
      <div className={`${classes.cardSearchImage}`}>
        {children}
        {channelItem && <div className={classes.logoChannel} />}
        <div className={classes.progressLine}>{progressLine}</div>
      </div>
      <div className={classes.cardSearchContent}>
        {title && (
          <Typography className={classes.title} variant='body1' noWrap>
            {title}
          </Typography>
        )}
        {subTitle && (
          <Typography className={classes.subTitle} variant='body2' noWrap>
            {subTitle}
          </Typography>
        )}
      </div>
    </div>
  )
}
export default React.memo(CardSearch)
