import laodingGif from '../assets/loading.gif';

const Loading = () => {
    return (
        <div className="h-screen fixed w-full top-0 left-0 flex items-center justify-center">
            <img src={laodingGif} alt="loading" className='w-16 mx-auto my-' />
        </div>
    );
}

export default Loading;