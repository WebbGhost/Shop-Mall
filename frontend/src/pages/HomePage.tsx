import React from 'react';
import { Products } from '../data/Products';
import { Product } from '../types/Product';
import { Container } from '../components';

function HomePage() {
    return (
        <Container>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 items-center  mt-3">
                {Products?.map((product: Product) => (
                    <div className="items-center" key={product.slug}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-100 h-100"
                        />
                        <p>{product.price}</p>
                        <p>{product.name}</p>
                    </div>
                ))}
            </ul>
        </Container>
    );
}
export default HomePage;
