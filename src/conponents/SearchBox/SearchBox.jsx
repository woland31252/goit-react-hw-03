import css from '../SearchBox/SearchBox.module.css'
export default function SearchBox() {
    return (
        <div className={css.findContainer}>
            <label className={css.findLabel} htmlFor="">Find contacts by name</label>
            <input className={css.findInput} type="text" name="search"/>
        </div>
    )
}