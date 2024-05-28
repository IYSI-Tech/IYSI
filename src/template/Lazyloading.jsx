import LazyLoad from 'react-lazy-load'

const Lazyloading = ({className, src, alt}) => {
  return (
    <LazyLoad>
        <img src={src} alt={alt} className={className}/>
    </LazyLoad>
  )
}

export default Lazyloading