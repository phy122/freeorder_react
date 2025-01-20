import React, { useEffect, useState } from 'react'
import styles from './Product.module.css'

const Productlocate = ({ proList, setupSaveProductOrder }) => {
    const [products, setProducts] = useState(proList || [])
    const [draggedIndex, setDraggedIndex] = useState(null)

    const handleDragStart = (index) => {
        setDraggedIndex(index)
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (index) => {
        if(draggedIndex === null || draggedIndex === index) return;

        const updatedProducts = [...products];
        const [moveProduct] = updatedProducts.splice(draggedIndex, 1)
        updatedProducts.splice(index, 0, moveProduct);

        const reorderedProducts = updatedProducts.map((product,i) => ({
            ...product,
            seq: i + 1,
        }));

        setProducts(reorderedProducts)
        setDraggedIndex(null)
    }

    const handleSave = () => {
        setupSaveProductOrder(products)
    }

    useEffect(() => {
      setProducts(proList)
    }, [proList])
    
  return (
    <div className={styles['l-container']} layout:fragment="content">
        <div className={styles['l-btn-container']}>
            <a href="/">
                <button type="button" className={styles['l-cancel-btn']}>취소</button>
            </a>
            <button type="button" className={styles['l-save-btn']} id="saveBtn" onClick={handleSave}>저장</button>
        </div>

        <div className={styles['l-select-title']}>
            <h3>상품을 끌어서 순서를 변경하세요.</h3>
        </div>

        <div className={styles['l-product-list']}>
            {products && products.length > 0 ? (
                products.map((pro, index) => (
                <div key={pro.id} 
                     className={styles['l-product-card']} 
                     draggable="true" 
                     onDragStart={() => handleDragStart(index)}
                     onDragOver={handleDragOver}
                     onDrop={() => handleDrop(index)}
                     >
                    <div className={styles['product-image-placeholder']}>
                        <img src={`/pimg?id=${pro.id}`} alt="" width="100%" height="100%" draggable="false" />
                    </div>
                    <span 
                         className={styles['product-name']}
                         data-id={pro.id}
                    >
                        {pro.name}
                    </span>
                    <span className={styles['product-price']}>{pro.price}</span>
                    <span className={styles['product-seq']}>{pro.seq}</span>
                </div>
                ))
            ) : (
            <div>
                상품이 없습니다.
            </div>
             )}
        </div>
    </div>
  )
}

export default Productlocate
