import React, { useContext, useEffect, useRef, useState } from 'react'
import './MoreMenu.scss'
import { ReactComponent as MoreVertIcon } from '../../assets/svg/more_vert-24px.svg'
import { ReactComponent as MoreVertDarkIcon } from '../../assets/svg/more_vert-dark-24px.svg'
import { ReactComponent as FavoriteBorderIcon } from '../../assets/svg/favorite_border-24px.svg'
import { ReactComponent as FavoriteIcon } from '../../assets/svg/favorite-24px.svg'
import { ReactComponent as FavoriteDarkIcon } from '../../assets/svg/favorite-dark-24px.svg'
import { ReactComponent as DeleteIcon } from '../../assets/svg/delete-24px.svg'
import { ReactComponent as DeleteDarkIcon } from '../../assets/svg/delete-dark-24px.svg'
import Themes from '../../models/themes'
import { ThemeContext } from '../../App'

export const MoreMenu = () => {
  const theme = useContext(ThemeContext)

  const containerRef = useRef(null)

  const [isShow, setIsShow] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const onMore = (event: any) => {
    event.stopPropagation()
    setIsShow(!isShow)
    console.log(isShow)
  }

  const toggleFavorite = (event: any) => {
    event.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  const onRemove = (event: any) => {
    event.stopPropagation()
  }

  const handleClickOutside = (event: any) => {
    if (containerRef && containerRef.current &&
      // @ts-ignore
      !containerRef.current.contains(event.target)) {
      setIsShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return (
    <>
      {
        theme === Themes.LIGHT
          ? <MoreVertIcon onClick={onMore}/>
          : <MoreVertDarkIcon onClick={onMore}/>
      }
      {
        isShow
          ? <div ref={containerRef}>
            <div className={`more-menu ${theme === Themes.DARK ? 'dark' : null}`}>
              <div className="more-menu__item" onClick={toggleFavorite}>
                {
                  isFavorite
                    ? theme === Themes.LIGHT ? <FavoriteIcon/> : <FavoriteDarkIcon/>
                    : theme === Themes.LIGHT ? <FavoriteBorderIcon/> : <FavoriteDarkIcon/>
                }
                <span>Add to Favourites</span>
              </div>
              <div className="more-menu__item" onClick={onRemove}>
                {
                  theme === Themes.LIGHT
                    ? <DeleteIcon/>
                    : <DeleteDarkIcon/>
                }
                <span>Remove</span>
              </div>
            </div>
          </div>
          : null
      }
    </>
  )
}
