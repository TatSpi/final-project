import './AddPostform.css';
import CancelIcon from '@mui/icons-material/Cancel';

export const AddPostform = ({ handleAddFormHide }) => {
    return (
        <>
        <form action='' className='addPostform'>
            <button className='hideBtn' onClick={handleAddFormHide}><CancelIcon /></button>
            <h2>Создание поста</h2>
          <div>
            <input type="text" name="postTitle" placeholder='Заголовок' />
          </div>
          <div>
            <textarea name="postDescription" placeholder='Описание' />
          </div>
          <div>
            <button className='addBtn' onClick={handleAddFormHide} type='button'>Добавить пост</button>
          </div>
        </form>
        <div className='overlay'></div>
        </>
    )
}