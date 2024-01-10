'use client'
 
import CardDetail from '@/components/shop/CardDetail';
import Link from 'next/link';

export default function Page({ params }: { params: { slug: string } }) {
    const nameProduct = decodeURI(params.slug);
    return (
        <section>
            <div className="p-5 text-sm breadcrumbs">
                <ul>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/shop'}>Shop</Link>
                    </li>
                    <li ><span className='text-slate-400 cursor-default'>Product</span></li>
                    <li ><span className='text-slate-400 cursor-default'>{nameProduct}</span></li>
                </ul>
            </div>
            <CardDetail slug={params.slug} />
        </section>
    );
}
