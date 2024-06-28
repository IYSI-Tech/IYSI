import LazyLoad from 'react-lazy-load'

const Lazyloading = (item) => {
  return (
    <LazyLoad>
        <img src={item.src} alt={item.alt} className={`${item.className} lazyloading`}/>
    </LazyLoad>
  )
}

export default Lazyloading