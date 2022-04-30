import './Card.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const Card = ({
  title,
  description,
  liked,
  likePost,
  deletePost

}) => {

  const heartFill = liked ? 'crimson' : 'black'

  return (
    <div className='post'>
      <div className='postContent'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <button onClick={likePost}>
            <FavoriteIcon style={{fill: heartFill}} />
          </button>
        </div>
      </div>
      <button className='delete' onClick={deletePost}>
        <DeleteForeverIcon />
      </button>
    </div>
    )
}
