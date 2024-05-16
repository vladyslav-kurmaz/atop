export const renderList = (t: any, subListTitle?: string, subList?: string[]) => {
  const renderItem = (subList: string[]) => {
    return subList.map((item, i) => {
      return (
        <li
          className="product__container-info-container-subList-item"
          key={i}
        >
          {t(item)}
        </li>
      );
    });
  };
  return (
    <>
      {subListTitle ? (
        <h3 className="product__container-info-container-subListTitle">
          {t(subListTitle)}
        </h3>
      ) : null}
      {subList && subList?.length > 0 ? (
        <ul className="product__container-info-container-subList">
          {renderItem(subList)}
        </ul>
      ) : null}
    </>
  );
};