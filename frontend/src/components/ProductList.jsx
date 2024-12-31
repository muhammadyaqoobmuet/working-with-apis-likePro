
import '../App.css';

const ProductList = ({ products, loading, error }) => {
    return (
        <main>
            {/* Conditional Rendering for States */}
            {loading && <p>Loading products...</p>}
            {error && <p className="error">Error: {error}</p>}
            {!loading && !error && (
                <p>We have {products?.length || 0} products available!</p>
            )}

            {/* Example of Product List */}
            {products?.length > 0 && (
                <div className="product-grid">
                    {products.map((product, index) => (
                        <div key={index} className="product-card">
                            <img
                                src={product.image || 'https://via.placeholder.com/150'}
                                alt={product.name || `Product ${index + 1}`}
                                className="product-image"
                            />
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">${product.price.toFixed(2)}</p>
                            <p className="product-rating">⭐ {product.rating}</p>
                            <button className="buy-now-button">Buy Now</button>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
};

export default ProductList;
