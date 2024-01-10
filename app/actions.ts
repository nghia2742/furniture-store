'use server';

export async function login(payload: { email: string, password: string }) {
    const res = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': ' application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        const errorData = await res.json();
         throw new Error(errorData.message);
         
    }

    const user = await res.json();
    return user;
}

export async function register(payload: { name: string, email: string, password: string }) {
    const res = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': ' application/json',
        },
        body: JSON.stringify(payload),
    });

    const data = await res.json();

    return {status: res.status, message: data.message};;
}

export async function getProductDetail(slug: string) {
    const res = await fetch(`http://localhost:5000/products/${slug}`, {
        next: { revalidate: 20 },
    });
    const product = res.json();
    return product;
}

export async function getProductByFilter(queryString: string) {
    const res = await fetch(`http://localhost:5000/products?${queryString}`, {
        next: { revalidate: 20 },
    });
    const products = res.json();

    return products;
}

export async function getProductByIds(productIds: string[]) {
    const res = await fetch(`http://localhost:5000/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            productIds: productIds,
        }),
    });
    const products = await res.json();

    return products;
}
