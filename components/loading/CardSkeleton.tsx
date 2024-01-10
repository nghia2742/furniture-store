const CardSkeleton = () => {
    return (
        <section className="card w-80 bg-stripes-sea shadow-xl mt-10">
            <figure className="skeleton w-full pt-5 min-h-60 rounded-b-none"></figure>
            <div className="card-body bg-base-200 rounded-b-2xl">
                <div className="skeleton h-6 w-1/2"></div>
                <div className="rating rating-sm">
                    <div className="skeleton h-6 w-1/3"></div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="skeleton h-6 w-full"></div>
                    <div className="skeleton h-6 w-full"></div>
                    <div className="skeleton h-6 w-1/3"></div>
                </div>
            </div>
        </section>
    );
};

export default CardSkeleton;
