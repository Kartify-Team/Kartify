import React from 'react';
import Modal from 'react-modal';
import ProductFeatures from './ProductsCharacteristics.jsx';

const ProductComparison = ({ mainProduct, comparedProduct, setIsOpen, modalIsOpen }) => {
  var subtitle;
  const header = () => {
    return (
      <div>
        <h2>Comparison</h2>
        <h4>{mainProduct.name}</h4>
        <h4>{comparedProduct.name}</h4>
      </div>
    );
  };

  const handleModalClose = (e) => {
    e.preventDefault();
    setIsOpen(false)
  };


  Modal.setAppElement('#app');

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={(e) => handleModalClose(e)}
      id="comparisonModal"
      className="Modal" overlayClassName="ModalOverlay"
      contentLabel="Example Modal">
      <div className="modal-header">
        {<h2 ref={_subtitle => (subtitle = _subtitle)}>Comparison</h2>}
        <button onClick={(e) => handleModalClose(e)}>
          x
        </button>
      </div>
      <ProductFeatures mainProduct={mainProduct} comparedProduct={comparedProduct} />
    </Modal >
  );

};

export default ProductComparison;