import Skeleton from 'react-loading-skeleton'

const ProductCardShimmerEffect = () => {


    return (
        <>
            <div className="animate-pulse px-4">
                <div className="h-52 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-4/5 mt-4"></div>
                <div className="h-6 bg-gray-300 rounded w-3/5 mt-4"></div>
                <div className="h-4 bg-gray-300 rounded w-2/5 mt-4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3 mt-4"></div>
                <div className='grid grid-cols-2 gap-3'>
                    <div className="h-8 bg-gray-300 rounded w-full mt-4"></div>
                    <div className="h-8 bg-gray-300 rounded w-full mt-4"></div>
                </div>
            </div >

        </>
    );
};

export default ProductCardShimmerEffect;
