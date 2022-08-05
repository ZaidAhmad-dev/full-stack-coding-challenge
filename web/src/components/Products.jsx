import { useState, useEffect } from 'react';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
  import storage from '../../config';
import { v4 } from "uuid";


const Products = () => {
  
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const [productData, setProductData] = useState({
        title: '',
        desc: '',
        image: ''
    })

    const deleteProduct = async (id) => {
        try {
            const deleteProductItem = await fetch(`http://localhost:4000/deleteproduct`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id
                })
            });
            setProducts(products.filter(product => product.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const editProduct = async (id) => {
        try {
            const editProductItem = await fetch(`http://localhost:4000/editproduct`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id
                })
            });
            setProducts(products.filter(product => product.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const addProduct = async (productData) => {
        console.log(productData, 'productData');
        try {
            const addProductItem = await fetch(`http://localhost:4000/createproduct`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: productData.title,
                    desc: productData.desc,
                    image: productData.image
                })
            });
            setProducts(products.concat(productData));
        } catch (err) {
            console.error(err.message);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (imageUpload == null) return;
            const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
            uploadBytes(imageRef, imageUpload).then((snapshot) => {
              getDownloadURL(snapshot.ref).then((url) => {
                // making setImageUrls empty so that it will re-render with the new image
                setImageUrls([]);
                setImageUrls((prev) => [...prev, url]);
                let imgUrl = url;

                const newProduct = {
                    title: productData.title,
                    desc: productData.desc,
                    image: imgUrl
                }
                addProduct(newProduct);
              })
            });    
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('http://localhost:4000/products');
            const data = await res.json();
            setProducts(data);
        }
        fetchProducts();
    }, []);
  
    return (
    <div>
        <div className='products-header'>
            <h2>Products</h2>
            <button onClick={() => setShowModal(true)}>Add Product</button>
        </div>
        {/* Product Modal */}
        <div className={`modal ${showModal ? 'show-modal' : ''}`}>
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Add Product</h2>
                    <button onClick={() => setShowModal(false)}>Close</button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" placeholder="Enter title" onChange={(e) => setProductData({...productData, title: e.target.value})} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc">Description</label>
                            <textarea className="form-control" id="desc" rows="3" placeholder="Enter description" onChange={(e) => setProductData({...productData, desc: e.target.value})}></textarea>
                        </div>
                        <div className="form-group">
                            {/* upload image */}
                            <label htmlFor="image">Image</label>
                            <input type="file" className="form-control" id="image"  onChange={(event) => {setImageUpload(event.target.files[0]);}}/>
                        </div>
                        <button type='submit' className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
                        
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products && products.map((product, index) => {
                    return (
                        <tr key={index}>
                            <td>{product.title}</td>
                            <td>{product.desc}</td>
                            <td><img src={product.image} alt={product.title} /></td>
                            <td>
                                <button onClick={() => { editProduct(product.id) }}>Edit</button>
                                <button onClick={() => { deleteProduct(product.id) }}>Delete</button>
                            </td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Products