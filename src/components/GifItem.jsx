

export const GifItem = ({ title, urlImg, id }) => {
    //console.log(title, urlImg);
  return (
    <div className="card">
        <img src={ urlImg } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
