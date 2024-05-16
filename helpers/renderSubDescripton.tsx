export const renderSubDescription = (t: any, subDesription?: string[]) => {
  return subDesription && subDesription.length > 0
    ? subDesription.map((item, i) => {
        return (
          <p
            className="product__container-info-container-subDescription"
            key={i}
          >
            {t(item)}
          </p>
        );
      })
    : null;
};