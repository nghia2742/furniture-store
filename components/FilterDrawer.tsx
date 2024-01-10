import React from 'react';

function FilterDrawer() {
    return (
        <aside className="w-[320px] hidden">
            <div className="p-4 flex justify-between">
                <h2 className="text-xl">Apply filter</h2>
                <button className="btn btn-sm btn-accent">Apply</button>
            </div>
        </aside>
    );
}

export default FilterDrawer;
