const TableCartSkeleton = () => {
    const rows = [];
    const row = (id: number) => {
        return (
            <tr key={id} className="min-h-20">
                <th>
                    <div className="skeleton h-8 w-8 rounded-lg"></div>
                </th>
                <td>
                    <div className="skeleton h-8 w-16 rounded-lg"></div>
                </td>
                <td>
                    <div className="skeleton h-8 w-16 rounded-lg"></div>
                </td>
                <td>
                    <div className="skeleton h-8 w-16 rounded-lg"></div>
                </td>
                <td>
                    <div className="skeleton h-8 w-16 rounded-lg"></div>
                </td>
                <td>
                    <div className="skeleton h-8 w-16 rounded-lg"></div>
                </td>
                <td>
                    <div className="skeleton h-8 w-24 rounded-lg"></div>
                </td>
            </tr>
        );
    };
    for (let i = 0; i < 3; i++) {
        rows.push(row(i));
    }

    return (
        <section className="p-2 md:p-8 h-fit min-h-screen">
            <h1 className="text-xl md:text-4xl py-4 text-center mb-10 divider divider-warning">
                Your wishlist
            </h1>
            <div className="overflow-x-auto px-10 ">
                <table className="table table-lg mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        </section>
    );
};

export default TableCartSkeleton;
